/*
	There is an unlimited number arraylist likes [0, 1, 1, 2, 3, 5, 8, ..., 21, ...],
	It's some following rule:
		1. The value is the sum of the previous two numbers.
		2. The number only can be positive integer.
		eg: if we input index = 6, and the value will equal (3 + 5) = 8.

	Please implement the function that names fibonacci.
 */

function fibonacci(num) {
  // TODO implement the fibonacci logic
  const arr = [0, 1]
  for (let i = 2; i <= num; i++) {
    arr[i] = arr[i - 1] + arr[i - 2]
  }
  return arr[num]
}

console.log(fibonacci(1)) // output: 1,
console.log(fibonacci(4)) // output: 3,
console.log(fibonacci(6)) // output: 8
