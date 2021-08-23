const fetch = require('node-fetch')
const co = require('co')

const fetchPost = function *() {
	const response = yield fetch('http://jsonplaceholder.typicode.com/posts/1')
	console.log("> Gen: Response: ", response)
	const post = yield response.json()
	console.log("> Gen: Post:" , post)
}

// use of a runner library
co(fetchPost)
