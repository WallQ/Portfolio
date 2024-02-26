export type Images = {
	title: string;
	src: string;
};

export type Technologies = {
	name: string;
	logo: string;
};

export type Tools = {
	name: string;
	logo: string;
};

export type Project = {
	id: string;
	title: string;
	description: string;
	url: string;
	thumbnail: string;
	images: Images[];
	tags: string[];
	role: string;
	type: string;
	technologies: Technologies[];
	tools: Tools[];
};

export type Projects = {
	[key: string]: Project[];
};

export const projects: Projects = {
	en: [
		{
			id: 'pulse-connect',
			title: 'Pulse Connect',
			description: 'My personal portfolio website.',
			url: 'https://github.com/WallQ/Pulse-Connect',
			thumbnail: 'https://picsum.photos/1024/768',
			images: [
				{
					title: 'Portfolio',
					src: 'assets/images/projects/Portfolio.jpg',
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
				{ name: 'MongoDB', logo: '/assets/icons/technologies/mongodb.svg' },
				{
					name: 'TypeScript',
					logo: '/assets/icons/technologies/typescript.svg',
				},
				{ name: 'Next.js', logo: '/assets/icons/technologies/nextjs.svg' },
				{
					name: 'Tailwind CSS',
					logo: '/assets/icons/technologies/tailwindcss.svg',
				},
			],
			tools: [
				{ name: 'Docker', logo: '/assets/icons/technologies/docker.svg' },
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
				{ name: 'Vercel', logo: '/assets/icons/technologies/vercel.svg' },
			],
		},
	],
	pt: [],
};
