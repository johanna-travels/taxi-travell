/** animate.css entrances (fadeInUp / fadeInDown / slideInLeft) — no GSAP. */
let entranceObserver: IntersectionObserver | null = null;

function getEntranceObserver(): IntersectionObserver {
	if (entranceObserver) return entranceObserver;

	entranceObserver = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (!entry.isIntersecting) continue;
				const el = entry.target as HTMLElement;
				const down = el.hasAttribute('data-animate-fade-in-down');
				const slideLeft = el.hasAttribute('data-animate-slide-in-left');
				const animClass = slideLeft ? 'slideInLeft' : down ? 'fadeInDown' : 'fadeInUp';
				el.classList.add('animated', animClass);
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
		.querySelectorAll<HTMLElement>(
			'[data-animate-fade-in-up], [data-animate-fade-in-down], [data-animate-slide-in-left]',
		)
		.forEach((el) => {
			if (el.dataset.entranceAnimateDone === 'true') return;
			observer.observe(el);
		});
}
