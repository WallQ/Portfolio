import { Card, CardContent } from '@/components/ui/card';

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
		<a href={companyUrl} rel='noreferrer' target='_blank'>
			<Card className='transition-all duration-150 ease-linear hover:border-muted hover:bg-muted/10'>
				<CardContent className='flex flex-col gap-y-4 p-6'>
					<span className='text-lg font-medium tracking-tight'>
						{title}, {type}
					</span>
					<p className='text-pretty text-sm leading-7 text-muted-foreground'>
						{description}
					</p>
					<div className='flex flex-wrap justify-between gap-4 text-sm'>
						<div className='flex items-center gap-x-2'>
							<img
								src={companyImage}
								alt={companyName}
								loading='lazy'
								className='h-6 w-6 rounded-md object-cover object-center'
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
