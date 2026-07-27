export interface SplitIconFeature {
	id: string;
	icon: 'life-ring' | 'money-bill' | 'car';
	title: string;
	description: string;
}

export const splitSectionCopy = {
	features: [
		{
			id: 'drivers',
			icon: 'life-ring',
			title: 'Professional drivers',
			description:
				'Our team have years of experience in delivering travelers like you to explore the unique side of Bali and they’ve been repeatedly vouched for their hospitality.',
		},
		{
			id: 'pricing',
			icon: 'money-bill',
			title: 'No hidden cost',
			description:
				'All rates and benefits are stated clearly on our pricing pages. You only pay what you have agreed to on each day trip. Driver service, fuel & taxes are included by default.',
		},
		{
			id: 'cars',
			icon: 'car',
			title: 'Excellent cars',
			description:
				'Our cars are properly-maintained with cool air-conditioner. Each of these vehicles are sanitized daily and comes with a strict non-smoking rule for everyone to comply.',
		},
	] satisfies SplitIconFeature[],
} as const;
