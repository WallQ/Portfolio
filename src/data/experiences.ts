export type Experience = {
	title: string;
	type: string;
	description: string;
	companyUrl: string;
	companyImage: string;
	companyName: string;
	startDate: string;
	endDate: string;
};

export type Experiences = {
	[key: string]: Experience[];
};

export const experiences: Experiences = {
	en: [
		{
			title: 'Front-End Developer',
			type: 'Internship',
			description:
				"Designed and built with React ecosystem the company's corporate website.",
			companyUrl: 'https://bdcadigital.com',
			companyImage: 'assets/images/companies/BasicamenteDigital.jpg',
			companyName: 'Basicamente Digital',
			startDate: 'Mar 2022',
			endDate: 'Aug 2022',
		},
		{
			title: 'Software Developer',
			type: 'Internship',
			description:
				'Developed a Ransomware and did a case study for my professional aptitude exam.',
			companyUrl: 'https://risema.pt',
			companyImage: 'assets/images/companies/Risema.jpg',
			companyName: 'Risema',
			startDate: 'Feb 2019',
			endDate: 'Apr 2019',
		},
		{
			title: 'Computer Technician',
			type: 'Internship',
			description:
				'Maintained and built computers for personal clients or affiliated companies.',
			companyUrl: 'https://risema.pt',
			companyImage: 'assets/images/companies/Risema.jpg',
			companyName: 'Risema',
			startDate: 'Feb 2018',
			endDate: 'Apr 2018',
		},
	],
	es: [
		{
			title: 'Desarrollador Front-End',
			type: 'Internado',
			description:
				'Diseñado y construido con el ecosistema React la web corporativa de la empresa.',
			companyUrl: 'https://bdcadigital.com',
			companyImage: 'assets/images/companies/BasicamenteDigital.jpg',
			companyName: 'Basicamente Digital',
			startDate: 'Mar 2022',
			endDate: 'Aug 2022',
		},
		{
			title: 'Desarrollador de Software',
			type: 'Internado',
			description:
				'Desarrollé un Ransomware e hice un estudio de caso para mi examen de aptitud profesional.',
			companyUrl: 'https://risema.pt',
			companyImage: 'assets/images/companies/Risema.jpg',
			companyName: 'Risema',
			startDate: 'Feb 2019',
			endDate: 'Apr 2019',
		},
		{
			title: 'Técnico Informático',
			type: 'Internado',
			description:
				'Mantenimiento y construcción de computadoras para clientes personales o empresas afiliadas.',
			companyUrl: 'https://risema.pt',
			companyImage: 'assets/images/companies/Risema.jpg',
			companyName: 'Risema',
			startDate: 'Feb 2018',
			endDate: 'Apr 2018',
		},
	],
	pt: [
		{
			title: 'Desenvolvedor Front-End',
			type: 'Estágio',
			description:
				'Desenhei e construí com ecossistema React o website corporativo da empresa.',
			companyUrl: 'https://bdcadigital.com',
			companyImage: 'assets/images/companies/BasicamenteDigital.jpg',
			companyName: 'Basicamente Digital',
			startDate: 'Mar 2022',
			endDate: 'Aug 2022',
		},
		{
			title: 'Desenvolvedor de Software',
			type: 'Estágio',
			description:
				'Desenvolvi um Ransomware e fiz um estudo de caso para meu exame de aptidão profissional.',
			companyUrl: 'https://risema.pt',
			companyImage: 'assets/images/companies/Risema.jpg',
			companyName: 'Risema',
			startDate: 'Feb 2019',
			endDate: 'Apr 2019',
		},
		{
			title: 'Técnico Informático',
			type: 'Estágio',
			description:
				'Manuteni e construí computadores para clientes pessoais ou empresas afiliadas.',
			companyUrl: 'https://risema.pt',
			companyImage: 'assets/images/companies/Risema.jpg',
			companyName: 'Risema',
			startDate: 'Feb 2018',
			endDate: 'Apr 2018',
		},
	],
};
