import { Badge } from '@/components/ui/badge';
import { Link } from '@tanstack/react-router';
import { buttonVariants } from '@/components/ui/button';
import { MoveRight } from 'lucide-react';

type ProjectCardProps = {
	id: string;
	title: string;
	description: string;
	thumbnail: string;
	tags: string[];
};

const ProjectCard: React.FunctionComponent<ProjectCardProps> = ({
	id,
	title,
	description,
	thumbnail,
	tags,
}): React.ReactNode => {
	return (
		<div className='grid grid-cols-1 gap-y-8 sm:grid-cols-10 sm:gap-x-16'>
			<img
				src={thumbnail}
				alt={title}
				loading='lazy'
				className='col-span-4 h-64 w-full rounded-md object-cover object-center'
			/>
			<div className='col-span-6 flex flex-col justify-between gap-y-4'>
				<div className='flex flex-col items-start gap-4'>
					<div className='flex flex-wrap gap-2'>
						{tags.map((tag, index) => (
							<Badge
								key={`${tag}-${index}`}
								variant='secondary'
								className='rounded-md py-1 text-primary'>
								{tag}
							</Badge>
						))}
					</div>
					<h3 className='text-2xl font-medium tracking-tight'>
						{title}
					</h3>
					<p className='line-clamp-4 text-pretty text-center leading-7 text-muted-foreground sm:text-start'>
						{description}
					</p>
				</div>
				<Link
					to='/projects/$projectId'
					params={{ projectId: id }}
					className={`${buttonVariants({
						variant: 'outline',
					})} max-w-fit`}>
					See more
					<MoveRight className='ml-2 h-4 w-4' />
				</Link>
			</div>
		</div>
	);
};

export default ProjectCard;
