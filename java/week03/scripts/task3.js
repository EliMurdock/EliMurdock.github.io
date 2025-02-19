/* Lesson 3 */

/* FUNCTIONS */


// Step 1: Using function declaration, define a function named add that takes two arguments, number1 and number2
function add(num1, num2) {
    let sum = num1*1 + num2*1;
    return sum;
}

// Step 2: In the function, return the sum of the parameters number1 and number2
//return added

// Step 3: Step 3: Using function declaration, define another function named addNumbers that gets the values of two HTML form controls with IDs of addend1 and addend2. Pass them to the add function
function AddNumbersFromHTML() {
    let number1 = document.querySelector('#addend1').value;
    let number2 = document.querySelector('#addend2').value;
    let total = add(number1, number2);
    document.querySelector('#sum').value = total;  
}

// Step 4: Assign the return value to an HTML form element with an ID of sum
//done

// Step 5: Add a "click" event listener to the HTML button with an ID of addNumbers that calls the addNumbers function
document.getElementById('addNumbers').addEventListener("click", AddNumbersFromHTML)



// Step 6: Using function expressions, repeat Steps 1-5 with new functions named subtract and subtractNumbers and HTML form controls with IDs of minuend, subtrahend, difference and subtractNumbers
let subtract = function (num1, num2) {
    let sum = num1*1 - num2*1;
    return sum;
}

// main subtraction function
let subtractNumbers = function (){
    let number1 = document.querySelector('#minuend').value;
    let number2 = document.querySelector('#subtrahend').value;
    let total = subtract(number1, number2);
    document.querySelector('#difference').value = total;  
}

//subtract button 
document.getElementById('subtractNumbers').addEventListener("click", subtractNumbers)



// Step 7: Using arrow functions, repeat Steps 1-5 with new functions named multiply and mulitplyNumbers and HTML form controls with IDs of factor1, factor2, product and multiplyNumbers
let multiply = (num1, num2) => num1*1 * num2*1;

//main multiplication function
const multiplyNumbers = () => {
    let number1 = document.querySelector('#factor1').value;
    let number2 = document.querySelector('#factor2').value;
    let total = multiply(number1, number2);
    document.querySelector('#product').value = total;  
}

//multiplication button
document.getElementById('multiplyNumbers').addEventListener("click", multiplyNumbers)



// Step 8: Using any of the three function declaration types, repeat Steps 1-5 with new functions named divide and divideNumbers and HTML form controls with IDs of dividend, divisor, quotient and divideNumbers
const divide = (num1, num2) => num1*1 / num2*1;
    

//main division function
const divideNumbers = () => {
    let number1 = document.querySelector('#dividend').value;
    let number2 = document.querySelector('#divisor').value;
    let total = divide(number1, number2);
    document.querySelector('#quotient').value = total;  
}

//division button
document.getElementById('divideNumbers').addEventListener("click", divideNumbers)



// Step 9: Test all of the mathematical functionality of the task3.html page.
//done



/* BUILT-IN METHODS */

// Step 1: Declare and instantiate a variable of type Date to hold the current date
let currentDate = new Date();

// Step 2: Declare a variable to hold the current year
let thisYear;

// Step 3: Using the variable declared in Step 1, call the built-in getFullYear() method/function and assign it to the variable declared in Step 2
thisYear = currentDate.getFullYear()

// Step 4: Assign the current year variable to an HTML form element with an ID of year
document.querySelector('#year').textContent = thisYear; 


/* ARRAY METHODS */

// Step 1: Declare and instantiate an array variable to hold the numbers 1 through 25
let numberArray = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]

// Step 2: Assign the value of the array variable to the HTML element with an ID of "array"
document.querySelector('#array').textContent = numberArray; 


// Step 3: Use the filter array method to find all of the odd numbers of the array variable and assign the reult to the HTML element with an ID of "odds" ( hint: % (modulus operartor) )
const odds = numberArray.filter((number) => number % 2 != 0)
document.querySelector('#odds').textContent = odds; 

// Step 4: Use the filter array method to find all of the even numbers of the array variable and assign the result to the HTML element with an ID of "evens"
const evens = numberArray.filter((number) => number % 2 == 0)
document.querySelector('#evens').textContent = evens; 

// Step 5: Use the reduce array method to sum the array variable elements and assign the result to the HTML element with an ID of "sumOfArray"
const arraySum = numberArray.reduce((runningTotal, newValue) => runningTotal + newValue, 0)
document.querySelector('#sumOfArray').textContent = arraySum;

// Step 6: Use the map array method to multiple each element in the array variable by 2 and assign the result to the HTML element with an ID of "multiplied"
const arrayXTwo = numberArray.map((number) => number * 2)
document.querySelector('#multiplied').textContent = arrayXTwo;


// Step 7: Use the map and reduce array methods to sum the array elements after multiplying each element by two.  Assign the result to the HTML element with an ID of "sumOfMultiplied"
const arrayV2 = numberArray.map((number) => number * 2)
const arrayV2Sum = arrayV2.reduce((runningTotal, newValue) => runningTotal + newValue, 0)
document.querySelector('#sumOfMultiplied').textContent = arrayV2Sum;




