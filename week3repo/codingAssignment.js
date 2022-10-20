 // WEEK 3 MEGA ASSIGNMENT DUE SATURDAY 10/29

// making
//TASK 1    (DONE)

//All questions must be printed to your Browser’s console:

//Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93. (X)
let ages = [3, 9, 23, 64, 2, 8, 28, 93];

//Programmatically subtract the value of the first element in the array from the value in 
//the last element of the array 
//Do not use numbers to reference the last element, find it programmatically, 
//ages[7] – ages[0] is not allowed!  (X)
console.log ([ages.length-1]-ages[0]); 

//4


//Add a new age to your array and repeat the step above to ensure it is dynamic.
// (works for arrays of different lengths). (X)

ages.push(41);
console.log([ages.length-1]-ages[0]);


for (let i=0; i < ages.length; i++){
    console.log(ages[i]);
}
ages[3]=24
console.log(ages)

//3
//9
//23
//64
//2
//8
//28
//93
//41
//(9) [3, 9, 23, 24, 2, 8, 28, 93, 41]
//Use a loop to iterate through the array and calculate the average age. 
let ages = [3, 9, 23, 64, 2, 8, 28, 93];


const initialValue = 0;
const sumWithInitial = ages.reduce(
  (previousValue, currentValue) => previousValue + currentValue,
  initialValue
);

console.log(sumWithInitial);

let average= (sumWithInitial/ ages.length)
  console.log(average)

  //230
//28.75




//TASK 2
//Create an array called names that contains the following values: ‘Sam’,
// ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’

let names= ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

// / Use a loop to iterate through the array and calculate the average 
//number of letters per name. 

let lengths = names.map(function(element){
    return element.length;
});
console.log(lengths)

let sum = lengths.reduce(function(accumulator, currentValue) {
return accumulator + currentValue;
});
console.log(sum);

let average = (sum/ names.length);

console.log(average);





//Use a loop to iterate through the array again and concatenate all the names 
//together, separated by spaces. 

let names= ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];


for (let i in names) {
  console.log(names[i]);
}
console.log(names.join());

//Sam
//Tommy
//Tim
//Sally
//Buck
//Bob
//Sam,Tommy,Tim,Sally,Buck,Bob



// 3- How do you access the last element of any array?
nameOfArray.length-1

// 4 -How do you access the first element of any array?
nameOfArray[0]


// 5- Create a new array called nameLengths. Write a loop to iterate over
//    the previously created names array and add the length of each name to the 
//  nameLengths array.For example:
//    namesArray = ["Kelly", "Sam", "Kate"] //given this array
//    nameLengths = [5, 3, 4] //create this new array
let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

let nameLengths = 0
for (i = 0; i < names.map; i++){
  nameLengths += names[i]
}
console.log(nameLengths)


const nameLengths = [3, 5, 3, 5, 4, 3];

let total = 0
for (let i = 0; i < nameLengths.length; i++){
   ( total += nameLengths[i]
}
console.log (total)

//23



// nameLengths = [3, 5, 3, 5, 4, 3]

// 6- Write a loop to iterate over the nameLengths array and calculate the sum of all 
//the elements in the array. 


// 7- Write a function that takes two parameters, word and n, as arguments and returns 
//the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, 
//I would expect the function to return ‘HelloHelloHello’).

// 8- Write a function that takes two parameters, firstName and lastName, and returns a full name.
//     The full name should be the first and the last name separated by a space.
function fullName(firstName, lastName){
  console.log(firstName + ' ' + lastName)
};
fullName ('Sarande', 'Jackson');

// Sarande Jackson

// 9- Write a function that takes an array of numbers and returns true if the sum of all the
// numbers in the array is greater than 100.

// 10- Write a function that takes an array of numbers and returns the average of all the
// elements in the array.

// 11- Write a function that takes two arrays of numbers and returns true if the 
//average of the elements in the first array is greater than the average of the elements 
//in the second array.

// 12- Write a function called willBuyDrink that takes a boolean isHotOutside, 
//and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket 
//is greater than 10.50.

// 13- Create a function of your own that solves a problem. 
//           In comments, write what the function does and why you created it.