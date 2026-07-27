import home from './home.svg?raw';
import phone from './phone.svg?raw';
import instagram from './instagram.svg?raw';
import whatsapp from './whatsapp.svg?raw';

export type NavIconName = 'home' | 'phone' | 'instagram' | 'whatsapp';

/** Local SVG assets — bundled inline at build time (no extra HTTP requests). */
export const navIconSvg: Record<NavIconName, string> = {
	home,
	phone,
	instagram,
	whatsapp,
};
