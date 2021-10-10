const mockStore = require('../mock-store');

const buildTemplate = require('./../data/build');

const getBuilds = (req) => {
	const {branch, repository} = req.body;

	const initBuild = [{...buildTemplate, branch: branch || 'master'}];


	if (mockStore.repository && repository!== mockStore.repository) {
		mockStore.clearBuilds();
	}
	mockStore.setRepository(repository);

	let addedBuilds = mockStore.builds || [];
	const builds = [...initBuild, ...addedBuilds].sort((a, b) => b.number - a.number);

	return {
		repository,
		builds,
	};
};

module.exports = (req) => {
	return getBuilds(req);
};
