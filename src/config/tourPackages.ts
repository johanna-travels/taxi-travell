import type { ImageMetadata } from 'astro';

import tourLovina from '../assets/tours/lovina.jpg';
import tourEastBali from '../assets/tours/east-bali.jpg';
import tourJatiluwih from '../assets/tours/jatiluwih.jpg';
import tourKintamani from '../assets/tours/kintamani.jpg';
import tourAnimalDay from '../assets/tours/animal-day.jpg';
import tourSekumpul from '../assets/tours/sekumpul.jpg';
import { siteBrandIntroTail } from './siteBrand.ts';

export interface TourPackage {
	id: string;
	href: string;
	image: ImageMetadata;
	imageAlt: string;
	categoryLabel: string;
	title: string;
	location: string;
	excerpt: string;
	priceWas: string;
	priceNow: string;
}

/** Demo site — grid cards are display-only (no outbound tour detail URLs). */
export const tourPackagesLinksEnabled = false;

/** Homepage grid — images in `src/assets/tours/` (replace JPGs with your own shots). */
export const tourPackagesFeatured: TourPackage[] = [
	{
		id: 'lovina',
		href: 'https://tejakulataxi.com/view/lovina-tour-6-8-hours',
		image: tourLovina,
		imageAlt: 'Lovina Tour',
		categoryLabel: 'Tour & Travel',
		title: 'Lovina Tour (6 - 8 Hours)',
		location: 'Bali, Indonesia',
		excerpt: 'IDR : 600.000 / CAR MAX 4 PERSONS — Beji Temple and north Bali highlights.',
		priceWas: 'IDR 700,000',
		priceNow: 'IDR 600,000',
	},
	{
		id: 'east-bali',
		href: 'https://tejakulataxi.com/view/east-bali-tour-8-10-hours',
		image: tourEastBali,
		imageAlt: 'East Bali Tour',
		categoryLabel: 'Tour & Travel',
		title: 'East Bali Tour (8 - 10 hours)',
		location: 'Bali, Indonesia',
		excerpt: 'IDR : 700.000 1 CAR MAX 4 PERSONS — Tirta Gangga and east coast temples.',
		priceWas: 'IDR 800,000',
		priceNow: 'IDR 700,000',
	},
	{
		id: 'jatiluwih',
		href: 'https://tejakulataxi.com/view/jatiluwih-rice-terrace-tour-8-10-hours',
		image: tourJatiluwih,
		imageAlt: 'Jatiluwih Rice Terrace Tour',
		categoryLabel: 'Tour & Travel',
		title: 'Jatiluwih Rice Terrace Tour (8 - 10 Hours)',
		location: 'Bali, Indonesia',
		excerpt: 'IDR : 700.000 1 CAR MAX 4 PERSONS — Gitgit waterfall and rice terraces.',
		priceWas: 'IDR 800,000',
		priceNow: 'IDR 700,000',
	},
	{
		id: 'kintamani',
		href: 'https://tejakulataxi.com/view/kintamani-penglipuran-village-tour',
		image: tourKintamani,
		imageAlt: 'Kintamani Penglipuran Village tour',
		categoryLabel: 'Tour & Travel',
		title: 'Kintamani - Penglipuran Village tour',
		location: 'Bali, Indonesia',
		excerpt: 'IDR : 600.000 (8 hours) — Batur temple and traditional village.',
		priceWas: 'IDR 800,000',
		priceNow: 'IDR 700,000',
	},
	{
		id: 'animal-day',
		href: 'https://tejakulataxi.com/view/one-day-tour-with-animal-8-10-hours',
		image: tourAnimalDay,
		imageAlt: 'One day tour with animal',
		categoryLabel: 'Tour & Travel',
		title: 'One day tour with animal (8 - 10 hours)',
		location: 'Bali, Indonesia',
		excerpt: 'IDR : 700.000 1 car max 4 persons — Bali Bird Park and Monkey Forest.',
		priceWas: 'IDR 800,000',
		priceNow: 'IDR 700,000',
	},
	{
		id: 'sekumpul',
		href: 'https://tejakulataxi.com/view/sekumpul-water-fall-tour-6-8hours',
		image: tourSekumpul,
		imageAlt: 'Sekumpul waterfall tour',
		categoryLabel: 'Tour & Travel',
		title: 'Sekumpul water fall tour (6 - 8hours)',
		location: 'Bali, Indonesia',
		excerpt: 'Sekumpul waterfall in the northern mountains — scenic full-day route.',
		priceWas: 'IDR 750,000',
		priceNow: 'IDR 650,000',
	},
];

export const tourPackagesCopy = {
	kicker: 'Your Personal Bali Taxi Driver',
	heading: 'Tour Packages',
	introTail: siteBrandIntroTail,
	viewAllHref: 'https://tejakulataxi.com/category/tour-packages',
	viewAllLabel: 'View All Tour',
} as const;

export const btnContact1Classes =
	'btn btn-contact1 type-12-8 lh-22 inline-flex min-h-[2.875rem] items-center justify-center rounded-full border-2 border-brand-amber bg-brand-yellow px-7 py-3 text-fg-ink no-underline transition-colors hover:bg-brand-amber/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brand-amber';
