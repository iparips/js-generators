const fetch = require('node-fetch')

const fetchPost = function *() {
	const response = yield fetch('http://jsonplaceholder.typicode.com/posts/1')
	console.log("> Gen: Response: ", response)
	const post = yield response.json()
	console.log("> Gen: Post:" , post)
}

// hand-rolled runner
function run(generator) {
	const iterable = generator()

	const iteration = iterable.next()
	console.log("> Runner: Iteration result", iteration)
	const fetchPromise = iteration.value

	const jsonPromise = fetchPromise
		.then(fetchResult => iterable.next(fetchResult).value)

	jsonPromise.then(json => iterable.next(json))
}

run(fetchPost)

