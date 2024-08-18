'use client';

import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { Button } from '@/components/ui/button';
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from '@/components/ui/tooltip';
import { useToast } from '@/components/ui/use-toast';

type CopyToClipboardProps = {
	text: string;
};

const CopyToClipboard: React.FunctionComponent<CopyToClipboardProps> = ({
	text,
}): React.ReactNode => {
	const { toast } = useToast();
	const t = useTranslations('contact-form');
	const [isCopying, setIsCopying] = useState(false);

	const handleCopyToClipboard = () => {
		setIsCopying(true);
		navigator.clipboard
			.writeText(text)
			.then(() => {
				toast({
					description: t('copy_email_message'),
				});
				setTimeout(() => setIsCopying(false), 2500);
			})
			.catch(() => {
				toast({
					variant: 'destructive',
					description: t('copy_email_error_message'),
				});
				setIsCopying(false);
			});
	};

	return (
		<div className='flex h-10 w-full items-center justify-between rounded-md border border-input bg-primary-foreground px-3 py-2 text-muted-foreground'>
			<span className='text-sm'>{text}</span>
			<TooltipProvider>
				<Tooltip>
					<TooltipTrigger asChild>
						<Button
							variant='ghost'
							size='icon'
							className='size-8'
							onClick={handleCopyToClipboard}
							disabled={isCopying}
							aria-label='Copy To Clipboard'>
							<span className='sr-only'>Copy To Clipboard</span>
							{isCopying ? (
								<Check className='size-4' />
							) : (
								<Copy className='size-4' />
							)}
						</Button>
					</TooltipTrigger>
					<TooltipContent>Copy to clipboard</TooltipContent>
				</Tooltip>
			</TooltipProvider>
		</div>
	);
};

export default CopyToClipboard;
