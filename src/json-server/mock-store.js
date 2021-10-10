module.exports = {
	builds: [],
	repository: null,
	lastBuildNumber: 1234,

	setBuild(build) {
		this.builds.push(build);
	},

	setRepository(repository) {
		this.repository = repository;
	},

	clearBuilds() {
		this.builds = []
	},

	setLastBuildNumber() {
		this.lastBuildNumber++;
	},
};
