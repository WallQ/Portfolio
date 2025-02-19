'use client';

import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { toast } from 'sonner';

import { Button } from '@/components/ui/button';
import {
	Tooltip,
	TooltipContent,
	TooltipTrigger,
} from '@/components/ui/tooltip';

type CopyToClipboardProps = {
	text: string;
};

const CopyToClipboard: React.FunctionComponent<CopyToClipboardProps> = ({
	text,
}): React.ReactNode => {
	const t = useTranslations('contact-form');
	const [isCopying, setIsCopying] = useState(false);

	const handleCopyToClipboard = () => {
		setIsCopying(true);
		navigator.clipboard
			.writeText(text)
			.then(() => {
				toast(t('copy_email_message'));
				setTimeout(() => setIsCopying(false), 2500);
			})
			.catch(() => {
				toast(t('copy_email_error_message'));
				setIsCopying(false);
			});
	};

	return (
		<div className='flex h-10 w-full items-center justify-between rounded-md border border-input bg-primary-foreground px-3 py-2 text-muted-foreground'>
			<span className='text-sm'>{text}</span>
			<Tooltip>
				<TooltipTrigger>
					<Button
						variant='ghost'
						size='icon'
						aria-label='Copy To Clipboard'
						className='size-8 cursor-pointer'
						onClick={handleCopyToClipboard}
						disabled={isCopying}>
						<span className='sr-only'>Copy To Clipboard</span>
						{isCopying ? (
							<Check className='size-4' />
						) : (
							<Copy className='size-4' />
						)}
					</Button>
				</TooltipTrigger>
				<TooltipContent>
					<p>Copy to clipboard</p>
				</TooltipContent>
			</Tooltip>
		</div>
	);
};

export default CopyToClipboard;
