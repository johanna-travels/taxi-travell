import type { NavIconName } from '../icons/index.ts';

export type FooterRingVariant = 'plain' | 'insta' | 'whatsapp';

export interface FooterNavItem {
	id: string;
	href: string;
	label: string;
	icon: NavIconName;
	ringVariant: FooterRingVariant;
}

/** Single source — local `src/icons/{name}.svg` wired via NavIcon. */
export const footerNavItems: FooterNavItem[] = [
	{
		id: 'instagram',
		href: 'https://www.instagram.com/bali_personal_transport_taxi',
		label: 'Instagram',
		icon: 'instagram',
		ringVariant: 'insta',
	},
	{
		id: 'whatsapp',
		href: 'https://wa.me/6281338612522',
		label: 'WhatsApp',
		icon: 'whatsapp',
		ringVariant: 'whatsapp',
	},
	{
		id: 'phone',
		href: 'tel:+6281338612522',
		label: 'Phone',
		icon: 'phone',
		ringVariant: 'plain',
	},
];
