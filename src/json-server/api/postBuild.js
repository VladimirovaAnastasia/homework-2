const mockStore = require('../mock-store');
const buildsTemplate = require('./../data/build');
const statuses = require('./../data/status');
const format = require('date-fns/format');
const ruLocale = require('date-fns/locale/ru');

const postBuild = (req) => {
	const hash = req.body.hash;

	mockStore.setLastBuildNumber();

	const date = new Date();
	const formatDate = format(date, 'd LLL, kk:mm', {locale: ruLocale});

	const randomStatusIndex = Math.floor(Math.random() * statuses.length);

	const build = {
		...buildsTemplate,
		status: statuses[randomStatusIndex],
		date: formatDate.replace('.', ''),
		hash,
		number: mockStore.lastBuildNumber,
	};
	mockStore.setBuild(build);
};

module.exports = (req) => {
	postBuild(req);
	return 'ok';
};
