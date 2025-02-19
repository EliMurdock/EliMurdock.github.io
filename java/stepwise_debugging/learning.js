
let currentDateAndTime = Date()

console.log("It is now "+currentDateAndTime)


let theTotal = total([2,8,3,4,3,7])

console.log("The total is "+theTotal)


function total(theNumbers){
	let sum = 0
	for(let aNumber of theNumbers){
		sum += aNumber//Want to know why aNumber is multiplied by 1? Remove it and find out. :)
	}
	return sum
}
