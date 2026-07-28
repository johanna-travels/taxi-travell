/** Public site name (tab title, share previews, footer). */
export const siteName = 'Travel Safe in Bali' as const;

export const siteDescription =
	'Travel Safe in Bali — personal driver, tours, and taxi charter. Mobile-friendly demo.' as const;

/** Bold lead in gray intro paragraphs — same as site name. */
export const siteBrandName = siteName;

export const siteBrandIntroTail =
	' is a place that serves car and taxi rentals. We are here to provide accommodation according to your needs. If you want to travel from one place to another, we recommend choosing a taxi service, because it is more efficient, easy.' as const;

export const siteBrandIntroTailShort =
	' is a place that serves car and taxi rentals. We are here to provide accommodation according to your needs. We recommend choosing a taxi service, because it is more efficient, easy and fast.' as const;

/** WhatsApp / booking prefill — admin greeting. */
export function siteWhatsAppGreeting(): string {
	return `Halo Admin ${siteName}`;
}
