'use client';

import Image from 'next/image';
import { Check } from 'lucide-react';
import { useTheme } from 'next-themes';

type ThemeSwitcherProps = {
	themeType: 'light' | 'dark' | 'system';
	title: string;
	icon: string;
};

const ThemeSwitcher: React.FunctionComponent<ThemeSwitcherProps> = ({
	themeType,
	title,
	icon,
}): React.ReactNode => {
	const { setTheme, theme } = useTheme();
	const isActive = theme === themeType;

	return (
		<button
			className='flex w-full cursor-pointer items-center justify-between gap-x-2'
			onClick={() => setTheme(themeType)}>
			<div className='flex items-center'>
				<Image
					src={icon}
					alt={title}
					width={16}
					height={16}
					className='mr-2 size-4 dark:invert'
				/>
				<span>{title}</span>
			</div>
			{isActive && <Check className='size-4' />}
		</button>
	);
};

export default ThemeSwitcher;
