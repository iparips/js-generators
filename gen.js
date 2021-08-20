const fetch = require('node-fetch')
const co = require('co')

function run(generator) {
	const iterator = generator()

	function iterate(iteration) {
		if(iteration.done) return iteration.value
		return iteration.value.then(x => iterate(iterator.next(x)))
	}

	return iterate(iterator.next())

}

run(function *() {
	const uri = 'http://jsonplaceholder.typicode.com/posts/1'
	const response = yield fetch(uri)
	console.log("Response: ", response)
	const post = yield response.json()
	console.log("Post:" , post)
})

