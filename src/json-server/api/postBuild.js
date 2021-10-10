const mockStore = require('../mock-store');
const buildsTemplate = require('./../data/build');

const postBuild = (req) => {
	const hash = req.body.hash;

	mockStore.setLastBuildNumber();

	const build = {
		...buildsTemplate,
		hash,
		number: mockStore.lastBuildNumber,
	};
	mockStore.setBuild(build);
};

module.exports = (req) => {
	postBuild(req);
	return 'ok';
};
