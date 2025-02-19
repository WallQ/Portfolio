import { memo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { APP_ROUTES } from '@/routes/app';
import { MoveRight } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { Badge } from '@/components/ui/badge';
import { buttonVariants } from '@/components/ui/button';
import Typography from '@/components/typography';

type ProjectCardProps = {
	id: string;
	title: string;
	description: string;
	thumbnail: string;
	tags: string[];
};

const ProjectCard: React.FunctionComponent<ProjectCardProps> = memo(
	({ id, title, description, thumbnail, tags }) => {
		const t = useTranslations('homepage');

		return (
			<div className='grid grid-cols-1 gap-y-8 sm:grid-cols-10 sm:gap-x-16'>
				<Link
					href={APP_ROUTES.PROJECT(id)}
					className='col-span-4'>
					<Image
						src={thumbnail}
						alt={title}
						loading='lazy'
						width={512}
						height={288}
						className='aspect-16/9 h-full w-full rounded-md object-cover object-center'
					/>
				</Link>
				<div className='col-span-6 flex flex-col justify-between gap-y-4'>
					<div className='flex flex-col items-start gap-y-4'>
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
						<Typography variant='h3'>{title}</Typography>
						<Typography
							variant='p'
							className='line-clamp-4'>
							{description}
						</Typography>
					</div>
					<Link
						href={APP_ROUTES.PROJECT(id)}
						className={`${buttonVariants({
							variant: 'outline',
						})} max-w-fit`}>
						{t('projects.view_details_button')}
						<MoveRight className='size-4' />
					</Link>
				</div>
			</div>
		);
	},
);

ProjectCard.displayName = 'ProjectCard';

export default ProjectCard;
