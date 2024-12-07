// ----INTERMEDIATE LAB 1----
// Create a function that takes a string as a parameter and returns the string with the first character 
// of each word changed into a capital letter, as in the example blelow. 
// Test it with different strings.

// function ucFirstLetters(str) {
//     let newString = '';
//     let words = str.split(' ')

//     for(let word of words) {
//         if (newString.length !=0) newString += ' '
//         newString += word.charAt(0).toUpperCase() +  word.substring(1)
//     }

//     return newString;
// }
// console.log(ucFirstLetters("los angeles"))
// console.log(ucFirstLetters("san antonio"))
// console.log(ucFirstLetters("new york city"))
// console.log(ucFirstLetters("dallas fort worth"))
// console.log(ucFirstLetters("the great gatsby"))
// console.log(ucFirstLetters("broadway"))


// ----INTERMEDIATE LAB 2----
// Create a function truncate (str, max) that truncates a given string 
// of text if its total length is greater that the max length. It should return 
// either the truncated text, with an ellipsis (...) added to the end if it was too long, 
// or the original text otherwise.

// function truncate(str, max) {
//     if(str.length > max) {
//         return str.substring(0, max) + '...'
//     }
//     else {
//         return str
//     }
// }

// b. Write another variant of the truncate function that uses a conditional operator.

// function truncate2(str, max) {
//     return (str.length > max) ? str.substring(0, max) + '...' :str
// }

// console.log(truncate('This text will be truncated if it is too long', 25))
// console.log(truncate2('This text will be truncated if it is too long', 25))


// ----INTERMEDIATE LAB 3----
// 3. Use the following animals array for the below tasks. 
// Test each one by printing the result to the console.

// const animals = ['Tiger', 'Giraffe']
// console.log(animals)

// a. Add to new values to the end.
// animals.push('Longhorn', 'Bulldog')
// console.log(animals)

// b. Add 2 new values to the beginning.
// animals.unshift('Lion', 'Bear')
// console.log(animals)

// c. Sort the values alphabetically.
// animals.sort()
// console.log(animals)

// d. Write a function replaceMiddleAnimal (newValue) that replaces the value in the middle of the animals array with newValue.
// function replaceMiddleAnimal(newValue) {
//     let midway = animals.length/2;
//     animals[midway] = newValue
// }
// replaceMiddleAnimal('Rhinoceros')
// console.log(animals)

// e. Write a function findMatchingAnimals (beginsWith) that returns a new array
// containing all the animals that begin with the beginWith string.
// Try to make it work regardless of upper/lower case.
// function findMatchingAnimals(beginsWith) {
//     return animals.filter(animal =>
//         animal.toLowerCase().startsWith(beginsWith.toLowerCase())
//     ) 
// }
// console.log(findMatchingAnimals('b'))
// console.log(findMatchingAnimals('l'))
// console.log(findMatchingAnimals('g'))


// ----INTERMEDIATE LAB 4----
// Write a function camelCase(cssProp) that changes dash-seperated 
// CSS properties like 'margin-left' into camel-cased'marginLeft'.
// The function should remove all dashes, and uppercase the first letter
// of each word after a dash.

// b. Create variants of the camelCase function that use different types of for loops, and
// c. with and without the conditional operator.

// function camelCase(cssProp) {
//     let words = cssProp.split('-');
//     let camelString = '';
  
//     words.forEach(word => {
//         if(camelString.length == 0) {
//             camelString = word
//         }
//         else {
//             camelString += word.charAt(0).toUpperCase() + word.substring(1)
//         }
//     })

//     return camelString
// }

// const camelCase2 = (cssProp) => {
//     let camelString = ''
    
//     for (let word of cssProp.split('-')) {
//         camelString += (camelString.length == 0) ? word : word.charAt(0).toUpperCase() + word.substring(1)

//     }

//     return camelString
// }

// console.log(camelCase('margin-left'))
// console.log(camelCase2('background-image'))
// console.log(camelCase('display'))


// ----ITERMEDIATE LAB 5----
// Decimal number operations in JavaScript can lead to unexpected results, as in the following:

// let twentyCents = 0.20
// let tenCents = 0.10

// console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`)

// We can sometimes avoid this using the toFixed function to force the number of decimal places as below,
// but it is not always useful.

// let fixedTwenty = twentyCents.toFixed(2);
// let fixedTen = tenCents.toFixed(2);

// console.log(fixedTwenty + fixedTen) // Why is this not working? Because toFixed when adding + concatenates and returns a string.

// a. Explain why the above code returns the wrong answer. 
// A: Because it returns the numbers as a string (concatenating the numbers), not adding them together.

// b. Create a function currencyAddition(float1, float2) which safely adds the two decimal numbers
// float1 and float2 and returns the correct float result.

// function currencyAddition(float1, float2) {
//     let wholeNum1 = float1 * 100;
//     let wholeNum2 = float2 * 100;

//     return(wholeNum1 + wholeNum2) /100
// }

// // c. Create a function currencyOperation(float1, float2, operation) which safely performs the given operation
// // (either +, -, /, or *) on the two numbers and returns the correct float result.

// function currencyOperation(float1, float2, operation) {
//     let wholeNum1 = float1 * 100
//     let wholeNum2 = float2 * 100
//     let wholeResult = 0;


//     switch (operation) {
//         case '+' :
//             wholeResult = wholeNum1 + wholeNum2; break
//         case '*' :
//             wholeResult = wholeNum1 * wholeNum2; break
//         case '-' :
//             wholeResult = wholeNum1 - wholeNum2; break
//         case '/' :
//             wholeResult = wholeNum1 / wholeNum2; break
//         default :
//         wholeResult = wholeNum1 + wholeNum2; break
//     }

//     return wholeResult /100

// }

// // d. (Extension) Extend the above function to include a fourth argument numDecimals
// // which allows the operation to support different amounts of decimal places from 1 to 10.
// // HINT: Assume 2 decimal places for b) and c) and use a multiplication factor. 
// // Test with different values as well as the below.

// function currencyOperation2(float1, float2, operation, numDecimals) {
//     let factor = 10** numDecimals

//     let wholeNum1 = float1 * factor
//     let wholeNum2 = float2 * factor
//     let wholeResult = 0

//     switch (operation) {
//         case '+' :
//             wholeResult = wholeNum1 + wholeNum2; break
//         case '*' :
//             wholeResult = wholeNum1 * wholeNum2; break
//         case '-' :
//             wholeResult = wholeNum1 - wholeNum2; break
//         case '/' :
//             wholeResult = wholeNum1 / wholeNum2; break
//         default :
//         wholeResult = wholeNum1 + wholeNum2; break
//     }
//     return Math.round(wholeResult / factor)
// }

// console.log(0.3 == currencyAddition(0.1, 0.2))
// console.log(0.3 == currencyOperation(0.1, 0.2))

// console.log(currencyOperation2(0.2, 0.1, '+', 2))


// ----ITERMEDIATE LAB 6----
// Create a function unique(duplicatesArray) which takes an array parameter that may include duplicates.
// Your function should return an array containing only the unique values from duplicatesArray.
// Test with the following arrays and create another one of your own.

// const colors = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow']
// const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43]

// function unique(duplicatesArray) {
//     const uniques = [];

//     duplicatesArray.forEach(element => {
//         if (!uniques.includes(element)) {
//             uniques.push(element)
//         }
//     }        
//     )

//     return uniques

// }

// console.log(unique(colors))
// console.log(unique(testScores))


// ----INTERMEDIATE LAB 7----
// Use the following array of book objects to practice the array functions for map, find, and filter.
// Test each of your answers to the below tasks.

// const books = [
// {id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925},
// {id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960},
// {id: 3, title: '1984', author: 'George Orwell', year: 1949},
// {id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932},
// {id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951},
// ];

// a. Write a function getBookTitle(bookId) that uses the find function to return
// the title of the book object with the matching id.

// function getBookTitle(bookId) {
//     let matchBook = books.find(book => book.id == bookId)
//     return matchBook.title
// }
// console.log(getBookTitle(2))

// b. Write a function getOldBooks() that uses the filter function to return 
// all book objects written before 1950.

// function getOldBooks() {
//     return books.filter(book => book.year < 1950)
// }

// console.log(getOldBooks())

// c. Write a function addGenre() that uses the map function to add 
// a new genre property to all of the above books, with the value 'classic'.

// function addGenre() {
//     books.map(book => book.genre = 'classic')
// }

// addGenre()
// console.log(books)

// d. (Extension) Write a function getTitles(authorInitial) that uses map and filter 
// together to return an array of book titles for books written by authors
// whose names start with authorInitial.

// function getTitles(authorInitial) {
//     return books
//     .filter(book => book.author.startsWith(authorInitial))
//     .map(book => book.title)
// }

// console.log(getTitles('J'))

// e. (Extension) Write a function latestBook() that uses find and forEach to get
// the book with the most recent publication date.

// function latestBook() {
//     let newestPubDate = 0
//     books.forEach(book => {
//         if (book.year > newestPubDate) {
//            newestPubDate = book.year
//     }
// })
// return books.find(book => book.year === newestPubDate)

// }

// console.log(latestBook())


// ----INTERMEDIATE LAB 8----
// The following code creates a new Map object for storing names beginning 
// with A, B, or C with their phone numbers.

// const phoneBookABC = new Map()
// phoneBookABC.set('Annabelle', '0412312343')
// phoneBookABC.set('Barry', '0433221117')
// phoneBookABC.set('Caroline', '0155221182')

// a. Create a new phoneBookDEF Map to store names beginning with D, E, or F.
// b. Initialize the contents of phoneBookDEF by passing in an array of keys/values.

// const phoneBookDEF = new Map([
//     ['Dylan', '0867530986'],
//     ['Evelyn', "0123641417"],
//     ['Florence', '0131210267']
// ])

// c. Update the phone number for Caroline.

// phoneBookABC.set('Caroline', '0987654321')

// d. Write a function printPhoneBook(contacts) that prints the names and phone numbers in the given Map.

// function printPhoneBook(contacts) {
//     contacts.forEach((phone, name) => {
//         console.log(`${name}: ${phone}`)
//     })
// }

// printPhoneBook(phoneBookABC)

// e. Combine the contents of the two individual Maps into a single phoneBook Map.

// const phoneBooks = new Map([...phoneBookABC, ...phoneBookDEF])

// f. Print out the full list of names in the combined phone book.

// console.log([...phoneBooks.keys()])


// ----INTERMEDIATE LAB 9----
// Given the below salaries object, perform the following tasks:
// let salaries = {
//     "Timothy" : 35000,
//     "David" : 25000,
//     "Mary" : 55000,
//     "Christina" : 75000,
//     "James" : 43000
// };

// a. Write a function sumSalaries(salaries) that calculates and returns the total of all salaries.

// function sumSalaries(salaries) {
//     let total = 0;

//     for (let salary of Object.values(salaries)) {
//         total += salary
//     }

//     return total
// }

// console.log(sumSalaries(salaries))

// b. Write a function topEarner(salaries) that calculates and returns the name of the person earning the highest salary.

// function topEarner(salaries) {
//     let topSalary = 0;
//     let topName = null;
    
//     for(let [name, salary] of Object.entries(salaries)) {
//         if (topSalary < salary) {
//             topSalary = salary
//             topName = name
//         }
//     }

//     return `${topName} earns the most.`
// }

// console.log(topEarner(salaries))


// ----INTERMEDIATE LAB 10----
// The following code uses the Date object to print the current time 
// and the number of hours that have passed today so far. 
// Extend the code to do the following:

// const today = new Date();
// console.log('Current time is: ' + today.toLocaleTimeString())
// console.log(today.getHours() + ' hours have passed so far today')

// a. Print the total number of minutes that have passed so far today.
// const todayMins = new Date();

// console.log(`${today.getHours() * 60 + today.getMinutes()} minutes have passed so far today`)

// b. Print the total number of seconds that have passed so far today.

// const todaySecs = new Date ();

// console.log(`${today.getHours() * 3600 + today.getMinutes() * 60 + today.getSeconds()} seconds have passed so far today`)

// c. Calculate and print your age as: 'I am x years, y months, and z days old'.

// const birthday = new Date('1994-07-24');
// let years = today.getFullYear() - birthday.getFullYear();
// let months = today.getMonth() - birthday.getMonth();
// let days = today.getDate() - birthday.getDate();

// if (days < 0) {months -= 1; days += 30}
// if (months < 0) {years -= 1; months += 12}


// console.log(`I am ${years} years, ${months} months, and ${days} days old`)

// d. Write a function daysInBetween(date1, date2) which calculates and 
// returns the amount of days in between the two given dates.

function daysInBetween(date1, date2) {
    const date1Ms = date1.getTime();
    const date2Ms = date2.getTime();

    const diffMs = Math.abs(date2Ms - date1Ms);

    const millisecondsPerDay = 1000 * 60 * 60 * 24;
    const days = Math.floor(diffMs / millisecondsPerDay);

    return days; 
}
    
const date1 = new Date("11/13/2024")
const date2 = new Date("12/25/2024")

const daysBetween = daysInBetween(date1, date2);
console.log(daysBetween)




























