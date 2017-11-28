// start quokka: ctrl+ k, q
//ARRAY METHODS:

//array.map(callback)

let arr = [10,11,12,13,14];

let timesTwo = arr.map(function(element, index, array){
    return element*2
})

timesTwo

let dividedByTwo = arr.map(function(element,index,array){
    return element/2
})

dividedByTwo

let evens = arr.map(function(element, index, array){
    if(element%2 === 0){
        return element
    }
})
evens
//array.filter(callback)

let realEvens = arr.filter(function(element, index, array){
    if(element%2 === 0){
        return element
    }
})
realEvens

let strings = ['1', '2', '3']

//CHAINING:
let sum = strings.map(function(e){
    return Number(e)
}).reduce(function(t, e){
    return t + e
})

sum

//array.reduce(callback)
let arr2 = [2,4,6,8]

let sum2 = arr2.reduce(function(total, element, index, array){
    return total+element
})
sum2



//OBJECTS   

//delete operator

let obj = {
    one: 1,
    two: 2,
    three: 3
}
obj.three = 30
delete obj.three

obj

let obj2 = {
    one: 1,
    two: {
        three: 3,
        four: 4
    }
}

delete obj2.two.four
obj2


//Object.assign(target, ...sources)

let first = {
    one: 1
}

first

let second = first

second

second.two = 2


let copy = Object.assign({happy: 'always'}, first)

console.log(first === second)
console.log(first === copy)

copy
first
second

let third = {
    one: 30
}

let copy2 = Object.assign({one: 100}, first, third)

copy2
//Object.assign overides left to right

let objWithArray = {
    one: 1,
    arr: [1,2,3]
}

let newObjWithArray = Object.assign({}, objWithArray)
newObjWithArray
console.log(newObjWithArray === objWithArray)
console.log(newObjWithArray.arr === objWithArray.arr)



//for in loop for(var in obj) iterates through object
let forLoopObj = {
    name: 'sally jean',
    age: 18,
    salary: '1000000'
}
for (let key in forLoopObj) {
    console.log(key)
    console.log(forLoopObj)
    console.log(forLoopObj[key])    

    forLoopObj[key] = null
}

forLoopObj


//object destructuring

let pencils = {
    red: 5,
    blue: 10,
    black: 1
}

//let red = pencils.red
//red
//let blue = pencils.blue
//blue
//let black = pencils.black

let {red, blue, black} = pencils

red
blue
black

//ARROW FUNCTIONS
let bob = 4;
let bil = 5;
function traditions(num) {
    return num
}
console.log(traditions(bob))

let modern = (num) => {
    return num
}

console.log(modern(bob))

let oneLine = num => num

console.log(oneLine(bob))

let multiLine = (num1, num2) => {
    let total = num1+num2;
    return total
}

console.log(multiLine(bob,bil))

// classes are blueprints to create an object, always starts with capital letter

// class body

class Parameters {
    constructor(num){
        this.number = num
    }
}

let newClassObj = new Parameters(5)
 {number: 5}

class User {
    constructor(age,name,email){
        this.age = age;
        this.name = name;
        this.email = email;
    }
    
}
 let user1 = new User(21, 'henry', 'afdkfl@dfsjl.com')
 user1.hometown = 'provo'
 user1
