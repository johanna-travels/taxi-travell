import type { ImageMetadata } from 'astro';
import brandMark from '../assets/hero/brand-mark.webp';
import { priceListWhatsAppPhone } from './priceList.ts';

/** Hero title stack — H1 + H2. */
export const heroHeadline = {
	title: 'Travel Safe',
	subtitle: 'In Bali',
} as const;

export const heroCopy = {
	intro:
		'Travel around Bali in a new car with your personal, English speaking driver. Get 10 hours daily service, fuel and unlimited mileage to go just anywhere you want!',
	ctaLabel: 'Book Your Car Now',
	ctaHref: `https://wa.me/${priceListWhatsAppPhone}?text=${encodeURIComponent(
		'Halo Admin travel-safe, saya ingin booking mobil untuk tour di Bali.\r\nApakah bisa dibantu?',
	)}`,
} as const;

export const heroLayout = {
	sectionPaddingTop: '125px',
	sectionPaddingBottom: '3.75rem',
	copyPaddingBottom: '3.75rem',
	containerMaxWidth: '767px',
} as const;

/** Centered hero brand visual (local `src/assets/hero/brand-mark.webp`). */
export const heroBrandImage: {
	src: ImageMetadata;
	alt: string;
	width: number;
	height: number;
} = {
	src: brandMark,
	alt: 'travel-safe',
	width: 1419,
	height: 2163,
};

export const heroBrandImageWidths = [320, 426, 512] as const;

export const heroBrandImageQuality = 65;

/** Mobile caps at 426px CSS; 2× DPR uses 640w WebP, not 1008w. */
export const heroBrandImageSizes = '(max-width: 767px) min(100vw - 2rem, 426px), 426px';
