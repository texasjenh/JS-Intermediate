// PRIMATIVES AS OBJECTS: NUMBERS

// const n = 1.23456; // primative floating point number

// console.log(n.toFixed(2)) // 1.23 fixed to 2 decimal places
// console.log(n.toFixed(3)) // 1.235 fixed to 3 decimal places
// console.log(n.toFixed(4)) // 1.2346 fixed to 4 decimal places - rounds up last digit
// console.log(n.toPrecision(10)) // 1.234560000 - fills or rounds to the exact number of digits


// PRIMATIVES AS OBJECTS: STRINGS

// const hello = 'hello world' // primitive string

// // console.log(hello.toUpperCase()) //HELLO WORLD
// console.log(hello.endsWith('world')) // true


// PRIMATIVES LIKE OBJECT: STRING-LIKE OBJECTS

// const user = {
//    name: 'John'
// }

// console.log("User: " + user); // User: [object Object]

// const user = {
//     name: 'John',
//     toString() {
//         return this.name; // custom string value
//     }
// }
// console.log("User: " + user); // User: John


// PRIMATIVE LIKE OBJECT: NUMBER-LIKE OBJECT

// const apple = {
//     name: 'Apple',
//     category: 'Honey Crisp',
//     price: 1.2,
//     valueOf() { // without this special function, we can't multiply the object below
//         return this.price;
//     }
// }

// console.log(apple * 2) // 2.4


// NUMBERS: DECIMAL NUMBERS

// VERY LARGE NUMBERS

// const billion1 = 1000000000 // 9 zeros - hard to read
// const billion2 = 1_000_000_000 // easier to read, underscores ignored
// const billion3 = 1e9 // exponential format

// console.log(billion1 === billion2) // true
// console.log(billion2 === billion3) // true


// VERY SMALL NUMBERS

// const microSecs1 = 0.000001 // 6 decimal places - hard to read
// const microSecs2 = 0.000_001 // easier to read, underscores ignored
// const microSecs3 = 1.e-6 // exponential format

// console.log(microSecs1 === microSecs2) // true
// console.log(microSecs2 === microSecs3) // true
// console.log(microSecs1 === microSecs3) // true


// HEXADECIMAL NUMBERS

// const r = 0xff;
// const g = 0xff;
// const b = 0xff;

// const white = `rgb(${r}, ${g}, ${b})`
// console.log(white) // rgb(255, 255, 255)


// NUMBERS: BINARY AND OCTAL NUMBERS

// const mobile = 041234567
// console.log(mobile) // 8730999 - decimal equivalent

// const binary = 0b11111111 // bimary form of 255
// const octal = 0o377 // octal form of 255

// console.log(binary) // 255
// console.log(binary === octal) // true


// NUMBERS: BASE CONVERSION

// const ff = 255
// const ee = 238
// const dd = 221
// console.log(ff.toString(16)) // ff

// convert from rgb color code to hexadecimal
// console.log(`#${ff.toString(16)}${ee.toString(16)}${dd.toString(16)}`) // #ffeedd


// NUMBERS: IMPRECISE CALCULATIONS

// const toobig = 1e350 // 1*10 (350 = exponent) - overflows storage

// console.log(toobig) // Infinity
// console.log(Number.MAX_VALUE) // 1.7976931348623157

// const point1 = 0.1; const point2 = 0.2;
// console.log(`${point1} + ${point2} = ${point1 + point2}`) // 0.1 + 0.2 = 0.30000000000000004

// Numberic literals with absolute values equal to 2^53 or greater are too large to be represented accurately as integers.
// console.log(9_999_999_999_999_999) // 16 digits, prints as 10000000000000000
// console.log(Number.MAX_SAFE_INTEGER) // 9007199254740991


//  NUMBERS: TESTS - isFINITE AND isNaN

// console.log(isNaN(NaN)) // true
// console.log(NaN == NaN) // false

// console.log(isFinite(1/3)) // true, regular number
// console.log(isFinite("string")) // false, converts to NaN
// console.log(isFinite(Infinity)) // false, represents infinite number


// NUMBERS: parseInt and parseFloat- PARSING THRU INTEGERS AND & DECIMALS

// console.log(+"100px") // NaN - 100px is not a valid number

// console.log(parseInt("150px")) // 150 - stops at 'px'
// console.log(parseFloat("2.5em")) // 2.5 - stops at 'em'
// console.log(parseFloat("12.34.56")) // 12.34 - stops at 2nd invalid decimal
// console.log(parseInt("a123")) // NaN - can't parse the 'a' so it stops


// STRINGS: SPECIAL CHARACTERS

// const guestList = `Guests:\n\t- John \n\t- Pete \n\t- Mary`
// console.log(guestList)


// STRINGS: COMPARING STRINGS

// console.log('Z'.codePointAt(0)) // 90
// console.log(String.fromCodePoint(90)) // Z


// STRINGS: MANIPULATING STRINGS

// const string = 'I could be anything you like'

// console.log(string.length) // 28 - string is 28 characters long
// console.log(string.indexOf('anything')) // 11 - starting at 0 for 'I'
// console.log(string.substring(20)) // 'you like' - substring starting at position 20
// console.log(string.toUpperCase()) // I COULD BE ANYTHING YOU LIKE
// console.log(string + ' plus more') // I could be anything you like plus more - adds 'plus more' to end of sentence.

// const sentence = 'The quick brown fox jumps over the lazy dog.';

// console.log(sentence.startsWith('The')) // true - case sensitive
// console.log(sentence.endsWith('dog')) // false - needs the full stop. 
// // If '.' was at end of 'dog' then it would be true.
// console.log(sentence.split(' ')) // splits into multiple strings using the given separator
// // ['The','quick','brown','fox','jumps','over','the','lazy','dog.']
// console.log(sentence.slice(4, 10)) // quick - gets the section between chars 4 and 10
// console.log(sentence.replace('quick', 'slow')) // The slow brown fox jumps over the lazy dog.
// console.log("  extra    spaces   ".trim()) // extra   spaces - trims white space from start to end.


// ARRAYS: DECLARATION (to create an array)

// const arr1 = new Array(1,2,3); // constructor, not often used
// const arr2 = [1, 2, 3]; // array literal, much more common ***USE THIS WAY***

// console.log(arr1); // [ 1, 2, 3 ]
// console.log(arr2); // [ 1, 2, 3 ]


// METHODS THAT WORK WITH THE END OF THE ARRAY- pop & push

// const fruits = ['Apple', 'Orange', 'Pear']
// const lastFruit = fruits.pop() // removes and returns the last item
// // console.log(lastFruit); // Pear
// // console.log(fruits); // [ 'Apple', 'Orange' ]

// fruits.push('Banana') // adds to the end of the array
// console.log(fruits); // [ 'Apple', 'Orange', 'Banana' ]


// METHODS THAT WORK WITH THE BEGINNING OF THE ARRAY- shift & unshift

// const fruits = ['Apple', 'Orange', 'Pear']
// const firstFruit = fruits.shift() // removes and returns the first item.

// // console.log(firstFruit) // Apple
// // console.log(fruits) // [ 'Orange', 'Pear' ]

// fruits.unshift('Banana') // adds to the beginning of the array.
// console.log(fruits) // [ 'Banana', 'Orange', 'Pear' ]


// ARRAYS: INTERNALS

// const fruits1 = ['Apple', 'Orange', 'Pear']
// const fruits2 = fruits1 // refers to fruits 2 being equal to fruits1 therefore one memory location

// fruits1.push('Banana') // using push to add new item to fruits1
// console.log(fruits2) // [ 'Apple', 'Orange', 'Pear', 'Banana' ]
// // fruits2 carries the same change made to fruits1 since they are equal to each other and reference the same memory location

// console.log('fruit at index 0: ' + fruits1[0]) // fruit located at index 0 (first list item) is Apple
// console.log('fruit at index 1: ' + fruits1[1]) // fruit located at index 1 (seond list item) is Orange


// ARRAYS: MULTIDIMENSIONAL

// const matrix = [ // 3x3 matrix
//     [1, 2, 3], // Row 0 (Column 0 = 1, 4 ,7)
//     [4, 5, 6], // Row 1 (Column 1 = 2, 5, 8)
//     [7, 8, 9]  // Row 2 (Column 2 = 3, 6, 9)
// ]

// console.log(matrix[1][1]) // 5 - the value of Row 1, Column 1


// ARRAYS: toString METHOD

// const numbers = [1, 2, 3]
// const strings = ["one", "two", "three"]
// const empty = []

// console.log('Numbers: ' + numbers) // Numbers: 1, 2, 3 - numeric data
// console.log('Strings: ' + strings) // Strings: one, two, three - textual data
// console.log('Empty ' + empty) // Empty: - empty is empty


// ARRAYS: slice METHOD

// const sliceArray = ["red", "orange", "yellow", "green", "blue", "indigo", "violet"]
// const sliced = sliceArray.slice(0, 3) // start at the beginning (0), get items up to index 3
// const endSliced = sliceArray.slice(-3) // start at the end (represented by negative), get last 3 items (-3)

// console.log(sliced) // [ 'red', 'orange', 'yellow' ]
// console.log(endSliced) // [ 'blue', 'indigo', 'violet' ]
// console.log(sliceArray) // ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet']


// ARRAYS: splice METHOD

// const spliceArray = ["I", "study", "JavaScript", "right", "now"]
// const removed = spliceArray.splice(0, 3, "Let's", "dance")

// console.log(removed) // [ 'I', 'study', 'JavaScript' ] - 3 elements starting at index 0 are removed & returned
// console.log(spliceArray) // [ "Let's", 'dance', 'right', 'now' ] - 2 new elements are inserted


// ARRAYS: concat METHOD

// const array1 = [1, 2, 3]
// const array2 = [4, 5, 6]
// const array3 = [7, 8, 9]

// const combined = array1.concat(array2, array3)

// console.log(combined) // [ 1, 2, 3, 4, 5, 6, 7, 8, 9 ]
// console.log(combined.concat(10, 11)) //[ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ]
 

// ARRAYS: indexOf METHOD

// const marks = ['A+', 'C+', 'B-', 'D', 'B+', 'C+', 'B-' ]

// let bIndex = marks.indexOf('B-')
// let eIndex = marks.indexOf('E')

// // first index is always 0
// console.log(marks[bIndex] + ' is at index: ' + bIndex) // B- is at index 2
// console.log(eIndex) // -1, not found


// ARRAYS: lastIndexOf METHOD

// const marks = ['A+', 'C+', 'B-', 'D', 'B+', 'C+', 'B-' ]

// let bIndexFirst = marks.indexOf('B-')
// let bIndexLast = marks.lastIndexOf('B-')

// console.log(marks[bIndexFirst] + ' is first at: ' + bIndexFirst) // B- is fist located at index 2 position
// console.log(marks[bIndexLast] + ' is last at: ' + bIndexLast) // B- is last at index 6 position


// ARRAYS: join METHOD

// const elements = ['Wind', 'Water', 'Fire', 'Air']

// console.log(elements.join()) // Wind,Water,Fire,Air
// console.log(elements.join(' ')) // Wind Water Fire Air
// console.log(elements.join('; ')) // Wind; Water; Fire; Air


// ARRAYS: forEach METHOD

// const hobbits = ['Bilbo', 'Frodo', 'Samwise', 'Merry', 'Pippin']
// hobbits.forEach((hobbit, index) => { // typically use an arrow function here
//     console.log(`#${index}: ${hobbit}`) // runs once for every item in array
// })

// #0: Bilbo
// #1: Frodo
// #2: Samwise
// #3: Merry
// #4: Pippin


// ARRAYS: find METHOD

// const products = [
//     {id: 1, title: 'Sleeveless Tee', price: 23.95, category: 'Shirts'},
//     {id: 2, title: "Men's Hoodie", price: 54.95, category: 'Winter'},
//     {id: 3, title: "Denim Jeans", price: 49.95, category: 'Pants'}
// ]
// // usually use an arrow function - runs once for each array element until condition is true
// let jeans = products.find(product => product.title == 'Denim Jeans') // returns matching item
// let shirt = products.find(product => product.category == 'Shirts') // returns matching item
// console.log(jeans) // { id: 3, title: 'Denim Jeans', price: 49.95, category: 'Pants' }
// console.log(shirt) // { id: 1, title: 'Sleeveless Tee', price: 23.95, category: 'Shirts' }


// ARRAYS: filter METHOD

// const products = [     
//     {id: 1, title: 'Sleeveless Tee', price: 23.95, category: 'Shirts'},
//     {id: 2, title: "Men's Hoodie", price: 54.95, category: 'Winter'},
//     {id: 3, title: "Denim Jeans", price: 49.95, category: 'Pants'},
//     {id: 4, title: "Ladies Tee", price: 25.95, category: 'Shirts'}
// ]
// // usually use an arrow function - runs once for each element, returns array of matches
// let shirts = products.filter(product => product.category == 'Shirts')
// let under50 = products.filter(product => product.price < 50)
// console.log(shirts) // 2 matching items: 'Sleeveless Tee' and 'Ladies Tee'
// console.log(under50) // 3 matching items: 'Sleeveless Tee", "Denim Jeans", and 'Ladies Tee'


// ARRAYS: map METHOD

// let titles = products.map(product => product.title)
// let h2titles = products.map(product => '<h2>'+product.title+'/h2')
// let raisedPrices = products.map(product => ({...product, price: product.price + 5}) )
// console.log(titles) // [ 'Sleeveless Tee', "Men's Hoodie", 'Denim Jeans', 'Ladies Tee' ]
// console.log(h2titles) //['<h2>Sleeveless Tee</h2>', "<h2>Men's Hoodie</h2>", '<h2>Denim Jeans</h2>', '<h2>Ladies Tee</h2>' ]
// console.log(raisedPrices) 
// [
//   { id: 1, title: 'Sleeveless Tee', price: 28.95, category: 'Shirts' },
//   { id: 2, title: "Men's Hoodie", price: 59.95, category: 'Winter' },
//   { id: 3, title: 'Denim Jeans', price: 54.95, category: 'Pants' },
//   { id: 4, title: 'Ladies Tee', price: 30.95, category: 'Shirts' }
// ] 


// ARRAYS: sort METHOD

// products.sort( (product1, product2) => product1.price - product2.price )
// console.log(products) // original array is modified to new low-high price sorting order: 1, 4, 3, 2
// [
//   { id: 1, title: 'Sleeveless Tee', price: 23.95, category: 'Shirts' },
//   { id: 4, title: 'Ladies Tee', price: 25.95, category: 'Shirts' },
//   { id: 3, title: 'Denim Jeans', price: 49.95, category: 'Pants' },
//   { id: 2, title: "Men's Hoodie", price: 54.95, category: 'Winter' }
// ]

// products.sort( (p1, p2) => p1.title > p2.title ? 1: -1) 
// console.log(products) // original array is modified to new title sorting order: 3, 4, 2, 1
// [
//     { id: 3, title: 'Denim Jeans', price: 49.95, category: 'Pants' },
//     { id: 4, title: 'Ladies Tee', price: 25.95, category: 'Shirts' },
//     { id: 2, title: "Men's Hoodie", price: 54.95, category: 'Winter' },
//     { id: 1, title: 'Sleeveless Tee', price: 23.95, category: 'Shirts' }
// ]

// const numbers = [4, 8, 1, 5, 66, 23, 41] 
// console.log(numbers.sort()) // [1, 23, 4, 41, 5, 66, 8] - string comparison
// console.log(numbers.sort((num1, num2) => num1 - num2)) // [1, 4, 5, 8, 23, 41, 66] - sorts lowest - greatest

// const stringNums = ["1", "81", "41", "102", "35", "1004"]
// console.log(stringNums.sort()) // [ '1', '1004', '102', '35', '41', '81' ]
// console.log(stringNums.sort((a, b) => a - b)) // [ '1', '35', '41', '81', '102', '1004' ]

// const stringNums = ["1", "81", "41", "102", "35", "1004"]
// const sortedNums = [...stringNums].sort()
// console.log(stringNums) // [ '1', '81', '41', '102', '35', '1004' ]
// console.log(sortedNums) // [ '1', '1004', '102', '35', '41', '81' ]


// ARRAYS: reverse METHOD

// const elements = ['Wind', 'Water', 'Fire', 'Air']
// const reversed1 = elements.reverse() // modifies the original
// const reversed2 = [...elements].reverse() // clone first to preserve the original

// console.log(elements) // [ 'Air', 'Fire', 'Water', 'Wind' ]
// console.log(reversed2) // [ 'Wind', 'Water', 'Fire', 'Air' ] // reversed twice


// ARRAYS: reduce METHOD

// const products = [
//     {id: 1, title: 'Sleeveless Tee', price: 23.95, category: 'Shirts', quantity: 2},
//     {id: 2, title: "Men's Hoodie", price: 54.95, category: 'Winter', quantity: 3},
//     {id: 3, title: "Denim Jeans", price: 49.95, category: 'Pants', quantity: 5}
// ] 
// initial (below) should be 0 for reliability in calculating totals

// const totalPrice = products.reduce((currentTotal, currentProduct) => currentTotal + currentProduct.price, 0)
// const totalQty = products.reduce((currentQty, currentProduct) => currentQty + currentProduct.quantity, 0)
// console.log(totalPrice) // 128.85000000000002
// console.log(totalQty) // 10

// get the titles of all products over $25
// const over25Titles = products.filter(prod => prod.price > 25).map(prod => prod.title)
// console.log(over25Titles) // [ "Men's Hoodie", 'Denim Jeans' ]

// const hiloProducts = [...products].sort((p1, p2) => p1.price - p2.price).reverse()
//                     .map(prod => ({id: prod.id, title: prod.title}))
// console.log(hiloProducts)
// [
//   { id: 2, title: "Men's Hoodie" },
//   { id: 3, title: 'Denim Jeans' },
//   { id: 1, title: 'Sleeveless Tee' }
// ]


// ITERABLES

// const animalsArr = ['tiger', 'lion', 'elephant', 'giraffe']
// for (let animal of animalsArr) { console.log(animal); }
// // tiger
// lion
// elephant
// giraffe

// const animalObj = {name: 'tiger', genus: 'panthera', class: 'mammal'}
// for (let property of animalObj) { console.log(property); }
// TypeError: animalObj is not iterable


// STATIC METHOD Array.from

// console.log(Array.from("string")) // [ 's', 't', 'r', 'i', 'n', 'g' ]
// console.log(Array.from(new Set(['cat', 'bat', 'sat', 'cat', 'bat']))) // [ 'cat', 'bat', 'sat' ]
// console.log(Array.from(new Map([[1, 'one'], [2, 'two'], [3, 'three']]))) // [ [ 1, 'one' ], [ 2, 'two' ], [ 3, 'three' ] ]

// function makeArray() {
//     return Array.from(arguments);
// }
// console.log(makeArray(1, 2, 3)); // [ 1, 2, 3 ]


// MAP: METHODS AND PROPERTIES

// const exampleMap = new Map() // create new empty map object
// exampleMap.set(1, 'number one') // 'set' adds a new key-value pair to the map
// exampleMap.set('1', 'string one') // maps support keys of different types
// exampleMap.set(true, 'true') // can have boolean keys
// exampleMap.set({name: 'John'}, {phone: '0412345678'}) // object keys also valid
// exampleMap.set('1', 'second string one') // overwrites previous value if key exists
// console.log(exampleMap.size) // 4 - number of items in the map
// console.log(exampleMap) // Map(4) {1 => 'number one', '1' => 'second string one', true => 'true', { name: 'John' } => { phone: '0412345678' } }

// console.log(exampleMap.get('1')) // second string one - gets value for matching key
// console.log(exampleMap.get (2)) // undefined - key doesn't exist so no value
// console.log(exampleMap.has(1)) // true - key does exist
// console.log(exampleMap.delete(true)) // true - removes item and returns true if successful

// exampleMap.clear() // removes all items from map
// console.log(exampleMap) // Map(0) {}


// MAP ITERATION

// const recipeMap = new Map([
//     ['flour', '1 cup'],
//     ['milk', '1/2 cup'],
//     ['eggs', 2],
//     ['butter', '50g']
// ])
// for (let ingredient of recipeMap.keys()) {
//     console.log(ingredient) // flour, milk, eggs, butter
// }
// for (let quantity of recipeMap.values()) {
//     console.log(quantity) // 1 cup, 1/2 cup, 2, 50g
// }
// for (let item of recipeMap) {
//     console.log(item) // [ 'flour', '1 cup' ], [ 'milk', '1/2 cup' ], [ 'eggs', 2 ], [ 'butter', '50g' ]
// }


// MAP: CONVERSIONS WITH OBJECT
// Object.fromEntries

// const priceMap = new Map([
//     ['banana', 1],
//     ['pineapple', 2],
//     ['watermelon', 5]
// ])

// const priceObject = Object.fromEntries(priceMap)
// console.log(priceObject) // { banana: 1, pineapple: 2, watermelon: 5 }


// Object.entries

// const priceObject = {banana: 1, pineapple: 2, watermelon: 5}

// const priceMap = new Map (Object.entries(priceObject))
// console.log(priceMap) // Map(3) { 'banana' => 1, 'pineapple' => 2, 'watermelon' => 5 }
// console.log(priceMap.get('banana')) // 1


// MAP - CACHING EXAMPLE

// Simulate fetching external data, which can be slow
// function fetchExternalData(id) {
//     console.log(`Fetching data for ID: ${id}`);
//     const data = `Data for ID ${id}`;
//     return data;
// }

// Create a Map for caching
// const cache = new Map();

// function getCachedData(id) {
//     // Check if data is already in the cache
//     if (cache.has(id)) {
//         return cache.get(id); // return cached value, no expensive lookup
//     }

// if not in cache, fetch "external" data and store in cache for next time.
// const data = fetchExternalData(id);
// cache.set(id, data);
// return data;
// }

// Example usage
// console.log('#1: ' + getCachedData(1)); // First time: fetches "external" data and caches result
// console.log('#2: ' + getCachedData(1)); // Other times: can fetch result from cache, much faster


// SET: METHODS - new Set(), set.add(value), set.size

// const names = new Set(['Pedro', 'Oliver', 'Jack', 'Mateo'])
// names.add('Mateo')
// names.add('Oliver')
// names.add('Bruno')
// console.log(names.size) // 5 - only counts the unique names
// console.log(names) // Set(5) { 'Pedro', 'Oliver', 'Jack', 'Mateo', 'Bruno' }

// SET: METHODS CONT. - set.delete(), set.has(value), set.clear()

// console.log(names.delete('Jack')) // true - successful delete
// console.log(names.has('Jack')) // false - Jack no longer exists
// console.log(names.has('Mateo')) // true - Mateo does exist in set
// names.clear()
// console.log(names) // Set(0) {}


// SET: ITERATION OVER Set

// const names = new Set(['Pedro', 'Oliver', 'Jack', 'Mateo'])
// traditional style of for loop - works because Sets are iterable
// for (let name of names) {
//     console.log(name)
// }

// more concise for simple operations, newer syntax using arrow function
// names.forEach(name => console.log(name))


// ARRAY DESTRUCTURING

// "DESTRUCTURES" BY COPYING ITEMS IN VARIABLES:
// const mj = ['Michael', 'Jordan']
// const [mjFirst, mjLast] = mj // destructure (unpack) array on right into separate variables on left

// console.log(mjFirst, mjLast) // Michael Jordan

// IGNORES ELEMENTS USING COMMAS:
// const [jcFirst, jcLast, , , jcPlace] = ['Julius', 'Caesar', 'Consul', 'of the', 'Roman', 'Republic']
// console.log(`${jcFirst} ${jcLast} is a ${jcPlace}`) // Julius Caesar is a Roman

// WORKS WITH ANY ITERABLE ON THE RIGHT-SIDE:
// const [a, b, c] = "abc" // strings are iterable, so can break into characters
// const [one, two, three] = new Set([1, 2, 3]) // Sets are iterable, so can be destructured
// const [ [type, quantity] ] = new Map([ ['apple', 4] ]) // Maps are iterable too
// NOW WE HAVE 8 INDIVIDUAL VARIABLES: a, b, c, one, two, three, type, quantity
// console.log(a, b, c, one, two, three, type, quantity) // a b c 1 2 3 apple 4

// ASSIGNS TO ANYTHING AT THE LEFT-SIDE
// const monarch = {}; // EMPTY OBJECT
// [monarch.title, monarch.name] = "King Charles".split(' '); // STORE ARRAY PIECES IN OBJECT PROPERTIES
// console.log(monarch); // { title: 'King', name: 'Charles' }

// WHEN LOOPING WITH .entries() WE CAN DESTRUCTURE INTO key AND value VARIABLES
// const teeProduct = {id: 1, title: 'Sleeveless Tee', price: 23.95, category: 'Shirts'}
// key AND value ARE JUST VARIABLE NAMES, COULD BE ANYTHING
// for (let [key, value] of Object.entries(teeProduct)) {
    // console.log(`${key}: ${value}`) // id: 1, title: Sleeveless Tee, price: 23.95, category: Shirts
// }

// SWAP VARIABLES TRICK
// let student = 'James', teacher = 'Andrew';
// [student, teacher] = [teacher, student]

// console.log(student) // Andrew
// console.log(teacher) // James

// DESTRUCTURING: THE ARRAY REST ...
//  const [jcFirst, jcLast, ...jcTitles] = ['Julius', 'Caesar', 'Consul', 'of the', 'Roman', 'Republic']
//  console.log(jcTitles) // [ 'Consul', 'of the', 'Roman', 'Republic' ]
//  console.log(jcTitles.length) // 4

// DESTRUCTURING: DEFAULT VALUES
// const [jcFirst = 'Unknown', jcLast, jcTitle = 'Consul'] = ['Julius', 'Caesar']
// console.log(jcFirst) // Julius
// console.log(jcTitle) // Consul


// DESTRUCTURING: OBJECT
// PROPERTY NAMES (keys) ON RIGHT ARE MATCHED TO VARIABLE NAMES ON LEFT
// let {width, height, title} = {title: 'My Component', height: 100, width: 200}
// console.log(width, height, title) // 200 100 My Component

// ASSIGN DEFAULT VALUE TO MISSING PROPERTY (same as arrays)
// let {width = 200, height = 100, title} = {title: 'My Component'}
// console.log(width, height, title) // 200 100 Myu Component

// DESTRUCTURING: OBJECT - SMART FUNCTION PARAMETERS

// function displayComponent({height = 200, width = 100, title}) {
//     console.log(`<div style="width:${width}px; height:${height}px"><h2>${title}</h2></div>`)
// }

// displayComponent({width:200, title:'My Awesome Component'})
// displayComponent({title: 'My Amazing Component'})
// displayComponent({width:300, height:300, title:'My Average Component'})

// DESTRUCTURING: OBJECT - the rest pattern ...
// let options = {width: 200, height: 100, title: 'My Component'}
// let {title, ...rest} = options
// console.log(title) // My Component
// console.log(rest) // { width: 200, height: 100 }


// DATE AND TIME: CREATION
// WITHOUT ARGUMENTS, THE DATE CONSTRUCTOR CREATES A NEW DATE FOR THE CURRENT TIME:
// const now = new Date()
// console.log(now) // 2024-11-05T02:30:35.099Z
// console.log(+now) // 1730773835099 - number of milliseconds since epoch

// WITH A SINGLE ARGUMENT new Date(milliseconds), IT CREATES A Date OBJECT WITH THE TIME EQUAL TO THE NUMBER OF MILLISECONDS AFTER THE EPOCH:
// const epoch = new Date(0) // 0 seconds since Jan 1 1970
// const jan2_1970 = new Date(100 * 60 * 60 * 24) // a full dat in milliseconds after Jan 1
// console.log(epoch) // 1970-01-01T00:00:00.000Z
// console.log(jan2_1970) // 1970-01-01T02:24:00.000Z

// DATE AND TIME: CREATION - new Date(datestring)

// const christmas = new Date('2024-12-25') // assumes UTC timezone if time not included
// console.log(christmas) // 2024-12-25T00:00:00.000Z - Z indicates UTC timezone, GMT+0

// SPECIFYING A TIMEZONE

// const nyeLocal = new Date('2023-12-31 23:59:59') // assumes local timezone if time is included
// const nyeUTC = new Date('2023-12-31 23:59:59+00:00') // specific timezone specified (UTC)
// console.log(nyeLocal) // 2024-01-01T05:59:59.000Z - stored internally as UTC so now hours are different
// console.log(nyeUTC) // 2023-12-31T23:59:59.000Z - UTC before midnight, no longer local timezone


// DATE AND TIME: CREATION - new Date (year, month, day, hours, minutes, seconds, ms)

// const boxingDay = new Date(2024, 11, 26) // month 11 is December, assumes local timezone
// console.log(boxingDay) // 2024-12-26T06:00:00.000Z - so hours are different in UTC

// const remembranceDay = new Date(2023, 10, 11, 11, 11) // month 10 is November, assumes local timezone
// console.log(remembranceDay) // 2023-11-11T17:11:00.000Z - so hours are different in UTC


// DATE AND TIME: DISPLAYING DATES

// const christmas = new Date('2024-12-25') // assumes UTC timezone if time not included
// console.log(christmas.toLocaleDateString()) // 12/24/2024 - mm/dd/yy
// console.log(christmas.toLocaleString('ko-KR', {timezone: 'Asia/Seoul'})) // 2024. 12. 24 오후 6:00:00 - both timezone and language are converted to Korean

// const nyeLocal = new Date('2024-12-31 23:59:59') // assumes local timezone if time is included
// console.log(nyeLocal.toLocaleString()) // 12/31/2024, 11:59:59 PM - default to local timezone


// JSON (JAVASCRIPT OBJECT NOTATION)

// JSON.stringify

// const student = {
//     name: 'Sita',
//     age: 28,
//     courses: ['HTML', 'CSS', 'JS'],
//     occupation: null
// }
// console.log(JSON.stringify(student)) // {"name":"Sita","age":28,"courses":["HTML","CSS","JS"],"occupation":null}

// const book = {
//     title: 'Gone With The Wind',
//     printTitle() { // ignored
//         console.log(this.title)
//     },
//     releaseDate: undefined // ignored
// }
// console.log(JSON.stringify(book)) //{"title":"Gone With The Wind"}

// const room = {
//     number: 23
// }
// const meetup = {
//     title: "Strategy Conference",
//     participants: ['Chris', 'Jen'],
// }

// meetup.place = room; // meetup references room
// room.occupiedBy = meetup; // room references meetup

// // JSON.stringify(meetup); // TypeError: converting circular structure to JSON


// JSON: EXCLUDING AND TRANSFORMING - replacer

// // console.log(JSON.stringify(meetup, ['title', 'participants']) ); // just stringify the properties in the array
//     // {"title":"Strategy Conference","participants":["Chris","Jen"]}

// console.log(JSON.stringify(meetup, function(key, value) {
//     if (key != '' && value == meetup) return undefined // skip references to current object
//     else if (typeof value == 'function') return value.toString() // stringify functions
//     return value // otherwise return original value unchanged
// }, 2) );
    // {
//   "title": "Strategy Conference",
//   "participants": [
//     "Chris",
//     "Jen"
//   ],
//   "place": {
//     "number": 23
//   }
// }


// JSON.stringify: CUSTOM "toJSON"

// const room = {
//     number: 23, toJSON() {return this.number}
// }
// const meetup = {
//     title: "Strategy Conference", participants: ['Chris', 'Jen']
// }
// meetup.place = room; // meetup references room
// room.occupiedBy = meetup; // room now references meetup

// console.log( JSON.stringify(meetup) ); // no more circular references as room stringifies to 23
    // {"title":"Strategy Conference","participants":["Chris","Jen"],"place":23}


// JSON: JSON.parse METHOD

// const meetup = {
//     title: "Strategy Conference", participants: ['Chris', 'Jen'], date: '2024-11-06'
// }
// const meetupString = JSON.stringify(meetup) // converts object to string
// const meetupParsed = JSON.parse(meetupString, (key, value) => { // convert string to object
//     if (!isNaN(Date.parse(value)) ) return new Date(value) // if valid date, creates Date object
//     return value;
// })
// console.log(meetupParsed) // { title: 'Strategy Conference', participants: [ 'Chris', 'Jen' ], date: 2024-11-06T00:00:00.000Z }


// JSON: JSON.parse FOR DEEP CLONING

// const box1 = {
//     size: 'large',
//     dimensions: {width: 50, length: 70, height: 30, units: 'cm'},
//     items: ['glasses', 'plates', 'cutlery']
// }
// const boxString = JSON.stringify(box1) // converts object to string
// const box2 = JSON.parse(boxString) // converts string back to new object

// // How could we check to make sure both boxes are the same but independent?

// console.log("originial box1 object:", box1)
// console.log("JSON string of box1", boxString)
// console.log("Parsed box 2 object:", box2)

//  // originial box1 object: {
//   size: 'large',
//   dimensions: { width: 50, length: 70, height: 30, units: 'cm' },
//   items: [ 'glasses', 'plates', 'cutlery' ]
// }
// JSON string of box1 {"size":"large","dimensions":{"width":50,"length":70,"height":30,"units":"cm"},"items":["glasses","plates","cutlery"]}
// Parsed box 2 object: {
//   size: 'large',
//   dimensions: { width: 50, length: 70, height: 30, units: 'cm' },
//   items: [ 'glasses', 'plates', 'cutlery' ]
// }


// REVISIONS
// 1. What are some alternatives to decimal numbers and why might they be useful?
    // Some alternatives to decimal numbers are  


// 2. What might cause a calculated number to lose precision in JS?
    // When the number of digits reaches 16 or more.

// 3. What are some of the built-in string manipulation functions in JS?
    // length, indexOf(), substring(), toUpperCase(), startsWith(), endsWith(), split(), slice(), replace(), replaceAll(), trim().

// 4. What is an array?
    // Arrays are a data structure to store an ordered collection. Often used to store and manipuilate lists of related items.

// 5. What are some of the built-in array manipulation functions in JS?
    // .pop(), .push(), .shift(), and .unshift()

// 6. What is an iterable data type, and what are some examples?
    // An iterable data type is a special object, like an array, which can step through each one in a series of multiple values in a for..of loop.
    // Examples are string, array, map and set.

// 7. What are some ways we can iterate in JS?
    // forEach, for loop for...of loop, Object.keys(), Object.values(), Object.entries() 

// 8. What are some differences between a Map and a Set?
    // A Map is a collection of key-value data, allowing duplicates, and is better for large amounts of data and adding and deleting data frequently
    // A Set is a collection of unique values without keys, no guarantee of order, no duplicates.

// 9. What does destructuring mean, and which data types can use it?
    // Destructuring is a special syntax used to copy items into variables. 
    // We can use it with arrays and objects.

// 10. How are dates represented internally in JS?
    //  In JS, dates are represented internally as UTC time - converted to a number which is the total milliseconds since the epoch time of Jan 1 1970 UTC+0.




