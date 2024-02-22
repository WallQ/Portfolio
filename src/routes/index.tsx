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
import { ExperienceProps, experiences } from '@/data/experiences';
import CopyToClipboard from '@/components/copy-to-clipboard';
import { ProjectProps, projects } from '@/data/projects';
import ProjectCard from '@/components/project-card';

const Homepage = () => {
	const [visibleProjects, setVisibleProjects] = useState(3);

	return (
		<Fragment>
			<section
				id='home'
				className='grid grid-cols-1 grid-rows-2 items-center justify-items-center gap-4 pb-16 sm:grid-cols-10 sm:grid-rows-1 sm:justify-items-end sm:gap-x-16'>
				<div className='order-2 flex flex-col items-center gap-y-4 sm:order-1 sm:col-span-6 sm:items-start'>
					<h1 className='text-4xl font-bold tracking-tight lg:text-5xl'>
						Hi! I'm&nbsp;
						<span className='text-primary'>Sérgio Félix</span>,
						<br />
						Software Engineer.
					</h1>
					<p className='text-pretty text-center leading-7 text-muted-foreground sm:text-start'>
						Passionate problem solver and code enthusiast, dedicated
						to developing and designing innovative solutions with
						precision and creativity.
					</p>
					<div className='flex justify-start gap-x-4'>
						<a
							href='#contact'
							className={`${buttonVariants()} max-w-fit`}>
							Get in touch
							<Send className='ml-2 h-4 w-4' />
						</a>
						<a
							href='docs/Resume.pdf'
							target='_blank'
							className={`${buttonVariants({ variant: 'outline' })} max-w-fit`}>
							Resume
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
					About me
				</h2>
				<div className='relative'>
					<p className='absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 transform text-6xl font-bold text-muted/70 sm:text-9xl md:text-12xl'>
						BORING
					</p>
					<div className='relative z-10 flex flex-col gap-y-4'>
						<p className='text-pretty leading-7 text-muted-foreground'>
							Hello, I'm Sérgio Félix, and I'm thrilled to be part
							of the web development community. My passion for
							crafting exceptional digital experiences and
							solutions drives my work and motivates me to
							constantly improve and expand my skills.
						</p>
						<p className='text-pretty leading-7 text-muted-foreground'>
							I first discovered my interest in web development in
							2020 when I enrolled in the Higher Professional
							Technical Course in Development for Web and Mobile
							Devices. This experience opened my eyes to the vast
							and ever-evolving world of web development, and I
							was eager to explore and learn more beyond the
							basics of PHP, MySQL, and Bootstrap.
						</p>
						<p className='text-pretty leading-7 text-muted-foreground'>
							Currently, I am pursuing a degree in Computer
							Science and Engineering and have aspirations to
							continue my education with a Master's degree in
							Computer Engineering. While I am dedicated to my
							studies, I also value the importance of hands-on
							experience and continuously work on personal
							projects to enhance my abilities.
						</p>
						<p className='text-pretty leading-7 text-muted-foreground'>
							I am a driven and flexible individual, and I strive
							to balance my academic pursuits with opportunities
							to put my skills into practice. If you're looking
							for a talented software engineer who is dedicated to
							creating remarkable digital solutions, look no
							further. Let's work together to bring your vision to
							life!
						</p>
					</div>
				</div>
			</section>
			<section id='experience' className='flex flex-col gap-y-8 pb-16'>
				<h2 className='text-3xl font-semibold tracking-tight'>
					Work Experience
				</h2>
				<Carousel>
					<CarouselContent>
						{experiences.map(
							(experience: ExperienceProps, index: number) => (
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
					Projects
				</h2>
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
						Show more
					</Button>
				)}
			</section>
			<section id='contact' className='flex flex-col gap-8'>
				<Separator />
				<div className='grid grid-cols-1 gap-y-16 sm:grid-cols-10 sm:gap-x-16'>
					<div className='col-span-5 flex flex-col gap-y-4'>
						<h2 className='text-3xl font-semibold tracking-tight'>
							Let&apos;s work together on your next idea.
						</h2>
						<p className='text-pretty leading-7 text-muted-foreground'>
							I'm always happy to hear about exciting
							opportunities, join in interesting conversations,
							and build valuable connections. Let's connect!
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
