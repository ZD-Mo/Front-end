/*
	Please only use the unlimit object names "all",
	And make the result to be the flatted numberlist likes:
	[1, 2, 3, 4, 5, 10, 20, 30, 40, 50, 9, 8, 7, 6, 5, …].
*/

const all = {
  a: [1, 2, 3, 4, 5],
  b: [10, 20, 30, 40, 50],
  c: [9, 8, 7, 6, 5],
  //d: ...
  //e: ...
  //f: ...
  //...etcs	// unknown there are how much keys...
}

const flatAll = (obj) => {
  // TODO
  const array = Object.values(obj)
  return array.reduce((prev, cur) => prev.concat(cur))
}

console.log(flatAll(all))
// output: [1, 2, 3, 4, 5, 10, 20, 30, 40, 50, 9, 8, 7, 6, 5]
