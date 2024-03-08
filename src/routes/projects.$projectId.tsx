import { createFileRoute, redirect } from '@tanstack/react-router';
import { Technologies, Tools, projects } from '@/data/projects';
import i18n from 'i18next';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ExternalLink } from 'lucide-react';

import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from '@/components/ui/carousel';
import CopyToClipboard from '@/components/copy-to-clipboard';
import ContactForm from '@/components/contact-form';
import { useTranslation } from 'react-i18next';

export const Route = createFileRoute('/projects/$projectId')({
	loader: ({ params }) => {
		const { projectId } = params;
		const project = projects[i18n.language].find(
			(project) => project.id === projectId,
		);
		if (!project) throw redirect({ to: '/' });
		console.log(project);
		return project;
	},
	component: PostComponent,
});

function PostComponent() {
	const project = Route.useLoaderData();
	const { t } = useTranslation();

	return (
		<div className='flex flex-col gap-y-8'>
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
				rel='noreferrer'
				target='_blank'
				className='inline-flex items-center gap-x-2 text-3xl font-semibold tracking-tight underline-offset-4 hover:text-primary hover:underline'>
				{project.title}
				<ExternalLink className='h-6 w-6' />
			</a>
			<p className='text-pretty leading-7 text-muted-foreground'>
				{project.description}
			</p>
			<Separator />
			<div className='flex justify-between'>
				<div className='flex basis-1/2 flex-col gap-y-4'>
					<div className='flex flex-col'>
						<span className='text-muted-foreground'>Role</span>
						<span className='text-lg font-medium tracking-tight'>
							{project.role}
						</span>
					</div>
					<div className='flex flex-col'>
						<span className='text-muted-foreground'>Type</span>
						<span className='text-lg font-medium tracking-tight'>
							{project.type}
						</span>
					</div>
				</div>
				<div className='flex basis-1/2 flex-col gap-y-4'>
					<div className='flex flex-col gap-y-2'>
						<span className='text-muted-foreground'>
							Language / Framework
						</span>
						<div className='flex flex-wrap gap-2'>
							{project.technologies.map(
								(tech: Technologies, index: number) => (
									<Badge
										key={`${tech.name}-${index}`}
										variant='secondary'
										className='flex gap-x-2 rounded-md py-1'>
										<img
											src={tech.logo}
											alt={tech.name}
											loading='lazy'
											className='w-h-4 h-4'
										/>
										{tech.name}
									</Badge>
								),
							)}
						</div>
					</div>
					<div className='flex flex-col gap-y-2'>
						<span className='text-muted-foreground'>Tools</span>
						<div className='flex flex-wrap gap-2'>
							{project.tools.map(
								(tools: Tools, index: number) => (
									<Badge
										key={`${tools.name}-${index}`}
										variant='secondary'
										className='flex gap-x-2 rounded-md py-1'>
										<img
											src={tools.logo}
											alt={tools.name}
											loading='lazy'
											className='w-h-4 h-4'
										/>
										{tools.name}
									</Badge>
								),
							)}
						</div>
					</div>
				</div>
			</div>
			<Separator />
			<Carousel>
				<CarouselContent>
					{project.images.map((image, index) => (
						<CarouselItem
							key={index}
							className='h-[768px] overflow-y-auto'>
							<img
								src={image.src}
								alt={image.title}
								loading='lazy'
								className='h-auto w-full'
							/>
						</CarouselItem>
					))}
				</CarouselContent>
				<CarouselPrevious />
				<CarouselNext />
			</Carousel>
			<section id='contact' className='flex flex-col gap-y-8 pt-16'>
				<Separator />
				<div className='grid grid-cols-1 gap-y-16 sm:grid-cols-10 sm:gap-x-16'>
					<div className='col-span-5 flex flex-col gap-y-4'>
						<h2 className='text-3xl font-semibold tracking-tight'>
							{t('contact.title')}
						</h2>
						<p className='text-pretty leading-7 text-muted-foreground'>
							{t('contact.description')}
						</p>
						<CopyToClipboard text='sergiofelixdev@gmail.com' />
					</div>
					<div className='col-span-5 flex flex-col gap-y-4'>
						<ContactForm />
					</div>
				</div>
				<Separator />
			</section>
		</div>
	);
}
