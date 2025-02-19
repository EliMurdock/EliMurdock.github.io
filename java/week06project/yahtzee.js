//Eli Murdock - February 2023


//grabs all the top numbers, gives a default value of 0 if empty, adds and returns the total.

function AddUpperFirst() {
    let topNumbers = [];
    let number1 = document.querySelector('#set1').value;
    topNumbers.push(number1)

    let number2 = document.querySelector('#set2').value;
    topNumbers.push(number2)

    let number3 = document.querySelector('#set3').value;
    topNumbers.push(number3)

    let number4 = document.querySelector('#set4').value;
    topNumbers.push(number4)

    let number5 = document.querySelector('#set5').value;
    topNumbers.push(number5)

    let number6 = document.querySelector('#set6').value;
    topNumbers.push(number6)

    //adds all the first numbers
    let totalFirst = topNumbers.reduce((runningTotal, newValue) => runningTotal + newValue*1, 0)
    return totalFirst
}



//compares top numbers to deternime bonus size, returns bonus
function UpperBonus(totalFirst) {
    let bonus = 0
    if (totalFirst >= 61) {
        bonus = 35
    }
    return bonus
}



//adds bonus to upper number total, retrns complete upper total
function AddUpper(totalFirst, bonus) {
    let totalUp = totalFirst + bonus
    return totalUp
}



//grabs all the lower numbers, gives a default value of 0 if empty, adds and returns the total.
function AddLower() {
    bottomnumbers = [];
    let kind3 = document.querySelector('#kind3').value;
    bottomnumbers.push(kind3)

    let kind4 = document.querySelector('#kind4').value;
    bottomnumbers.push(kind4)

    let fullHouse = document.querySelector('#fullHouse').value;
    bottomnumbers.push(fullHouse)

    let smallStraight = document.querySelector('#smallStraight').value;
    bottomnumbers.push(smallStraight)

    let largeStraight = document.querySelector('#largeStraight').value;
    bottomnumbers.push(largeStraight)

    let chance = document.querySelector('#chance').value;
    bottomnumbers.push(chance)

    let yahtzee1 = document.querySelector('#yahtzee1').value;
    bottomnumbers.push(yahtzee1)

    let yahtzee2 = document.querySelector('#yahtzee2').value;
    bottomnumbers.push(yahtzee2)


    let yahtzee3 = document.querySelector('#yahtzee3').value;
    bottomnumbers.push(yahtzee3)

    //adds all the numbers grabbed above
    let totalLow = bottomnumbers.reduce((runningTotal, newValue) => runningTotal + newValue*1, 0)
    return totalLow
}



//returns grand total
function CalcGrandTotal(totalUp, totalLow) {
    grandTotal = totalUp + totalLow
    return grandTotal
}



function Main() {
    //calls all other functions!
    let totalFirst = AddUpperFirst();
    let bonus = UpperBonus(totalFirst);
    let totalUp = AddUpper(totalFirst, bonus);
    let totalLow = AddLower();
    let grandTotal = CalcGrandTotal(totalUp, totalLow);

    //prints results
    document.querySelector('#totalFirst').value = totalFirst;
    document.querySelector('#bonus').value = bonus;
    document.querySelector('#totalUp').value = totalUp;
    document.querySelector('#totalLow').value = totalLow;
    document.querySelector('#grandTotal').value = grandTotal;
    console.log('computing')
}


document.getElementById('calculate').addEventListener("click", Main)
