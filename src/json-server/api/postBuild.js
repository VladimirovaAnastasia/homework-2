const mockStore = require('../mock-store');
const buildsTemplate = require('./../data/build');
const statuses = require('./../data/status');

const postBuild = (req) => {
	const hash = req.body.hash;

	mockStore.setLastBuildNumber();

	const randomStatusIndex = Math.floor(Math.random() * statuses.length);

	const build = {
		...buildsTemplate,
		status: statuses[randomStatusIndex],
		date: Date.now(),
		hash,
		number: mockStore.lastBuildNumber,
	};
	mockStore.setBuild(build);
};

module.exports = (req) => {
	postBuild(req);
	return 'ok';
};
