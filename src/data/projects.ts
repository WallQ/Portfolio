import { type Projects } from '@/types/projects';

export const projects: Projects = {
	en: [
		{
			id: 'pulse-connect',
			title: 'Pulse Connect',
			description:
				'Pulse Connect is a platform for seamless and discreet connections. This application empowers users to forge meaningful connections with others while preserving their privacy, real-time chat, and external contacts imported from existing sources, all this while ensuring a unique twist to the traditional social networking experience.',
			url: 'https://github.com/WallQ/Pulse-Connect',
			thumbnail: 'https://picsum.photos/1024/768',
			images: [
				{
					title: 'Homepage',
					src: '/assets/images/projects/pulse-connect/homepage.png',
				},
				{
					title: 'Sign Up',
					src: '/assets/images/projects/pulse-connect/sign-up.png',
				},
				{
					title: 'Sign In',
					src: '/assets/images/projects/pulse-connect/sign-in.png',
				},
				{
					title: 'Profile',
					src: '/assets/images/projects/pulse-connect/profile.png',
				},
				{
					title: 'Chat',
					src: '/assets/images/projects/pulse-connect/chat.png',
				},
				{
					title: 'Connections',
					src: '/assets/images/projects/pulse-connect/connections.png',
				},
				{
					title: 'Notifications',
					src: '/assets/images/projects/pulse-connect/notifications.png',
				},
				{
					title: 'Settings',
					src: '/assets/images/projects/pulse-connect/settings.png',
				},
			],
			tags: ['UI/UX', 'Web Development', 'DevOps'],
			role: 'Web Developer & UI Designer',
			type: 'Academic',
			technologies: [
				{ name: 'C#', logo: '/assets/icons/technologies/csharp.svg' },
				{
					name: '.NET Core',
					logo: '/assets/icons/technologies/dotnetcore.svg',
				},
				{ name: 'MySQL', logo: '/assets/icons/technologies/mysql.svg' },
				{
					name: 'MongoDB',
					logo: '/assets/icons/technologies/mongodb.svg',
				},
				{
					name: 'TypeScript',
					logo: '/assets/icons/technologies/typescript.svg',
				},
				{
					name: 'Next.js',
					logo: '/assets/icons/technologies/nextjs.svg',
				},
				{
					name: 'Tailwind CSS',
					logo: '/assets/icons/technologies/tailwindcss.svg',
				},
			],
			tools: [
				{
					name: 'Docker',
					logo: '/assets/icons/technologies/docker.svg',
				},
				{ name: 'Figma', logo: '/assets/icons/technologies/figma.svg' },
				{
					name: 'Visual Studio',
					logo: '/assets/icons/technologies/visualstudio.svg',
				},
				{
					name: 'Visual Studio Code',
					logo: '/assets/icons/technologies/vscode.svg',
				},
				{ name: 'Git', logo: '/assets/icons/technologies/git.svg' },
				{ name: 'Azure', logo: '/assets/icons/technologies/azure.svg' },
				{
					name: 'Vercel',
					logo: '/assets/icons/technologies/vercel.svg',
				},
			],
		},
	],
	pt: [],
};
