/* 
	There are some code which need to fix.
	Please restructure the coding between //TODO, //TO FIX START and //TO FIX END.
	Make the finally result that match to the expected outputs.
*/

function countDown() {
  for (var i = 10; i > 0; i--) {
    // TO FIX START
    setTimeout(function count() {
      console.log(i);
    }, 1000);
		// TO FIX END
  }
}
function saytHelloWorld(obj) {
  printWorld();
  console.log(obj.greeting);
}
function printWorld() {
  // TODO print 'World'
  console.log("World");
}
countDown();
saytHelloWorld({ greeting: "Hello" });

/* expect result */
/*
	output: Hello
	output: World
	output: 10
	output: 9
	output: 8
	output: 7
	output: 6
	output: 5
	output: 4
	output: 3
	output: 2
	output: 1
*/