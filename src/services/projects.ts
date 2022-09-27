export const fetchProjects = async () => {
	const result = await fetch('./data/projects.json');
	return result.json();
};
