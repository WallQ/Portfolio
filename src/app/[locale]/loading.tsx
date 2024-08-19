import { Loader2 } from 'lucide-react';

const Loading: React.FunctionComponent = (): React.ReactNode => {
	return (
		<div>
			<Loader2 className='size-4 animate-spin text-red-500 fill-red' />
		</div>
	);
};

export default Loading;
