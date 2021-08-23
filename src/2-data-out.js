const dataOut = function *() {
	console.log("> Iteration 1")
	yield 123
	console.log("> Iteration 2")
	yield 456
	console.log("> Iteration 3")
}

const gen = dataOut()
let result = gen.next()
console.log("> Result 1: ", result)
result = gen.next()
console.log("> Result 2: ", result)
result = gen.next()
console.log("> Result 3: ", result)
