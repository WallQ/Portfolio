type FooterProps = {};

const Footer: React.FunctionComponent<FooterProps> = ({}): React.ReactNode => {
	return (
		<footer className='border-t border-border/50 py-6'>
			<div className='mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8'>
				<small className='text-xs text-muted-foreground'>
					Copyright &copy; {new Date().getFullYear()} Sérgio Félix
				</small>
				<img src='/favicon.svg' alt='Logo' loading='lazy' className='h-6 w-6' />
			</div>
		</footer>
	);
};

export default Footer;
