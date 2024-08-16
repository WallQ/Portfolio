'use client';

import { useEffect, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

import { cn } from '@/lib/utils';

type RevealProps = {
	children: React.ReactNode;
	opacity?: boolean;
	movement?: boolean;
	blur?: boolean;
	direction?: 'horizontal' | 'vertical';
	right?: boolean;
	className?: string;
};

const Reveal: React.FunctionComponent<RevealProps> = ({
	children,
	opacity = true,
	movement = true,
	blur = false,
	direction = 'vertical',
	right = false,
	className,
}): React.ReactNode => {
	const targetRef = useRef<HTMLDivElement>(null);
	const isInView = useInView(targetRef, { once: true });

	const mainControls = useAnimation();

	useEffect(() => {
		if (isInView) {
			void mainControls.start('visible');
		}
	}, [isInView, mainControls]);

	return (
		<div
			ref={targetRef}
			className={cn(`w-full ${className}`)}>
			<motion.div
				variants={{
					hidden: {
						opacity: opacity ? 0 : 1,
						y:
							movement && direction === 'vertical'
								? right
									? 50
									: -50
								: 0,
						x:
							movement && direction === 'horizontal'
								? right
									? 50
									: -50
								: 0,
						filter: blur ? 'blur(10px)' : 'blur(0px)',
					},
					visible: {
						opacity: 1,
						y: 0,
						x: 0,
						transition: { duration: 0.75, delay: 0.375 },
						filter: 'blur(0px)',
					},
				}}
				initial='hidden'
				animate={mainControls}>
				{children}
			</motion.div>
		</div>
	);
};

export default Reveal;