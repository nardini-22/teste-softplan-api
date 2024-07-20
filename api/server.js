const jsonServer = require('json-server');
const auth = require("json-server-auth");
const server = jsonServer.create()

const fs = require('fs')
const path = require('path')
const filePath = path.join('db.json')
const data = fs.readFileSync(filePath, "utf-8");
const db = JSON.parse(data);
const router = jsonServer.router(db)

const middlewares = jsonServer.defaults()

server.db = router.db

server.use(middlewares)
server.use(jsonServer.rewriter({
	"/users*": "/660/users$1"
}))
server.use(auth)
server.use(router)
server.listen(3000, () => {
	console.log('JSON Server is running')
})

module.exports = server