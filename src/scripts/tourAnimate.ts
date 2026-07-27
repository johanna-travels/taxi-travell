/** animate.css entrances (fadeInUp / fadeInDown) — no GSAP. Safe to call from multiple islands. */
let entranceObserver: IntersectionObserver | null = null;

function getEntranceObserver(): IntersectionObserver {
	if (entranceObserver) return entranceObserver;

	entranceObserver = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (!entry.isIntersecting) continue;
				const el = entry.target as HTMLElement;
				const down = el.hasAttribute('data-animate-fade-in-down');
				el.classList.add('animated', down ? 'fadeInDown' : 'fadeInUp');
				const delay = el.dataset.animateDelay;
				if (delay) el.style.animationDelay = `${delay}ms`;
				el.dataset.entranceAnimateDone = 'true';
				entranceObserver?.unobserve(el);
			}
		},
		{ rootMargin: '0px 0px -6% 0px', threshold: 0.08 },
	);

	return entranceObserver;
}

export function initAnimateEntrances(): void {
	if (typeof window === 'undefined') return;
	if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

	const observer = getEntranceObserver();
	document
		.querySelectorAll<HTMLElement>('[data-animate-fade-in-up], [data-animate-fade-in-down]')
		.forEach((el) => {
			if (el.dataset.entranceAnimateDone === 'true') return;
			observer.observe(el);
		});
}
