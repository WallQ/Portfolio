'use client';

import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip';

const ScrollToTop: React.FunctionComponent = (): React.ReactNode => {
	const [isVisible, setIsVisible] = useState<boolean>(false);

	const toggleVisibility = () => {
		if (window.scrollY > 400) return setIsVisible(true);
		return setIsVisible(false);
	};

	useEffect(() => {
		window.addEventListener('scroll', toggleVisibility);
		return () => {
			window.removeEventListener('scroll', toggleVisibility);
		};
	}, []);

	const isBrowser = () => typeof window !== 'undefined';

	const scrollToTop = () => {
		if (!isBrowser()) return;
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	};

	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger
					asChild
					className={cn({
						'cursor-default': !isVisible,
						'cursor-pointer': isVisible,
					})}>
					<Button
						onClick={scrollToTop}
						variant='ghost'
						size='icon'
						className={cn(
							'fixed bottom-0 right-0 z-50 m-4 transition-opacity duration-300 ease-in-out',
							{
								'opacity-0': !isVisible,
								'opacity-100': isVisible,
							},
						)}
						aria-label='Scroll To Top'>
						<span className='sr-only'>Scroll To Top</span>
						<ArrowUp className='size-4' />
					</Button>
				</TooltipTrigger>
				<TooltipContent
					className={cn('cursor-default', {
						'opacity-0': !isVisible,
						'opacity-100': isVisible,
					})}>
					Scroll to top
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
};

export default ScrollToTop;
