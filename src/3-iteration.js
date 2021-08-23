const dataOut = function *() {
	console.log("> Iteration 1")
	yield 123
	console.log("> Iteration 2")
	yield 456
	console.log("> Iteration 3")
}

for (const value of dataOut()) {
  console.log("> Result: ", value)
}
