import lifeRing from './life-ring.svg?raw';
import moneyBill from './money-bill.svg?raw';
import car from './car.svg?raw';
import arrowRight from './arrow-right.svg?raw';

export type FeatureIconName = 'life-ring' | 'money-bill' | 'car' | 'arrow-right';

export const featureIconSvg: Record<FeatureIconName, string> = {
	'life-ring': lifeRing,
	'money-bill': moneyBill,
	car,
	'arrow-right': arrowRight,
};
