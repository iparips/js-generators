const fetch = require('node-fetch')
const co = require('co')

// Generators Version (ECMAScript 2015 aka ES6)
const fetchPost = function *() {
	const response = yield fetch('http://jsonplaceholder.typicode.com/posts/1')
	const post = yield response.json()
	console.log(post)
}
co(fetchPost)

// Promises Version (ECMAScript 2015 aka ES6)
fetch('http://jsonplaceholder.typicode.com/posts/1')
	.then(fetchResult => fetchResult.json())
	.then(json => console.log(json))

// async / await version (as of ECMAScript 2017)
async function fetchPosts() {
	const response = await fetch('http://jsonplaceholder.typicode.com/posts/1')
	const json = await response.json()
	console.log(json);
}
fetchPosts()
