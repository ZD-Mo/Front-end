/*
	Please use only any pure Array's prototype methods,
	and make the result that match to the expected outputs.
*/
const a = [1, 2, 3, 4, 5]
let b = a
// TODO
a.push(6)
b = JSON.stringify(b)
b = JSON.parse(b)
b.shift(0)

console.log(a) // output: (6) [1, 2, 3, 4, 5, 6]
console.log(b) // output: (5) [2, 3, 4, 5, 6]
