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

export type Experiences = Record<string, Experience[]>;
