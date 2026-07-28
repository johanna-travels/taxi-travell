import { footerNavItems } from './footerNav.ts';
import { siteBrandIntroTail } from './siteBrand.ts';

const whatsapp = footerNavItems.find((item) => item.id === 'whatsapp');

/** Admin line — same number as footer WhatsApp (`628…`, not `620…`). */
export const priceListWhatsAppPhone = '6281338612522';

export const priceListWhatsAppBase =
	whatsapp?.href ?? `https://wa.me/${priceListWhatsAppPhone}`;

export interface TransferPriceRow {
	id: string;
	transferIn: string;
	transferOut: string;
	totalPrice: string;
	/** When true, Reservation column links to WhatsApp with route prefill. */
	book: boolean;
}

export const priceListCopy = {
	kicker: 'Your Personal Bali Taxi Driver',
	heading: 'Transfer Pricelist',
	introTail: siteBrandIntroTail,
	bookLabel: 'Book Now',
} as const;

/** Legacy WhatsApp prefill (keeps “Tranfer” wording from live site). */
export function buildTransferWhatsAppHref(transferIn: string, transferOut: string): string {
	const text = `Halo Admin travel-safe, saya ingin booking Airport Tranfer dari ${transferIn} ke ${transferOut}.\r\nApakah bisa dibantu?`;
	return `https://api.whatsapp.com/send?phone=${priceListWhatsAppPhone}&text=${encodeURIComponent(text)}`;
}

export const transferPriceRows: TransferPriceRow[] = [
	{
		id: 'tejakula-tulamben',
		transferIn: 'Tejakula',
		transferOut: 'Tulamben',
		totalPrice: 'IDR: 350.000',
		book: true,
	},
	{
		id: 'tejakula-amed',
		transferIn: 'Tejakula',
		transferOut: 'Amed',
		totalPrice: 'IDR: 400.000',
		book: true,
	},
	{
		id: 'tejakula-tirta-gangga',
		transferIn: 'Tejakula',
		transferOut: 'Tirta Gangga',
		totalPrice: 'IDR: 400.000',
		book: true,
	},
	{
		id: 'tejakula-candi-dasa',
		transferIn: 'Tejakula',
		transferOut: 'Candi Dasa',
		totalPrice: 'IDR: 500.000',
		book: true,
	},
	{
		id: 'tejakula-padang-bay',
		transferIn: 'Tejakula',
		transferOut: 'Padang Bay',
		totalPrice: 'IDR: 550.000',
		book: true,
	},
	{
		id: 'tejakula-kintamani',
		transferIn: 'Tejakula',
		transferOut: 'Kintamani',
		totalPrice: 'IDR: 400.000',
		book: true,
	},
	{
		id: 'tejakula-ubud',
		transferIn: 'Tejakula',
		transferOut: 'Ubud',
		totalPrice: 'IDR: 550.000',
		book: true,
	},
	{
		id: 'tejakula-sanur',
		transferIn: 'Tejakula',
		transferOut: 'Sanur',
		totalPrice: 'IDR: 650.000',
		book: true,
	},
	{
		id: 'tejakula-airport',
		transferIn: 'Tejakula',
		transferOut: 'Airport',
		totalPrice: 'IDR: 700.000',
		book: true,
	},
	{
		id: 'tejakula-nusa-dua',
		transferIn: 'Tejakula',
		transferOut: 'Nusa Dua',
		totalPrice: 'IDR: 800.000',
		book: true,
	},
];

/** @deprecated use transferPriceRows */
export const priceListRows = transferPriceRows;
