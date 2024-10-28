import { type Projects } from '@/types/projects';

export const projects: Projects = {
	en: [
		// 	id: 'ai_project',
		// 	title: 'Artificial Intelligence',
		// 	description:
		// 		'An AI model developed to predict if a message/email is spam/phishing/malicious (binary classification), using Random Forest, SVM, and Logistic Regression algorithms. The project includes a graphical interface built in Next.js, allowing authenticated user input and tracking of inputs and evaluations, with an API created using Flask.',
		// 	url: 'https://github.com/WallQ/IA',
		// 	thumbnail: 'link_to_ai_project_thumbnail.png',
		// 	images: [
		// 		{
		// 			title: 'Model Overview',
		// 			src: 'link_to_ai_project_overview.png',
		// 		},
		// 		{
		// 			title: 'Prediction Interface',
		// 			src: 'link_to_ai_project_interface.png',
		// 		},
		// 	],
		// 	tags: ['AI', 'Machine Learning', 'Python', 'Next.js'],
		// 	role: 'Solution Architect & Developer',
		// 	type: 'Academic Project',
		// 	technologies: [
		// 		{ name: 'Python', logo: 'link_to_python_logo.png' },
		// 		{ name: 'scikit-learn', logo: 'link_to_scikit_learn_logo.png' },
		// 	],
		// 	tools: [
		// 		{ name: 'Flask', logo: 'link_to_flask_logo.png' },
		// 		{ name: 'Next.js', logo: 'link_to_nextjs_logo.png' },
		// 	],
		// },
		{
			id: 'sio',
			title: 'Organizational Information Systems',
			description:
				'A Decision Support System (DSS) application developed in Next.js (T3 Stack) with OAuth2.0 authentication, file upload, and data parsing from SAFT (.xml) files. The data undergoes normalization (UNF, 1NF, 2NF, 3NF), validation, transformation, loading into a relational database (1st ETL), then is made a denormalization for performance, some queries, and aggregations to generate the surrogate keys and the respective values to store in the Star Schema database (2nd ETL). This way, the system (business application) provides users with a dashboard for decision-making on stock, sales, etc.',
			url: 'https://github.com/WallQ/SIO',
			thumbnail: '/assets/images/projects/sio/preview.webp',
			images: [
				{
					title: 'Homepage',
					src: '/assets/images/projects/sio/homepage.webp',
				},
				{
					title: 'Dashboard',
					src: '/assets/images/projects/sio/dashboard.webp',
				},
			],
			tags: ['T3 Stack', 'ETL', 'Data Warehouse', 'Star Schema', 'DSS'],
			role: 'Solution Designer & Full-stack Developer',
			type: 'Academic Project',
			startDate: 'Apr 2024',
			endDate: 'Jul 2024',
			technologies: [
				{
					name: 'TypeScript',
					logo: '/assets/icons/technologies/typescript.svg',
				},
				{
					name: 'Next.js',
					logo: '/assets/icons/technologies/nextjs.svg',
				},
				{
					name: 'tRPC',
					logo: '/assets/icons/technologies/trpc.svg',
				},
				{
					name: 'Drizzle ORM',
					logo: '/assets/icons/technologies/drizzleorm.svg',
				},
				{
					name: 'PostgreSQL',
					logo: '/assets/icons/technologies/postgresql.svg',
				},
				{
					name: 'NextAuth.js',
					logo: '/assets/icons/technologies/nextauthjs.svg',
				},
				{
					name: 'Zustand',
					logo: '/assets/icons/technologies/zustand.svg',
				},
				{
					name: 'Zod',
					logo: '/assets/icons/technologies/zod.svg',
				},
				{
					name: 'Tailwind CSS',
					logo: '/assets/icons/technologies/tailwindcss.svg',
				},
				{
					name: 'Framer Motion',
					logo: '/assets/icons/technologies/framermotion.svg',
				},
			],
			tools: [
				{
					name: 'Docker',
					logo: '/assets/icons/technologies/docker.svg',
				},
				{ name: 'Figma', logo: '/assets/icons/technologies/figma.svg' },
				{
					name: 'Visual Studio Code',
					logo: '/assets/icons/technologies/vscode.svg',
				},
				{ name: 'Git', logo: '/assets/icons/technologies/git.svg' },
				{
					name: 'Vercel',
					logo: '/assets/icons/technologies/vercel.svg',
				},
			],
		},
		{
			id: 'sd',
			title: 'Distributed Systems',
			description:
				'A Client/Server CLI multithreading chat application developed using sockets with UDP and TCP communication protocols, modeled after a military hierarchy. It supports one-to-one, one-to-many, and many-to-many communication.',
			url: 'https://github.com/WallQ/SD',
			thumbnail: '/assets/images/projects/sd/preview.webp',
			images: [
				{
					title: 'CLI Chat',
					src: '/assets/images/projects/sd/homepage.webp',
				},
			],
			tags: ['Sockets', 'Multithreading', 'UDP', 'TCP'],
			role: 'Application Developer',
			type: 'Academic Project',
			startDate: 'Dec 2023',
			endDate: 'Jan 2024',
			technologies: [
				{
					name: 'Java',
					logo: '/assets/icons/technologies/java.svg',
				},
				{
					name: 'Maven',
					logo: '/assets/icons/technologies/maven.svg',
				},
			],
			tools: [
				{
					name: 'IntelliJ IDEA',
					logo: '/assets/icons/technologies/intellij.svg',
				},
				{ name: 'Git', logo: '/assets/icons/technologies/git.svg' },
			],
		},
		{
			id: 'pulse-connect',
			title: 'Pulse Connect',
			description:
				'A social networking application enabling the import of contacts/friends from existing platforms (e.g., Facebook, Twitter, Instagram), user connections similar to Tinder, real-time messaging, notification system, OAuth2.0 and token-based (JWT) authentication, among other generic functionalities.',
			url: 'https://github.com/WallQ/Pulse-Connect',
			thumbnail: '/assets/images/projects/pulse-connect/preview.webp',
			images: [
				{
					title: 'Homepage',
					src: '/assets/images/projects/pulse-connect/homepage.webp',
				},
			],
			tags: ['Web Development', 'DevOps', 'Web Sockets', 'UI/UX'],
			role: 'Front-end Developer',
			type: 'Academic Project',
			startDate: 'Oct 2023',
			endDate: 'Jan 2024',
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
		{
			id: 'pwa',
			title: 'PWA Booking',
			description:
				'A hotel booking and management application similar to Booking developed with the MERN stack, featuring hotel browsing, room offers, reservations, payments (Stripe), token-based (JWT) authentication, and role-based access control (RBAC).',
			url: 'https://github.com/WallQ/PWA',
			thumbnail: '/assets/images/projects/pwa-booking/preview.webp',
			images: [
				{
					title: 'Homepage',
					src: '/assets/images/projects/pwa-booking/homepage.webp',
				},
			],
			tags: [
				'MERN Stack',
				'Authentication',
				'Payment Processing',
				'Booking',
			],
			role: 'Full-stack Developer',
			type: 'Academic Project',
			startDate: 'Nov 2021',
			endDate: 'Jan 2022',
			technologies: [
				{
					name: 'MongoDB',
					logo: '/assets/icons/technologies/mongodb.svg',
				},
				{
					name: 'Express.js',
					logo: '/assets/icons/technologies/expressjs.svg',
				},
				{
					name: 'React.js',
					logo: '/assets/icons/technologies/reactjs.svg',
				},
				{
					name: 'Node.js',
					logo: '/assets/icons/technologies/nodejs.svg',
				},
				{
					name: 'React Router',
					logo: '/assets/icons/technologies/reactrouter.svg',
				},
				{
					name: 'Axios',
					logo: '/assets/icons/technologies/axios.svg',
				},
				{
					name: 'Tailwind CSS',
					logo: '/assets/icons/technologies/tailwindcss.svg',
				},
				{
					name: 'Jest',
					logo: '/assets/icons/technologies/jest.svg',
				},
			],
			tools: [
				{ name: 'Figma', logo: '/assets/icons/technologies/figma.svg' },
				{
					name: 'Visual Studio Code',
					logo: '/assets/icons/technologies/vscode.svg',
				},
				{ name: 'Git', logo: '/assets/icons/technologies/git.svg' },
			],
		},
	],
	pt: [
		{
			id: 'sio',
			title: 'Organizational Information Systems',
			description:
				'Uma aplicação Sistema de Suporte à Decisão (DSS) desenvolvida em Next.js (T3 Stack) com autenticação OAuth2.0, upload de ficheiros e análise de dados de ficheiros SAFT (.xml). Os dados passam por normalização (UNF, 1NF, 2NF, 3NF), validação, transformação, carregamento em base de dados relacional (1º ETL), depois é feita uma desnormalização para desempenho, algumas consultas e agregações para gerar as chaves substitutas e os respectivos valores a guardar na base de dados Star Schema (2º ETL). Desta forma, o sistema (aplicação de negócio) disponibiliza aos utilizadores uma dashboard para a tomada de decisões sobre stock, vendas, etc.',
			url: 'https://github.com/WallQ/SIO',
			thumbnail: '/assets/images/projects/sio/preview.webp',
			images: [
				{
					title: 'Homepage',
					src: '/assets/images/projects/sio/homepage.webp',
				},
				{
					title: 'Dashboard',
					src: '/assets/images/projects/sio/dashboard.webp',
				},
			],
			tags: ['T3 Stack', 'ETL', 'Data Warehouse', 'Star Schema', 'DSS'],
			role: 'Designer de Soluções & Full-stack Developer',
			type: 'Projeto Acadêmico',
			startDate: 'Abr 2024',
			endDate: 'Jul 2024',
			technologies: [
				{
					name: 'TypeScript',
					logo: '/assets/icons/technologies/typescript.svg',
				},
				{
					name: 'Next.js',
					logo: '/assets/icons/technologies/nextjs.svg',
				},
				{
					name: 'tRPC',
					logo: '/assets/icons/technologies/trpc.svg',
				},
				{
					name: 'Drizzle ORM',
					logo: '/assets/icons/technologies/drizzleorm.svg',
				},
				{
					name: 'PostgreSQL',
					logo: '/assets/icons/technologies/postgresql.svg',
				},
				{
					name: 'NextAuth.js',
					logo: '/assets/icons/technologies/nextauthjs.svg',
				},
				{
					name: 'Zustand',
					logo: '/assets/icons/technologies/zustand.svg',
				},
				{
					name: 'Zod',
					logo: '/assets/icons/technologies/zod.svg',
				},
				{
					name: 'Tailwind CSS',
					logo: '/assets/icons/technologies/tailwindcss.svg',
				},
				{
					name: 'Framer Motion',
					logo: '/assets/icons/technologies/framermotion.svg',
				},
			],
			tools: [
				{
					name: 'Docker',
					logo: '/assets/icons/technologies/docker.svg',
				},
				{ name: 'Figma', logo: '/assets/icons/technologies/figma.svg' },
				{
					name: 'Visual Studio Code',
					logo: '/assets/icons/technologies/vscode.svg',
				},
				{ name: 'Git', logo: '/assets/icons/technologies/git.svg' },
				{
					name: 'Vercel',
					logo: '/assets/icons/technologies/vercel.svg',
				},
			],
		},
		{
			id: 'sd',
			title: 'Sistemas Distribuídos',
			description:
				'Uma aplicação de chat multithreading CLI cliente/servidor desenvolvida utilizando sockets com protocolos de comunicação UDP e TCP, modelados a partir de uma hierarquia militar. Suporta a comunicação um para um, um para muitos e muitos para muitos.',
			url: 'https://github.com/WallQ/SD',
			thumbnail: '/assets/images/projects/sd/preview.webp',
			images: [
				{
					title: 'CLI Chat',
					src: '/assets/images/projects/sd/homepage.webp',
				},
			],
			tags: ['Sockets', 'Multithreading', 'UDP', 'TCP'],
			role: 'Desenvolvedor de Aplicações',
			type: 'Projeto Acadêmico',
			startDate: 'Dez 2023',
			endDate: 'Jan 2024',
			technologies: [
				{
					name: 'Java',
					logo: '/assets/icons/technologies/java.svg',
				},
				{
					name: 'Maven',
					logo: '/assets/icons/technologies/maven.svg',
				},
			],
			tools: [
				{
					name: 'IntelliJ IDEA',
					logo: '/assets/icons/technologies/intellij.svg',
				},
				{ name: 'Git', logo: '/assets/icons/technologies/git.svg' },
			],
		},
		{
			id: 'pulse-connect',
			title: 'Pulse Connect',
			description:
				'Uma aplicação de rede social que permite a importação de contactos/amigos de plataformas existentes (por exemplo, Facebook, Twitter, Instagram), conexões entre utilizadores semelhantes ao Tinder, mensagens em tempo real, sistema de notificações, OAuth2.0 e autenticação baseada em token (JWT), entre outras funcionalidades genéricas.',
			url: 'https://github.com/WallQ/Pulse-Connect',
			thumbnail: '/assets/images/projects/pulse-connect/preview.webp',
			images: [
				{
					title: 'Homepage',
					src: '/assets/images/projects/pulse-connect/homepage.webp',
				},
			],
			tags: ['Desenvolvimento Web', 'DevOps', 'Web Sockets', 'UI/UX'],
			role: 'Front-end Developer',
			type: 'Projeto Acadêmico',
			startDate: 'Out 2023',
			endDate: 'Jan 2024',
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
		{
			id: 'pwa',
			title: 'PWA Booking',
			description:
				'Uma aplicação de reservas e gestão de hotéis semelhante ao Booking desenvolvida com a stack MERN, com pesquisa de hotéis, ofertas de quartos, reservas, pagamentos (Stripe), autenticação baseada em token (JWT) e controlo de acesso baseado em funções (RBAC).',
			url: 'https://github.com/WallQ/PWA',
			thumbnail: '/assets/images/projects/pwa-booking/preview.webp',
			images: [
				{
					title: 'Homepage',
					src: '/assets/images/projects/pwa-booking/homepage.webp',
				},
			],
			tags: [
				'MERN Stack',
				'Autenticação',
				'Processamento de Pagamento',
				'Reservas',
			],
			role: 'Full-stack Developer',
			type: 'Projeto Acadêmico',
			startDate: 'Nov 2021',
			endDate: 'Jan 2022',
			technologies: [
				{
					name: 'MongoDB',
					logo: '/assets/icons/technologies/mongodb.svg',
				},
				{
					name: 'Express.js',
					logo: '/assets/icons/technologies/expressjs.svg',
				},
				{
					name: 'React.js',
					logo: '/assets/icons/technologies/reactjs.svg',
				},
				{
					name: 'Node.js',
					logo: '/assets/icons/technologies/nodejs.svg',
				},
				{
					name: 'React Router',
					logo: '/assets/icons/technologies/reactrouter.svg',
				},
				{
					name: 'Axios',
					logo: '/assets/icons/technologies/axios.svg',
				},
				{
					name: 'Tailwind CSS',
					logo: '/assets/icons/technologies/tailwindcss.svg',
				},
				{
					name: 'Jest',
					logo: '/assets/icons/technologies/jest.svg',
				},
			],
			tools: [
				{ name: 'Figma', logo: '/assets/icons/technologies/figma.svg' },
				{
					name: 'Visual Studio Code',
					logo: '/assets/icons/technologies/vscode.svg',
				},
				{ name: 'Git', logo: '/assets/icons/technologies/git.svg' },
			],
		},
	],
};
