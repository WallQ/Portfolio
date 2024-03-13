import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Check, Copy } from 'lucide-react';
import { useState } from 'react';

type CopyToClipboardProps = {
	text: string;
};

const CopyToClipboard: React.FunctionComponent<CopyToClipboardProps> = ({
	text,
}): React.ReactNode => {
	const { toast } = useToast();
	const [isCopying, setIsCopying] = useState(false);

	const handleCopyToClipboard = () => {
		setIsCopying(true);
		navigator.clipboard
			.writeText(text)
			.then(() => {
				toast({
					description: 'Email copied to clipboard.',
				});
				setTimeout(() => setIsCopying(false), 2000);
			})
			.catch(() => {
				toast({
					variant: 'destructive',
					description: 'Failed to copy email to clipboard.',
				});
				setIsCopying(false);
			});
	};

	return (
		<div className='flex h-10 w-full items-center justify-between rounded-md border border-input bg-primary-foreground px-2 py-2 text-muted-foreground'>
			<span className='text-sm'>{text}</span>
			<Button
				variant='ghost'
				size='icon'
				className='h-8 w-8'
				onClick={handleCopyToClipboard}
				disabled={isCopying}>
				{isCopying ? (
					<Check className='h-4 w-4' />
				) : (
					<Copy className='h-4 w-4' />
				)}
			</Button>
		</div>
	);
};

export default CopyToClipboard;
