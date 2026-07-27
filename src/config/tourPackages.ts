export interface TourPackage {
	id: string;
	href: string;
	imageUrl: string;
	imageAlt: string;
	categoryLabel: string;
	title: string;
	location: string;
	excerpt: string;
	priceWas: string;
	priceNow: string;
}

/** Homepage grid — full catalog TBD. */
export const tourPackagesFeatured: TourPackage[] = [
	{
		id: 'lovina',
		href: 'https://tejakulataxi.com/view/lovina-tour-6-8-hours',
		imageUrl:
			'https://jwc.gotra-resources.my.id/web-upload/1656558226-30-06-2022-xPmWNDLVjKq2r9UHyBF1TiQ0ctdYM7lp.jpg',
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
		imageUrl:
			'https://jwc.gotra-resources.my.id/web-upload/1656558090-30-06-2022-XsMPfzbeiuEa2y5IKRpcV7GdQH6ZALSt.jpg',
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
		imageUrl:
			'https://jwc.gotra-resources.my.id/web-upload/1656557811-30-06-2022-dOis0UNoDeg7bqIRM3Q26XtlxmwaCFG8.jpg',
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
		imageUrl:
			'https://jwc.gotra-resources.my.id/web-upload/1656557682-30-06-2022-TPCsBi1v7LbWzaZmwdypeqG2nNKglYJr.jpg',
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
		imageUrl:
			'https://jwc.gotra-resources.my.id/web-upload/1656557605-30-06-2022-0XbxaFkDuVJYMNodwsUvyIhKAqSp2CGg.jpg',
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
		imageUrl:
			'https://jwc.gotra-resources.my.id/web-upload/1656299038-27-06-2022-MwW0JUcRrPOThkGYqtLfy9XmeoBHVQzF.jpg',
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
	intro:
		'Tejakula Taxi is a place that serves car and taxi rentals. We are here to provide accommodation according to your needs. If you want to travel from one place to another, we recommend choosing a taxi service, because it is more efficient, easy',
	viewAllHref: 'https://tejakulataxi.com/category/tour-packages',
	viewAllLabel: 'View All Tour',
} as const;

export const btnContact1Classes =
	'btn btn-contact1 type-12-8 lh-22 inline-flex min-h-[2.875rem] items-center justify-center rounded-full border-2 border-brand-amber bg-brand-yellow px-7 py-3 text-fg-ink no-underline transition-colors hover:bg-brand-amber/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brand-amber';
