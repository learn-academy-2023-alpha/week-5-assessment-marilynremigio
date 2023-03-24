// ASSESSMENT 5: JavaScript Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Create a function that takes in a string and returns a string with a coded message. The coded message converts "a" to 4, "e" to 3, "i" to 1, and "o" to 0.

// a) Create a test with expect statements using the variables provided.

describe("secretCode", () => {
    it("returns a string with a coded message", () => {
        const secretCodeWord1 = "Lackadaisical" // Expected output: "L4ck4d41s1c4l"
        expect(secretCode(secretCodeWord1)).toEqual("L4ck4d41s1c4l")
        const secretCodeWord2 = "Gobbledygook" // Expected output: "G0bbl3dyg00k"
        expect(secretCode(secretCodeWord2)).toEqual("G0bbl3dyg00k")
        const secretCodeWord3 = "Eccentric" // Expected output: "3cc3ntr1c"
        expect(secretCode(secretCodeWord3)).toEqual("3cc3ntr1c")
    })
})

// ReferenceError: secretCode is not defined

// b) Create the function that makes the test pass.

    // Pseudo Code:
        // Create a function named secretCode that takes in a string as an argument
        // Input: a string with str as the parameter name
        // Create an object named code with key:value pairs of the letter and corresponding number
        // Use the .replace method with RegEx to replace the vowels (aeio) with its assigned numbers
        // Adding the g (global) flag and the i (case) flag allows the function to perform case-insensitive replacements at multiple indexes
        // Output: a coded string

const code = {
        a: 4,
        e: 3,
        i: 1,
        o: 0,
        A: 4,
        E: 3,
        I: 1,
        O: 0
}
const secretCode = (str) => {
       return str.replace(/[aeio]/gi, (vowel) => code[vowel])
}
     
const secretCodeWord1 = "Lackadaisical"
const secretCodeWord2 = "Gobbledygook"
const secretCodeWord3 = "Eccentric"
console.log(secretCode(secretCodeWord1)) // -> L4ck4d41s1c4l
console.log(secretCode(secretCodeWord2)) // -> G0bbl3dyg00k
console.log(secretCode(secretCodeWord3)) // -> 3cc3ntr1c

//   secretCode
// ✓ returns a string with a coded message (4 ms)

// Test Suites: 1 passed, 1 total
// Tests:       1 passed, 1 total





// --------------------2) Create a function that takes in an array of words and a single letter and returns an array of all the words containing that particular letter.

// a) Create a test with expects statement using the variable provided.

describe("containingThatLetter", () => {
    it("takes in an array of words and a single letter and returns an array of all the words containing that particular letter", () => {
        const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]
        const letterA = "a" // Expected output: ["Mango", "Apricot", "Peach"]
        expect(containingThatLetter(fruitArray, letterA)).toEqual(["Mango", "Apricot", "Peach"])
        const letterE = "e" // Expected output: ["Cherry", "Blueberry", "Peach"]
        expect(containingThatLetter(fruitArray, letterE)).toEqual(["Cherry", "Blueberry", "Peach"])
    })
})

//  ReferenceError: containingThatLetter is not defined

// b) Create the function that makes the test pass.

    // Pseudo code:
        // Create a function named containingThatLetter that takes in two arguments: an array and a string
        // The parameters will be named array and letter
        // Input: an array of words and a string of one letter
        // Use HOF .filter to iterate over the array and check if any word contains the given letter using accessor method .includes()
        // Return the word in the filtered array if it includes the letter as is OR || the letter capitalized using built-in method .toUpperCase()
        // Output: one array that only includes the words containing the particular letter given(whether its lowercase or uppercase)

const containingThatLetter = (array, letter) => {
    return array.filter(value => {
        return value.includes(letter) || value.includes(letter.toUpperCase())
    })
}

const fruitArray = ["Mango", "Cherry", "Apricot", "Blueberry", "Peach", "Kiwi"]
const letterA = "a" 
const letterE = "e" 
console.log(containingThatLetter(fruitArray, letterA)) // ->  [ 'Mango', 'Apricot', 'Peach' ]
console.log(containingThatLetter(fruitArray, letterE)) // ->  [ 'Cherry', 'Blueberry', 'Peach' ]

// containingThatLetter
//   ✓ takes in an array of words and a single letter and returns an array of all the words containing that particular letter

// Test Suites: 1 passed, 1 total
// Tests:       2 passed, 2 total





// --------------------3) Create a function that takes in an array of 5 numbers and determines whether or not the array is a "full house". A full house is exactly one pair and one three of a kind.

// a) Create a test with expect statements using the variable provided.

describe("fullHouse", () => {
    it("determines whether or not the array is a full house", () => {
        const hand1 = [5, 5, 5, 3, 3] // Expected output: true
        expect(fullHouse(hand1)).toEqual(true)
        const hand2 = [5, 5, 3, 3, 4] // Expected output: false
        expect(fullHouse(hand2)).toEqual(false)
        const hand3 = [5, 5, 5, 5, 4] // Expected output: false
        expect(fullHouse(hand3)).toEqual(false)
        const hand4 = [7, 2, 7, 2, 7] // Expected output: true
        expect(fullHouse(hand4)).toEqual(true)
    })
})

// ReferenceError: fullHouse is not defined

// b) Create the function that makes the test pass.
    // Pseudo code: 
        // Create a function named fullHouse that takes in an array as an argument 
        // Input: an array of 5 numbers
        // Create a copy of the given array using the .slice() method so we can compare the values at each index without modifying the original array (Visual aid: copyArray = [x,x,x,x,x] )
        // If one value is found at 3 different indexes and another value is found at the remaining 2 indexes, then the array has a full house (Visual aid: [x,x,x,y,y] = full house )
        // Iterate over the array using a for loop with the start at i=0 and the end at i < array.length
        // Since we want to take the first value and check if its found 2 other times in the array, we will execute multiple lines of code on the first iteration before adding our increment of i++ to the loop
        // Set a variable num1 to copyArray[0] (Visual aid: [num1,x,x,x,x] )
        // Remove the value of the current iteration from copyArray using .splice(i,1). (Visual aid: [x,x,x,x] )  Use conditional if to check that num1 can be found in the spliced array by using .includes(value) method with num1 as the value parameter. (Visual aid: if num1 is found somewhere here [x,num1,x,x] then its found twice in the array)
        // Now, remove the current first occurence of num1 in copyArray so we can check if its found a third time
        // Use .splice(copyArray.indexOf(num1),1) on copyArray (Visual aid: [x,x,x] )
        // Check if num1 appears a third time by using conditional if on copyArray.includes(num1) 
        // If it does, then we repeat the previous .slice() step to give us an array with the last 2 values ([x,x])
        // Now we can check if the remaining two numbers are equal. Set num2 to the current first index copyArray[0] and use conditional if to check if num2 === copyArray[1] the value at the next index
        // If it is true, then return true. If at any point, the conditionals aren't true, then come out of the loop and run the iteration on the next index. If a full house is not found, return false
        // Output: true or false based on if the array elements conclude to a full house 

const fullHouse = (array) => { // EXAMPLE hand4 = [7, 2, 7, 2, 7] 
    copyArray = array.slice() // makes copy of array so copyArray = [7, 2, 7, 2, 7]
    for(i=0; i < array.length;){ // for loop starting at 0 index, ending at last index
        const num1 = copyArray[0] // set num1 = first value = 7 
        if(copyArray.splice(i, 1).includes(num1)){ // check if copyArray splice first index [2, 7, 2, 7] includes 7
            copyArray.splice(copyArray.indexOf(num1), 1) // deletes the next index of 7 -> [2, 2, 7]
            if(copyArray.includes(num1)){ // checks if [2, 2, 7] includes 7 for a third time
                copyArray.splice(copyArray.indexOf(num1), 1) // removes the third 7 -> [2, 2]
                const num2 = copyArray[0] // set num2 = first index = 2
                if(num2 === copyArray[1]){ // check if num2 === next index 
                    return true // returns true if num1 is found 3 times and num2 is found 2 times
                }
            }
        }else{
            i++
        }
    }
    return false
}

const hand1 = [5, 5, 5, 3, 3]
const hand2 = [5, 5, 3, 3, 4]
const hand3 = [5, 5, 5, 5, 4]
const hand4 = [7, 2, 7, 2, 7]

console.log(fullHouse(hand1))
console.log(fullHouse(hand2))
console.log(fullHouse(hand3))
console.log(fullHouse(hand4))


// fullHouse
// ✓ determines whether or not the array is a full house (2 ms)

// Test Suites: 1 passed, 1 total
// Tests:       3 passed, 3 total