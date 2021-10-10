const jsonServer = require('json-server');

const getBuilds = require('./api/getBuilds');
const postBuild = require('./api/postBuild');

const PORT = 5000;
const RESPONSE_DELAY = 1000;

const server = jsonServer.create();
const middlewares = jsonServer.defaults();

server.use((_req, _res, next) => setTimeout(next, RESPONSE_DELAY));
server.use(jsonServer.bodyParser);
server.use(middlewares);

server.post('/builds', (req, res) => {
	res.status(200).jsonp(getBuilds(req));
});

server.post('/build', (req, res) => {
	res.status(200).jsonp(postBuild(req));
});

server.listen(PORT, () => {
	console.log(`JSON Server is running on port ${PORT}`);
});
