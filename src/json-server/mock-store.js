module.exports = {
	builds: [],
	settings: {},
	lastBuildNumber: 1234,

	setBuild(build) {
		this.builds.push(build);
	},

	setSettings(settings) {
		this.settings = settings;
	},

	setLastBuildNumber() {
		this.lastBuildNumber++;
	},
};
