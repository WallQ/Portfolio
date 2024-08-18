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
	startDate: string;
	endDate: string;
	technologies: Technologies[];
	tools: Tools[];
};

export type Projects = Record<string, Project[]>;
