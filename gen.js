const fetch = require('node-fetch')
const co = require('co')

// fetch('http://jsonplaceholder.typicode.com/posts/1')
// 	.then(x => x.json())
// 	.then( post => post.title)
// 	.then(t => console.log(t))

function run(generator) {
	const iterable = generator()
	const iteration = iterable.next()
	const fetchPromise = iteration.value
	fetchPromise
	.then(fetchResult => iterable.next(fetchResult).value)
	.then(fetchResultJson => iterable.next(fetchResultJson))
}


run(function *() {
	const uri = 'http://jsonplaceholder.typicode.com/posts/1'
	const response = yield fetch(uri)
	console.log("Response: ", response)
	const post = yield response.json()
	console.log("Post:" , post)
})

