import { createFileRoute, redirect } from '@tanstack/react-router';
import { projects } from '@/data/projects';

export const Route = createFileRoute('/projects/$projectId')({
	loader: ({ params }) => {
		const { projectId } = params;
		const project = projects.find((project) => project.id === projectId);
		if (!project) throw redirect({ to: '/' });
	},
	component: PostComponent,
});

function PostComponent() {
	const { projectId } = Route.useParams();
	return <div>Post ID: {projectId}</div>;
}
