'use client';

import { useEffect, useMemo, useRef } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';

import { cn } from '@/lib/utils';

type RevealProps = {
	children: React.ReactNode;
	y?: number;
	x?: number;
	movement?: boolean;
	direction?: 'horizontal' | 'vertical';
	right?: boolean;
	opacity?: boolean;
	blur?: boolean;
	className?: string;
	innerClassName?: string;
};

const Reveal: React.FunctionComponent<RevealProps> = ({
	children,
	y,
	x,
	movement = true,
	direction = 'vertical',
	right = false,
	opacity = true,
	blur = false,
	className = '',
	innerClassName,
}): React.ReactNode => {
	const targetRef = useRef<HTMLDivElement>(null);
	const isInView = useInView(targetRef, { once: true });
	const mainControls = useAnimation();

	useEffect(() => {
		if (isInView) void mainControls.start('visible');
	}, [isInView, mainControls]);

	const variants = useMemo(
		() => ({
			hidden: {
				opacity: opacity ? 0 : 1,
				y:
					movement && direction === 'vertical'
						? right
							? (y ?? 50)
							: (y ?? -50)
						: 0,
				x:
					movement && direction === 'horizontal'
						? right
							? (x ?? 50)
							: (x ?? -50)
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
		}),
		[opacity, movement, direction, right, y, x, blur],
	);

	return (
		<div
			ref={targetRef}
			className={cn(`w-full ${className}`)}>
			<motion.div
				variants={variants}
				initial='hidden'
				animate={mainControls}
				className={cn(`${innerClassName}`)}>
				{children}
			</motion.div>
		</div>
	);
};

export default Reveal;
