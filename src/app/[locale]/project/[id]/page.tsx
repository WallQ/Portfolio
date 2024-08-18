import Image from 'next/image';
import { notFound, redirect } from 'next/navigation';
import { projects } from '@/data/projects';
import { APP_ROUTES } from '@/routes/app';
import Contact from '@/sections/contact';
import { ExternalLink } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import { unstable_setRequestLocale } from 'next-intl/server';

import { type Locale } from '@/lib/locales';
import { Badge } from '@/components/ui/badge';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import Reveal from '@/components/reveal';
import Typography from '@/components/typography';

type ProjectPageProps = {
	params: {
		locale: Locale;
		id: string;
	};
};

export const generateMetadata = ({ params }: ProjectPageProps) => {
	const title = projects.en?.find(
		(project) => project.id === params.id,
	)?.title;

	return {
		title: title ?? 'Project XYWZ',
	};
};

export default function ProjectPage({ params }: ProjectPageProps) {
	unstable_setRequestLocale(params.locale);

	const locale = useLocale() as Locale;
	const t = useTranslations('project');

	if (!params.id) return redirect(APP_ROUTES.HOME);

	if (!projects[locale]) return redirect(APP_ROUTES.HOME);

	const project = projects[locale].find(
		(project) => project.id === params.id,
	);

	if (!project) return notFound();

	return (
		<div className='flex flex-col gap-y-8'>
			<div className='grid grid-cols-1 grid-rows-2 gap-8 md:grid-rows-1 md:grid-cols-7 md:gap-16 pb-8'>
				<Reveal
					direction='horizontal'
					className='md:col-span-4'>
					<div className='flex flex-col gap-y-4'>
						<div className='flex flex-wrap gap-2'>
							{project.tags.map((tag, index) => (
								<Badge
									key={`${tag}-${index}`}
									variant='secondary'
									className='rounded-md py-1 text-primary'>
									{tag}
								</Badge>
							))}
						</div>
						<a
							href={project.url}
							rel='noopener noreferrer'
							target='_blank'
							className='inline-flex items-center gap-x-2 text-3xl font-semibold tracking-tight hover:text-primary hover:underline'>
							{project.title}
							<ExternalLink className='h-6 w-6' />
						</a>
						<Typography variant='p'>
							{project.description}
						</Typography>
					</div>
				</Reveal>
				<Reveal
					direction='horizontal'
					right={true}
					className='md:col-span-3'>
					<div className='flex flex-col gap-y-4'>
						<div className='flex gap-x-4'>
							<div className='flex flex-col gap-y-2'>
								<span className='text-muted-foreground'>
									{t('type')}
								</span>
								<span className='font-semibold'>
									{project.type}
								</span>
							</div>
							<div className='flex flex-col gap-y-2'>
								<span className='text-muted-foreground'>
									{t('role')}
								</span>
								<span className='font-semibold'>
									{project.role}
								</span>
							</div>
						</div>
						<div className='flex flex-col gap-y-2'>
							<span className='text-muted-foreground'>
								{t('technologies')}
							</span>
							<div className='flex flex-wrap gap-2'>
								{project.technologies.map((tech, index) => (
									<Badge
										key={`${tech.name}-${index}`}
										variant='secondary'
										className='flex gap-x-2 rounded-md py-1'>
										<Image
											src={tech.logo}
											alt={tech.name}
											loading='lazy'
											width={16}
											height={16}
											className='size-4'
										/>
										{tech.name}
									</Badge>
								))}
							</div>
						</div>
						<div className='flex flex-col gap-y-2'>
							<span className='text-muted-foreground'>
								{t('tools')}
							</span>
							<div className='flex flex-wrap gap-2'>
								{project.tools.map((tools, index) => (
									<Badge
										key={`${tools.name}-${index}`}
										variant='secondary'
										className='flex gap-x-2 rounded-md py-1'>
										<Image
											src={tools.logo}
											alt={tools.name}
											loading='lazy'
											width={16}
											height={16}
											className='size-4'
										/>
										{tools.name}
									</Badge>
								))}
							</div>
						</div>
					</div>
				</Reveal>
			</div>
			<Separator />
			<Reveal>
				<ScrollArea className='w-full rounded-md border'>
					<div className='flex w-max gap-x-4 p-4'>
						{project.images.map((image) => (
							<div key={`${project.id}-${image.title}`}>
								<a
									href={image.src}
									rel='noopener noreferrer'
									target='_blank'>
									<figure className='shrink-0'>
										<div className='overflow-hidden rounded-md'>
											<Image
												src={image.src}
												alt={image.title}
												className='aspect-[16/9] w-full h-auto object-cover object-center'
												width={704}
												height={396}
											/>
										</div>
										<figcaption className='pt-2 text-xs text-muted-foreground'>
											{image.title}
										</figcaption>
									</figure>
								</a>
							</div>
						))}
					</div>
					<ScrollBar orientation='horizontal' />
				</ScrollArea>
			</Reveal>
			<Contact />
		</div>
	);
}
