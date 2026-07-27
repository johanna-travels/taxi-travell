/** Skip parallax only — footer must never depend on GSAP. */
export function isSlowNetwork(): boolean {
	if (typeof navigator === 'undefined') return false;
	const conn = (
		navigator as Navigator & {
			connection?: { saveData?: boolean; effectiveType?: string };
		}
	).connection;
	if (conn?.saveData) return true;
	const t = conn?.effectiveType;
	return t === 'slow-2g' || t === '2g' || t === '3g';
}

export function prefersReducedMotion(): boolean {
	return (
		typeof window !== 'undefined' &&
		window.matchMedia('(prefers-reduced-motion: reduce)').matches
	);
}

const SCROLL_STOP_MS = 220;
const SCROLL_DELTA_MIN = 8;

/** CSS-only footer — works on 3G with zero GSAP. */
export function initFooterScroll(): void {
	const footer = document.querySelector<HTMLElement>('.scroll-footer');
	if (!footer) return;

	let stopTimer: ReturnType<typeof setTimeout> | undefined;
	let lastScrollY = window.scrollY;
	let ready = false;

	const show = () => footer.classList.remove('scroll-footer--hidden');
	const hide = () => footer.classList.add('scroll-footer--hidden');

	show();

	window.addEventListener(
		'load',
		() => {
			setTimeout(() => {
				ready = true;
			}, 400);
		},
		{ once: true },
	);

	const onScroll = () => {
		if (!ready) return;

		const y = window.scrollY;
		if (Math.abs(y - lastScrollY) < SCROLL_DELTA_MIN) return;
		lastScrollY = y;

		hide();
		if (stopTimer) clearTimeout(stopTimer);
		stopTimer = setTimeout(show, SCROLL_STOP_MS);
	};

	window.addEventListener('scroll', onScroll, { passive: true });
}

const GSAP_LOAD_MS = 8000;

async function loadGsapBundle(): Promise<{
	gsap: (typeof import('gsap'))['gsap'];
	ScrollTrigger: (typeof import('gsap/ScrollTrigger'))['ScrollTrigger'];
}> {
	const load = Promise.all([import('gsap'), import('gsap/ScrollTrigger')]);
	const timeout = new Promise<never>((_, reject) =>
		setTimeout(() => reject(new Error('gsap-timeout')), GSAP_LOAD_MS),
	);
	const [{ gsap }, { ScrollTrigger }] = await Promise.race([load, timeout]);
	return { gsap, ScrollTrigger };
}

function initSectionOverHeadings(gsap: (typeof import('gsap'))['gsap']): void {
	const roots = document.querySelectorAll<HTMLElement>('[data-section-over-heading]');
	if (!roots.length) return;

	const staggerFrom = (words: NodeListOf<HTMLElement>) => {
		gsap.from(words, {
			y: 22,
			duration: 0.65,
			ease: 'power3.out',
			stagger: 0.07,
			clearProps: 'transform',
		});
	};

	roots.forEach((root) => {
		const words = root.querySelectorAll<HTMLElement>(
			'.section-over-heading__word, [data-hero-phrase], .hero__title-main, .hero__title-sub',
		);
		if (!words.length) return;

		const section = root.closest<HTMLElement>('.section') ?? root;
		const top = section.getBoundingClientRect().top;
		const inView = top < window.innerHeight * 0.88;

		if (inView) {
			staggerFrom(words);
			return;
		}

		gsap.from(words, {
			y: 22,
			duration: 0.65,
			ease: 'power3.out',
			stagger: 0.07,
			clearProps: 'transform',
			scrollTrigger: {
				trigger: section,
				start: 'top 88%',
				once: true,
			},
		});
	});
}

async function initGsapEnhancements(): Promise<void> {
	if (prefersReducedMotion() || isSlowNetwork()) return;

	try {
		const { gsap, ScrollTrigger } = await loadGsapBundle();
		gsap.registerPlugin(ScrollTrigger);
		initSectionOverHeadings(gsap);
	} catch {
		// 3G / timeout — no GSAP; heading + footer stay CSS-only.
	}
}

export function scheduleScrollSiteInit(): void {
	initFooterScroll();

	const runGsap = () => {
		void initGsapEnhancements();
	};

	if ('requestIdleCallback' in window) {
		requestIdleCallback(runGsap, { timeout: 4000 });
	} else {
		setTimeout(runGsap, 500);
	}
}
