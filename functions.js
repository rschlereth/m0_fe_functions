// 1: Write a function named printGreeting that prints a simple greeting message, the same one, every time it is called. Call this function 3 times.
function printGreeting () {
    console.log("Happy Holidays!")
}
printGreeting();
printGreeting();
printGreeting();

// 2: Write a function that accepts 1 argument. The function should console.log a sentence that interpolates the data passed in.
function christmasWish (wish) {
    console.log(`All I want for Christmas is ${wish}".`)
}
christmasWish("my two front teeth");

// 3: Write a function that has 3 parameters: a string and two numbers. 
//The String will be the name of a company, and the numbers will represent 
//the minimum and maximum of a pay range for a posted job. The function should print 
//out a sentence that includes the name of the company and the range itself 
//(if the numbers passed in are 90000 and 110000, the pay range is 20000).
function wages(name, num1, num2) {
    var sum = num1 -= num2;
console.log(`${name} is hiring with competitive wages. Earn ${sum} more than last year.`) 
} 

wages("Santa's Workshop", 50000, 30000);

// 4: Write a function that satifies the following interaction pattern:

//checkStock(4, "Coffee");
// => "Coffee is stocked"

//checkStock(3, "Tortillas");
// => "Tortillas - running LOW"

//checkStock(0, "Cheese");
// => "Cheese - OUT of stock!"

//checkStock(1, "Salsa");
// => "Salsa - running LOW"

function checkstock(count, item) {
if (count >= 4)
console.log(`${item} is stocked`);
 
else if (count <= 3, count >= 1 ) 
console.log(`${item} is running low`);
 
else  
console.log(`${item} is OUT of stock!`);
//else if item <= 1

//else () 
//    console.log("All is well.");

}

checkstock(4, "Coffee");
checkstock(3, "Tortillas")
checkstock(0, "Cheese")
checkstock(1, "Salsa")