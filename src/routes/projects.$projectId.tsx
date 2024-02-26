import { createFileRoute, redirect } from '@tanstack/react-router';
import { Technologies, Tools, projects } from '@/data/projects';
import i18n from 'i18next';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { ExternalLink } from 'lucide-react';

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
	return (
		<section className='flex flex-col gap-y-8 pb-16'>
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
		</section>
	);
}
