'use client';

import {
	ThemeProvider as NextThemesProvider,
	ThemeProviderProps,
} from 'next-themes';

const ThemeProvider: React.FunctionComponent<ThemeProviderProps> = ({
	children,
	...props
}): React.ReactNode => {
	return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
};

export default ThemeProvider;
