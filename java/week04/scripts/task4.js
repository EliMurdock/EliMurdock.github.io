/* Lesson 4 */

/* DATA */

// Step 1: Declare a new variable to hold information about yourself
let myself = {};

// Step 2: Inside of the object, add a property named name with a value of your name as a string
myself.name = "Elijah"

// Step 3: Add another property named photo with a value of the image path and name (used in Task 2) as a string
myself.photo = 'images/20210915_225233.jpg'

// Step 4: Add another property named favoriteFoods with a value of an array of your favorite foods as strings ( hint: [] )
myself.favoriteFoods = ['Chocolate', 'Macaroni & Cheese', 'French Bread', 'Watermelon']

// Step 5: Add another property named hobbies with a value of an array of your hobbies as strings
myself.hobbies = ['Mountain Biking', 'Swimming', 'Strategy Games']

// Step 6: Add another property named placesLived with a value of an empty array
myself.placesLived = []

// Step 7: Inside of the empty array above, add a new object with two properties: place and length and values of an empty string
myself.placesLived.push(Denver = {'place' : '', 'length' : ''})

// Step 8: For each property, add appropriate values as strings
myself.placesLived[0].place = 'Denver'
myself.placesLived[0].length = '1 year'

// Step 9: Add additional objects with the same properties for each place you've lived
myself.placesLived.push(SanDiego = {'place' : 'San Diego', 'length' : '19 years'})
myself.placesLived.push(Rexburg = {'place' : 'Rexburg', 'length' : '3 years'})

//console.log(myself)
//console.log(myself.placesLived[0])
/* OUTPUT */

// Step 1: Assign the value of the name property (of the object declared above) to the HTML <span> element with an ID of name
document.querySelector('#name').textContent = myself.name

// Step 2: Assign the value of the photo property as the src attribute of the HTML <img> element with an ID of photo
document.querySelector('#photo').src = myself.photo

// Step 3: Assign the value of the name property as the alt attribute of the HTML <img> element with an ID of photo
document.querySelector('#photo').setAttribute('alt', myself.name)

// Step 4: For each favorite food in the favoriteFoods property, create an HTML <li> element and place its value in the <li> element
for(food of myself.favoriteFoods) {
    document.querySelector('#favorite-foods').innerHTML += '<li>' + food + '</li>'
}

// Step 5: Append the <li> elements created above as children of the HTML <ul> element with an ID of favorite-foods
//done

// Step 6: Repeat Step 4 for each hobby in the hobbies property
for (hobby of myself.hobbies) {
    document.querySelector('#hobbies').innerHTML += '<li>' + hobby + '</li>'
}

// Step 7: Repeat Step 5 using the HTML <ul> element with an ID of hobbies
//complete

// Step 8: For each object in the <em>placesLived</em> property:
// - Create an HTML <dt> element and put its place property in the <dt> element
// - Create an HTML <dd> element and put its length property in the <dd> element
for (let i=0 ; i < myself.placesLived.length; i++) {
    placedt = '<dt>' + myself.placesLived[i].place + '</dt>'
    lengthdd = '<dd>' + myself.placesLived[i].length + '</dd>'
    document.querySelector('#places-lived').innerHTML += '<dl>' + placedt + lengthdd + '</dl>'
}

// Step 9: Append the HTML <dt> and <dd> elements created above to the HTML <dl> element with an ID of places-lived
//complete, final line of step above
