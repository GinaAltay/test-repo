//1.  Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.

//1a.Programmatically subtract the value of the first element in the array from the value in the last element of the array.   
//Do not use numbers to reference the last element, find it programmatically.
//ages[7] – ages[0] is not allowed!
//1b. Add a new age to your array and repeat the step above to ensure it is dynamic. (works for arrays of different lengths).
//c. Use a loop to iterate through the array and calculate the average age. 



let ages = [3,9,23,64,2,8,28,93 ]
const lastItem = ages[ages.length - 1];
let result = [0] - lastItem;
console.log(result);

   ages.push(22);
    console.log(ages);
   let lastElement =  ages[ages.length - 1];
   ages[0] - lastElement;
   console.log( lastElement - ages[0]);

   
   let average = 0

for (let i = 0; i < ages.length; i++ ){
average += ages[i];
}
console.log(average /ages.length);


//2.  Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
let names = ["Sam", "Tommy", "Tim", "Sally","Buck", "Bob"]
//2a. Use a loop to iterate through the array and calculate the average number of letters per name. 


let total = 0

for (let i = 0; i < names.length; i++ ){
  total += names[i].length;
}
console.log(total / names.length);

//2b. Use a loop to iterate through the array again and concatenate all the names together, separated by spaces.
do {
    console.log(names +  " "  )
} while
(names < names.length)


//3.  How do you access the last element of any array?
//by Array.length

//4.  How do you access the first element of any array?
//by the index([0]


//5.  Create a new array called nameLengths. Write a loop to iterate over the 
//previously created names array and add the length of each name to the nameLengths array.



let nameLengths = [];
for(let i = 0 ; i < names.length; i++){
    nameLengths.push(names[i].length);
}
console.log(nameLengths);

//6.  Write a loop to iterate over the nameLengths array and calculate 
//the sum of all the elements in the array. 
let sumOfElements = 0;
for (let i = 0; i < nameLengths.length; i++ ){
    sumOfElements += nameLengths[i]
} 
console.log(sumOfElements);

//7.  Write a function that takes two parameters, word and n, as arguments and returns 
//the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).

let sumfunction = (word ,n) => {
    let result = '';
    for( let i = 0; i < n; i++){
        result += word;
    }
        return result;
}

console.log( sumfunction('Hello' + " ", 3));


//8.  Write a function that takes two parameters, firstName and lastName, and 
//returns a full name.  The full name should be the first and the last name separated by a space.

function fullName  (firstName, lastName){
 
console.log(firstName + " " + lastName);}
fullName('John' , 'Smith');

//9.  Write a function that takes an array of numbers and returns true if the sum of all
// the numbers in the array is greater than 100.
let arrayOfNumbers = [ 82, 4, 8, 5, 33, 12];
let sumOfNumbers = 0;

for (let i = 0; i < arrayOfNumbers.length; i++ )
    sumOfElements += nameLengths[i]
    if (sumOfElements < 100){
console.log(true);
    
}
//10.  Write a function that takes an array of numbers and returns the average of all 
//the elements in the array.
let numbers = [74, 39, 34, 65, 8, 57];
let sum = 0

for (let i = 0; i < numbers.length; i++ ){
  sum += numbers[i];
}
console.log(sum / numbers.length);


//11.  Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is
// greater than the average of the elements in the second array.

firstArray = [11, 36, 21];
let sumArray1 = 0

for (let i = 0; i < firstArray.length; i++ ){
    sumArray1 += firstArray[i];
}
console.log(sumArray1 / firstArray.length);
secondArray = [14, 66, 29];
let sumArray2 = 0

for (let i = 0; i < firstArray.length; i++ ){
sumArray2 += secondArray[i];
}
console.log(sumArray2 / secondArray.length);
function averageOfArrays(firstArray,secondArray){
    if (firstArray > secondArray);
   return true;
}

console.log(averageOfArrays(46.166666666666664, 22.666666666666668));


//12.  Write a function called willBuyDrinrk that takes a boolean isHotOutside, and 
//a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket 
//is greater than 10.50.
 function willBuyDrink(isHotOutside, moneyInPocket){
   if (isHotOutside == true &&  moneyInPocket > 10.50){
      return true;
   } else
  return false;
}
console.log(willBuyDrink(true, 9));

  
//13.  Create a function of your own that solves a problem. 
//In comments, write what the function does and why you created it.
function calcAge(age)
{
    let result = age * 365;
    console.log(result);
} 
calcAge(23);
calcAge(16);
// this function calculate the age of useres in days.