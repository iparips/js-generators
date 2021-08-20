const fetch = require('node-fetch')
const co = require('co')

// fetch('http://jsonplaceholder.typicode.com/posts/1')
// 	.then(x => x.json())
// 	.then( post => post.title)
// 	.then(t => console.log(t))

co(function *() {
	const uri = 'http://jsonplaceholder.typicode.com/posts/1'
	const response = yield fetch(uri)
	const post = yield response.json()
	console.log(post)
})
