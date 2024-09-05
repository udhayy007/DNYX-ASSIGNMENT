function multiplyByTen(myArray) {

    const resultArray = myArray.map(value => value * 10);
    return resultArray;
}

const input1 = [12, 2, 2, 4, 1];
const output1 = multiplyByTen(input1);
console.log("Sample Output 1:", output1); 
/////////////////////////////////////////////////////////////////////////////////////////////////////


function filterEvenNumbers(numbersArray) {
   
    const evenNumbers = numbersArray.filter(number => number % 2 === 0);
    return evenNumbers;
}

const sampleInput = [12, 5, 7, 8, 3, 2];
const sampleOutput = filterEvenNumbers(sampleInput);
console.log("Sample Output 1:", sampleOutput); 

