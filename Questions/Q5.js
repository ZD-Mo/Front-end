/*
	There is a method which can calculate the area.
	But we need another currying method same with it, please implement it.
*/

const getArea = (width, height) => width * height

const curryingGetArea = (width) => getArea(width, 4)
/*your code here*/

console.log(getArea(3, 4)) // output: 12
console.log(curryingGetArea(3) /*your code here*/) // output: 12
