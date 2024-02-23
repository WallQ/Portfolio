import { Button, buttonVariants } from '@/components/ui/button';
import { createFileRoute } from '@tanstack/react-router';
import { ExternalLink, Send } from 'lucide-react';
import { Fragment, useState } from 'react';

import {
	Carousel,
	CarouselContent,
	CarouselItem,
} from '@/components/ui/carousel';

import { Separator } from '@/components/ui/separator';
import ContactForm from '@/components/contact-form';
import ExperienceCard from '@/components/experience-card';
import {
	type Experience,
	type Experiences,
	experiences,
} from '@/data/experiences';
import CopyToClipboard from '@/components/copy-to-clipboard';
import { ProjectProps, projects } from '@/data/projects';
import ProjectCard from '@/components/project-card';
import { Trans, useTranslation } from 'react-i18next';

const Homepage = () => {
	const [visibleProjects, setVisibleProjects] = useState(3);
	const { t, i18n } = useTranslation();

	return (
		<Fragment>
			<section
				id='home'
				className='grid grid-cols-1 grid-rows-2 items-center justify-items-center gap-4 pb-16 sm:grid-cols-10 sm:grid-rows-1 sm:justify-items-end sm:gap-x-16'>
				<div className='order-2 flex flex-col items-center gap-y-4 sm:order-1 sm:col-span-6 sm:items-start'>
					<h1 className='text-4xl font-bold tracking-tight lg:text-5xl'>
						<Trans
							i18nKey='header.title'
							components={{
								span: <span className='text-primary' />,
								br: <br />,
							}}
						/>
					</h1>
					<p className='text-pretty text-center leading-7 text-muted-foreground sm:text-start'>
						{t('header.description')}
					</p>
					<div className='flex justify-start gap-x-4'>
						<a
							href='#contact'
							className={`${buttonVariants()} max-w-fit`}>
							{t('header.contact_button')}
							<Send className='ml-2 h-4 w-4' />
						</a>
						<a
							href='docs/Resume.pdf'
							target='_blank'
							className={`${buttonVariants({ variant: 'outline' })} max-w-fit`}>
							{t('header.resume_button')}
							<ExternalLink className='ml-2 h-4 w-4' />
						</a>
					</div>
				</div>
				<img
					className='order-1 h-64 w-64 rounded-full bg-primary object-cover object-top sm:order-2 sm:col-span-4'
					src='assets/images/portrait.png'
					alt='test'
					loading='eager'
				/>
			</section>
			<section id='about' className='flex flex-col gap-y-8 pb-16'>
				<h2 className='text-3xl font-semibold tracking-tight'>
					{t('about.title')}
				</h2>
				<div className='relative'>
					<p className='absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 transform text-6xl font-bold text-muted/70 sm:text-9xl md:text-12xl'>
						{t('about.word')}
					</p>
					<div className='relative z-10 flex flex-col gap-y-4'>
						<p className='text-pretty leading-7 text-muted-foreground'>
							{t('about.paragraph_1')}
						</p>
						<p className='text-pretty leading-7 text-muted-foreground'>
							{t('about.paragraph_2')}
						</p>
						<p className='text-pretty leading-7 text-muted-foreground'>
							{t('about.paragraph_3')}
						</p>
						<p className='text-pretty leading-7 text-muted-foreground'>
							{t('about.paragraph_4')}
						</p>
					</div>
				</div>
			</section>
			<section id='experience' className='flex flex-col gap-y-8 pb-16'>
				<h2 className='text-3xl font-semibold tracking-tight'>
					{t('experience.title')}
				</h2>
				<p className='text-pretty leading-7 text-muted-foreground'>
					{t('experience.description')}
				</p>
				<Carousel>
					<CarouselContent>
						{(experiences as Experiences)[i18n.language]?.map(
							(experience: Experience, index: number) => (
								<CarouselItem
									key={`${experience.companyName}-${index}`}
									className='md:basis-1/2 lg:basis-1/3'>
									<ExperienceCard
										title={experience.title}
										type={experience.type}
										description={experience.description}
										companyUrl={experience.companyUrl}
										companyImage={experience.companyImage}
										companyName={experience.companyName}
										startDate={experience.startDate}
										endDate={experience.endDate}
									/>
								</CarouselItem>
							),
						)}
					</CarouselContent>
				</Carousel>
			</section>
			<section id='projects' className='flex flex-col gap-y-8 pb-16'>
				<h2 className='text-3xl font-semibold tracking-tight'>
					{t('projects.title')}
				</h2>
				<p className='text-pretty leading-7 text-muted-foreground'>
					{t('projects.description')}
				</p>
				{projects
					.slice(0, visibleProjects)
					.map((project: ProjectProps, index: number) => (
						<Fragment key={`${project.title}-${index}`}>
							<ProjectCard
								id={project.id}
								title={project.title}
								description={project.description}
								thumbnail={project.thumbnail}
								tags={project.tags}
							/>
							<Separator />
						</Fragment>
					))}
				{visibleProjects < projects.length && (
					<Button
						variant='secondary'
						className='mt-8 max-w-fit self-center'
						onClick={() =>
							setVisibleProjects(
								(prevVisibleProjects) =>
									prevVisibleProjects + 3,
							)
						}>
						{t('projects.show_more_button')}
					</Button>
				)}
			</section>
			<section id='contact' className='flex flex-col gap-8'>
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
		</Fragment>
	);
};

export const Route = createFileRoute('/')({
	component: Homepage,
});
