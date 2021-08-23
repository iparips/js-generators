const dataIn = function *(optionalInitialValue) {
	console.log("> Iteration 1, initial value: ", optionalInitialValue)
	const inputParam = yield
	console.log("> Iteration 2, inputParam: ", inputParam)
}

const gen = dataIn(123)
console.log("> gen: ", gen);
let result = gen.next()
console.log("> Result: ", result)
result = gen.next(456)
console.log("> Result: ", result)
