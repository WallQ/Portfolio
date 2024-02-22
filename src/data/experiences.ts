export type ExperienceProps = {
	title: string;
	type: string;
	description: string;
	companyUrl: string;
	companyImage: string;
	companyName: string;
	startDate: string;
	endDate: string;
};

export const experiences: ExperienceProps[] = [
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
];
