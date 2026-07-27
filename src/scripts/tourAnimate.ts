/** WOW-style trigger for animate.css — no GSAP. Cards stay visible without JS. */
export function initTourAnimateCss(): void {
	if (typeof window === 'undefined') return;
	if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

	const cols = document.querySelectorAll<HTMLElement>('[data-tour-animate]');
	if (!cols.length) return;

	const observer = new IntersectionObserver(
		(entries) => {
			for (const entry of entries) {
				if (!entry.isIntersecting) continue;
				const el = entry.target as HTMLElement;
				el.classList.add('animated', 'fadeInUp');
				observer.unobserve(el);
			}
		},
		{ rootMargin: '0px 0px -6% 0px', threshold: 0.08 },
	);

	cols.forEach((col) => observer.observe(col));
}
