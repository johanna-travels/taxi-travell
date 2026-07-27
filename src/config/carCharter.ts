import { priceListWhatsAppPhone } from './priceList.ts';

export interface CarCharterPlan {
	id: string;
	title: string;
	amount: string;
	features: string[];
	featured?: boolean;
}

export const carCharterCopy = {
	kicker: 'Your Personal Bali Taxi Driver',
	heading: 'Car Charter Service',
	intro:
		'Tejakula Taxi is a place that serves car and taxi rentals. We are here to provide accommodation according to your needs. If you want to travel from one place to another, we recommend choosing a taxi service, because it is more efficient, easy',
	priceLabel: 'PER CAR',
	bookLabel: 'Booking Now',
} as const;

/** Same footprint as `btnContact1Classes` — outline variant for non-featured plans. */
export const carCharterPlanBtnOutlineClasses =
	'type-12-8 lh-22 inline-flex min-h-[2.875rem] w-full max-w-[14rem] items-center justify-center rounded-full border-2 border-fg-gray-900 bg-white px-7 py-3 text-fg-ink no-underline transition-colors hover:bg-surface-muted focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brand-amber';

export const carCharterPlanBtnPrimaryClasses =
	'type-12-8 lh-22 inline-flex min-h-[2.875rem] w-full max-w-[14rem] items-center justify-center rounded-full border-2 border-brand-amber bg-brand-yellow px-7 py-3 text-fg-ink no-underline transition-colors hover:bg-brand-amber/15 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-3 focus-visible:outline-brand-amber';

export const carCharterPlans: CarCharterPlan[] = [
	{
		id: 'full-day',
		title: 'Full Day Tours',
		amount: '700,000',
		features: [
			'Duration : 8 Hours',
			'Good Car with Air Conditioning',
			'Driver Speak English',
			'Petrol & Parking Fee',
			'Extra Time : IDR 50.000',
			'Using VW cars additional fee of IDR 100.000',
		],
	},
	{
		id: 'half-day',
		title: 'Half Day Tours',
		amount: '500,000',
		featured: true,
		features: [
			'Duration : 6 Hours',
			'Good Car with Air Conditioning',
			'Driver Speak English',
			'Petrol & Parking Fee',
			'Extra Time : IDR 50.000',
			'Using VW cars additional fee of IDR 100.000',
		],
	},
	{
		id: 'one-day-trip',
		title: 'One Day Trip',
		amount: '700,000',
		features: [
			'Duration : 10 Hours',
			'Good Car with Air Conditioning',
			'Driver Speak English',
			'Petrol & Parking Fee',
			'Extra Time : IDR 50.000',
			'Using VW cars additional fee of IDR 100.000',
		],
	},
];

export function buildCarCharterWhatsAppHref(planTitle: string): string {
	const text = `Halo Admin Tejakula Taxi, saya ingin booking ${planTitle} (Car Charter).\r\nApakah bisa dibantu?`;
	return `https://wa.me/${priceListWhatsAppPhone}?text=${encodeURIComponent(text)}`;
}
