'use client';

import React, { useTransition } from 'react';
import Image from 'next/image';
import { setUserLocale } from '@/services/locale';
import { Check } from 'lucide-react';
import { useLocale } from 'next-intl';

import { type Locale } from '@/lib/utils';

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
	const [_isPending, startTransition] = useTransition();
	const locale = useLocale() as Locale;

	const handleLocaleChange = (newLocale: Locale): void => {
		startTransition(() => {
			setUserLocale(newLocale);
		});
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
