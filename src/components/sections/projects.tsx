import { useTranslations } from 'next-intl';

import ProjectsList from '@/components/projects-list';
import Reveal from '@/components/reveal';
import Typography from '@/components/typography';
import { Separator } from '@/components/ui/separator';

const Projects: React.FunctionComponent = (): React.ReactNode => {
	const t = useTranslations('homepage');

	return (
		<Reveal>
			<section
				id='projects'
				className='flex flex-col gap-y-8 pb-16'>
				<Typography variant='h2'>{t('projects.title')}</Typography>
				<Typography variant='p'>{t('projects.description')}</Typography>
				<Separator />
				<ProjectsList />
			</section>
		</Reveal>
	);
};

export default Projects;
