import type { ImageMetadata } from 'astro';

import post1 from '../assets/instagram/post-1.jpg';
import post2 from '../assets/instagram/post-2.jpg';
import post3 from '../assets/instagram/post-3.jpg';
import post4 from '../assets/instagram/post-4.jpg';
import post5 from '../assets/instagram/post-5.jpg';
import post6 from '../assets/instagram/post-6.jpg';

export const instagramProfileUrl =
	'https://www.instagram.com/bali_personal_transport_taxi';

/** Section kicker above the embedded post card. */
export const instagramSectionKicker = 'Instagram' as const;

export interface InstagramPost {
	id: string;
	href: string;
	alt: string;
	image: ImageMetadata;
	/** Photo credit (Unsplash / Picsum — replace when you use your own shots) */
	credit?: string;
}

/** Local assets in `src/assets/instagram/` — no hotlinking, 3G-friendly. */
export const instagramPosts: InstagramPost[] = [
	{
		id: 'post-1',
		href: instagramProfileUrl,
		alt: 'Coach on a scenic road — Bali transport',
		image: post1,
		credit: 'Unsplash',
	},
	{
		id: 'post-2',
		href: instagramProfileUrl,
		alt: 'Steering wheel view on a coastal drive',
		image: post2,
		credit: 'Unsplash',
	},
	{
		id: 'post-3',
		href: instagramProfileUrl,
		alt: 'Traveler on a mountain road trip',
		image: post3,
		credit: 'Picsum',
	},
	{
		id: 'post-4',
		href: instagramProfileUrl,
		alt: 'Flat lay of map and camera for travel planning',
		image: post4,
		credit: 'Picsum',
	},
	{
		id: 'post-5',
		href: instagramProfileUrl,
		alt: 'Tropical street scene in Bali',
		image: post5,
		credit: 'Picsum',
	},
	{
		id: 'post-6',
		href: instagramProfileUrl,
		alt: 'Palm-lined road in warm sunlight',
		image: post6,
		credit: 'Picsum',
	},
];

export const instagramPostsMobile = instagramPosts.slice(0, 3);
