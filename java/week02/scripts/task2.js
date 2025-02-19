/* Lesson 2 */

/* VARIABLES */

// Step 1: declare and instantiate a variable to hold your name
let myName = 'Elijah';

// Step 2: place the value of the name variable into the HTML file (hint: document.querySelector())
document.querySelector('#name').textContent = myName;

// Step 3: declare and instantiate a variable to hold the current year
let thisYear = '2023';

// Step 4: place the value of the current year variable into the HTML file
document.querySelector('#year').textContent = thisYear;

// Step 5: declare and instantiate a variable to hold the name of your picture
let myPhoto = 'images/20210915_225233.jpg';

// Step 6: copy your image into the "images" folder
// complete

// Step 7: place the value of the picture variable into the HTML file (hint: document.querySelector().setAttribute())
document.querySelector('img').setAttribute('src', myPhoto);



/* ARRAYS */

// Step 1: declare and instantiate an array variable to hold your favorite foods
let myFavFoodArray = ['Chocolate', ' Macaroni & Cheese', ' French Bread']


// Step 2: place the values of the favorite foods variable into the HTML file
document.querySelector('#food').textContent = myFavFoodArray;


// Step 3: declare and instantiate a variable to hold another favorite food
let anotherFood = ' Watermelon';

// Step 4: add the variable holding another favorite food to the favorite food array
myFavFoodArray.push(anotherFood);

// Step 5: repeat Step 2
document.querySelector('#food').textContent = myFavFoodArray;

// Step 6: remove the first element in the favorite foods array
myFavFoodArray.shift();

// Step 7: repeat Step 2
document.querySelector('#food').textContent = myFavFoodArray;

// Step 8: remove the last element in the favorite foods array
myFavFoodArray.pop();

// Step 7: repeat Step 2
document.querySelector('#food').textContent = myFavFoodArray;


