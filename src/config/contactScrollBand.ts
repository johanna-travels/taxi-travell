import { footerNavItems } from './footerNav.ts';
import { siteBrandIntroTailShort } from './siteBrand.ts';

const whatsapp = footerNavItems.find((item) => item.id === 'whatsapp');

export const contactScrollBandCopy = {
	title: 'Your Personal Bali Taxi Driver!',
	bodyTail: siteBrandIntroTailShort,
	ctaLabel: 'Booking Now',
	ctaHref: whatsapp?.href ?? 'https://wa.me/6281338612522',
} as const;
