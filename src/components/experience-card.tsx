import Image from 'next/image';

import { Card, CardContent } from '@/components/ui/card';
import Typography from '@/components/typography';

type ExperienceCardProps = {
	title: string;
	type: string;
	description: string;
	companyUrl: string;
	companyImage: string;
	companyName: string;
	startDate: string;
	endDate: string;
};

const ExperienceCard: React.FunctionComponent<ExperienceCardProps> = ({
	title,
	type,
	description,
	companyUrl,
	companyImage,
	companyName,
	startDate,
	endDate,
}): React.ReactNode => {
	return (
		<a
			href={companyUrl}
			rel='noopener noreferrer'
			target='_blank'>
			<Card className='h-full transition-all duration-150 ease-linear hover:border-muted hover:bg-muted/10'>
				<CardContent className='flex flex-col gap-y-4 p-6'>
					<Typography variant='h5'>
						{title}, {type}
					</Typography>
					<Typography
						variant='p'
						className='line-clamp-2 text-sm'>
						{description}
					</Typography>
					<div className='flex flex-wrap justify-between gap-4 text-sm'>
						<div className='flex items-center gap-x-2'>
							<Image
								src={companyImage}
								alt={companyName}
								loading='lazy'
								width={24}
								height={24}
								className='rounded-md object-cover object-center'
							/>
							{companyName}
						</div>
						{startDate} - {endDate}
					</div>
				</CardContent>
			</Card>
		</a>
	);
};

export default ExperienceCard;
