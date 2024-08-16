'use client';

import React from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Check } from 'lucide-react';
import { useLocale } from 'next-intl';

import { type Locale } from '@/lib/locales';

type LanguageSwitcherProps = {
	lang: 'en' | 'pt';
	title: string;
	icon: string;
};

const LanguageSwitcher: React.FunctionComponent<LanguageSwitcherProps> = ({
	lang,
	title,
	icon,
}) => {
	const locale = useLocale() as Locale;
	const router = useRouter();

	const handleLocaleChange = (newLocale: Locale): void => {
		document.cookie = `NEXT_LOCALE=${newLocale}; path=/; max-age=31536000; SameSite=Lax`;
		router.refresh();
	};

	return (
		<button
			className='flex w-full cursor-pointer items-center justify-between gap-x-2'
			onClick={() => handleLocaleChange(lang)}>
			<div className='flex items-center'>
				<Image
					src={icon}
					alt={title}
					loading='lazy'
					width={16}
					height={16}
					className='mr-2 size-4'
				/>
				<span>{title}</span>
			</div>
			{locale === lang && <Check className='size-4' />}
		</button>
	);
};

export default LanguageSwitcher;
