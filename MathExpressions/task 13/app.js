
var a = 2
var b = 1
var result = --a - --b + ++b + b--
// --a = 1
// --a - --b = 0
// --a - --b + ++b = 2
// --a - --b + ++b + b-- = 3
document.write( "a is : " + a + "</br>" + "b is : " + b + "</br>" + "result is : " + result)
