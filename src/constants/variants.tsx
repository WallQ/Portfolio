export const FADE_DOWN_ANIMATION_VARIANTS = {
	hidden: { opacity: 0, y: -10 },
	show: { opacity: 1, y: 0, transition: { type: 'spring' } },
};

export const BLUR_IN = {
	hidden: { filter: 'blur(10px)', opacity: 0 },
	visible: { filter: 'blur(0px)', opacity: 1 },
};
