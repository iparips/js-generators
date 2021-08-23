const fetch = require('node-fetch')

const fetchPost = function *() {
	const response = yield fetch('http://jsonplaceholder.typicode.com/posts/1')
	console.log("> Gen: Response: ", response)
	const post = yield response.json()
	console.log("> Gen: Post:" , post)
}

// recursive implementation of runner
function run(generator) {
	const iterator = generator()

	function iterate(iteration) {
		if(iteration.done) return iteration.value
		return iteration.value.then(x => iterate(iterator.next(x)))
	}

	return iterate(iterator.next())
}

run(fetchPost)
