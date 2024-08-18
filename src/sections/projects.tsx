import { useTranslations } from 'next-intl';

import ProjectsList from '@/components/ui/projects-list';
import Reveal from '@/components/reveal';
import Typography from '@/components/typography';

const Projects: React.FunctionComponent = (): React.ReactNode => {
	const t = useTranslations('homepage');

	return (
		<Reveal>
			<section
				id='projects'
				className='flex flex-col gap-y-8 pb-16'>
				<Typography variant='h2'>{t('projects.title')}</Typography>
				<Typography variant='p'>{t('projects.description')}</Typography>
				<ProjectsList />
			</section>
		</Reveal>
	);
};

export default Projects;
