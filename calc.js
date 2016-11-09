var add = function (num1, num2)
{  return num1+num2; };
	
var greet = function(name)
{  alert("Hello " + name + "!"); };
	
var sub = function(num1, num2)
{  return (num1 - num2); };
	
var mult = function(num1, num2)
{  return (num1 * num2); };
	
var div = function(num1, num2)
{  return (num1/num2); };
	
var remainder = function (num1, num2) {
  var remains = num1 - num2 * (Math.floor(num1 / num2));
  return remains;
};


var num1 = parseInt(prompt("Enter a number:");
var num2 = parseInt(prompt("Enter another number:");

alert(add(num1, num2));