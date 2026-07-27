import { footerNavItems } from './footerNav.ts';

const whatsapp = footerNavItems.find((item) => item.id === 'whatsapp');

export const contactScrollBandCopy = {
	title: 'Your Personal Bali Taxi Driver!',
	body: 'Tejakula Taxi is a place that serves car and taxi rentals. We are here to provide accommodation according to your needs. We recommend choosing a taxi service, because it is more efficient, easy and fast.',
	ctaLabel: 'Booking Now',
	ctaHref: whatsapp?.href ?? 'https://wa.me/6281338612522',
} as const;
