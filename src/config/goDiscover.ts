import type { ImageMetadata } from 'astro';
import post1 from '../assets/instagram/post-1.jpg';
import { siteName, siteWhatsAppGreeting } from './siteBrand.ts';
import { priceListWhatsAppPhone } from './priceList.ts';

export interface GoDiscoverImage {
	src: ImageMetadata;
	alt: string;
	width: number;
	height: number;
}

export const goDiscoverCopy = {
	kicker: 'Go discover with',
	heading: 'Great cars, expert drivers.',
	bodyHtml:
		'Travel anywhere in Bali for 10 hours with unlimited fuel. Enjoy the comfort of traveling inside <strong>a brand-new air-conditioned car</strong>, guided by <strong>our experienced English-speaking Bali driver</strong>.',
	ctaLabel: 'Book Your Car Now',
} as const;

export const goDiscoverCtaHref = `https://wa.me/${priceListWhatsAppPhone}?text=${encodeURIComponent(
	`${siteWhatsAppGreeting()}, saya ingin booking mobil untuk tour di Bali.\r\nApakah bisa dibantu?`,
)}`;

/** Hero tile — replace with `src/assets/discover/*` when brand photo is ready. */
export const goDiscoverImage: GoDiscoverImage = {
	src: post1,
	alt: `${siteName} car on a Bali road`,
	width: 960,
	height: 720,
};

export const goDiscoverImageWidths = {
	default: 480,
	retina: 960,
} as const;

export const goDiscoverImageQuality = 72;

export const goDiscoverImageSizes =
	'(min-width: 1024px) calc((min(100vw, 1240px) - 3rem) * 0.55), 100vw';
