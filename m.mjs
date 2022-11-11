var testArray = [11, 3, 7, 1, 20, 15, 14, 16, 12];

let missingNumbers = [];
let missingIndexes = [];

let missingIndexandNumbers = {};

var sortedArray = testArray.sort((a, b) => a-b);

let minNum = sortedArray[0];
let maxNum = sortedArray[sortedArray.length -1];



for (let i = minNum; i < maxNum; i++) {
    
    if (sortedArray.includes(i)){
        

    } else {
         missingIndexes.push(i-1);
         missingNumbers.push(i);
    }
}
console.log("Sorted Array");
console.log(sortedArray);
 console.log("Mssing numbers in array")
console.log(missingNumbers);
console.log("Missing indexes in Array")
console.log( missingIndexes);
