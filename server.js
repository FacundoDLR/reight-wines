const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('./src/assets/db.json');
const middlewares = jsonServer.defaults({
  static: './build'
});
const PORT = process.env.PORT || 5000;
server.use(middlewares);
server.use(jsonServer.rewriter({
  '/api/*': '/$1',
}))
server.use(router);
server.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`);
});