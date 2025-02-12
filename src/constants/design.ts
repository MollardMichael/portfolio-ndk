export type ColorScale = {
	900: string;
	800: string;
	700: string;
	600: string;
	500: string;
	400: string;
	300: string;
	200: string;
	100: string;
	50: string;
};

const gray: ColorScale = {
	900: "var(--color-grayscale-900)",
	800: "var(--color-grayscale-800)",
	700: "var(--color-grayscale-700)",
	600: "var(--color-grayscale-600)",
	500: "var(--color-grayscale-500)",
	400: "var(--color-grayscale-400)",
	300: "var(--color-grayscale-300)",
	200: "var(--color-grayscale-200)",
	100: "var(--color-grayscale-100)",
	50: "var(--color-grayscale-50)",
};

const primary: ColorScale = {
	900: "var(--color-primary-900)",
	800: "var(--color-primary-800)",
	700: "var(--color-primary-700)",
	600: "var(--color-primary-600)",
	500: "var(--color-primary-500)",
	400: "var(--color-primary-400)",
	300: "var(--color-primary-300)",
	200: "var(--color-primary-200)",
	100: "var(--color-primary-100)",
	50: "var(--color-primary-50)",
};

const secondary: ColorScale = {
	900: "var(--color-secondary-900)",
	800: "var(--color-secondary-800)",
	700: "var(--color-secondary-700)",
	600: "var(--color-secondary-600)",
	500: "var(--color-secondary-500)",
	400: "var(--color-secondary-400)",
	300: "var(--color-secondary-300)",
	200: "var(--color-secondary-200)",
	100: "var(--color-secondary-100)",
	50: "var(--color-secondary-50)",
};

export const colors = {
	gray,
	primary,
	secondary,
} as const;

export type ColorVariants = keyof typeof colors;

export const gradients = {
	background: "var(--gradient-background)",
} as const;

export const commonFontStyle = {
	fontFamily: "var(--font-family)",
};

const h1 = {
	...commonFontStyle,
	color: "var(--heading-color)",
	fontWeight: "var(--heading-1-font-weight)",
	fontSize: "var(--heading-1-font-size)",
	lineHeight: "var(--heading-line-height)",
};

const h2 = {
	...commonFontStyle,
	color: "var(--heading-color)",
	fontWeight: "var(--heading-2-font-weight)",
	fontSize: "var(--heading-2-font-size)",
	lineHeight: "var(--heading-line-height)",
};

const h3 = {
	...commonFontStyle,
	color: "var(--heading-color)",
	fontWeight: "var(--heading-3-font-weight)",
	fontSize: "var(--heading-3-font-size)",
	lineHeight: "var(--heading-line-height)",
};

const smallRegular = {
	...commonFontStyle,
	color: "var(--text-color)",
	fontWeight: "var(--text-small-regular-font-weight)",
	fontSize: "var(--text-small-regular-font-size)",
	lineHeight: "var(--text-line-height)",
};

export const texts = {
	h1,
	h2,
	h3,

	smallRegular,
} as const;

export type TextVariants = keyof typeof texts;

export const spacings = {
	4: "var(--spacing-4)",
	8: "var(--spacing-8)",
	12: "var(--spacing-12)",
	16: "var(--spacing-16)",
	20: "var(--spacing-20)",
	24: "var(--spacing-24)",
	32: "var(--spacing-32)",
	40: "var(--spacing-40)",
	48: "var(--spacing-48)",
	72: "var(--spacing-72)",
	96: "var(--spacing-96)",
} as const;

export type Spacings = keyof typeof spacings;

export const negativeSpacings = {
	4: "var(--spacing-negative-4)",
	8: "var(--spacing-negative-8)",
	12: "var(--spacing-negative-12)",
	16: "var(--spacing-negative-16)",
	20: "var(--spacing-negative-20)",
	24: "var(--spacing-negative-24)",
	32: "var(--spacing-negative-32)",
	40: "var(--spacing-negative-40)",
	48: "var(--spacing-negative-48)",
	72: "var(--spacing-negative-72)",
	96: "var(--spacing-negative-96)",
} as const;

export type NegativeSpacings = keyof typeof negativeSpacings;

export const radii = {
	big: "var(--border-radius-big)",
	small: "var(--border-radius-small)",
	minimal: "var(--border-radius-minimal)",
} as const;

export type Radii = keyof typeof radii;

export const fonts = {
	primary: "var(--font-family)",
};

export type Fonts = keyof typeof fonts;

export const breakpoints = {
	large: 950,
	medium: 800,
	small: 600,
	tiny: 500,
};
