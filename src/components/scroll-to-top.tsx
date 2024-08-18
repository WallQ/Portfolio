'use client';

import { useCallback, useEffect, useState } from 'react';
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
		return () => window.removeEventListener('scroll', toggleVisibility);
	}, []);

	const scrollToTop = useCallback(() => {
		if (typeof window === 'undefined') return;
		window.scrollTo({
			top: 0,
			behavior: 'smooth',
		});
	}, []);

	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger asChild>
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
				<TooltipContent>Scroll to top</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
};

export default ScrollToTop;
