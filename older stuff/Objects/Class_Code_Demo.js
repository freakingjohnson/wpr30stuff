// =================
// ARRAY METHODS
// =================

// WINDOWS ---- ctrl + k,  q1
// MAC ---- fn + f1 
// start on current file

// array.map(callback)

let arr = [10, 11, 12, 13, 14]

let timesTwo = arr.map(function(element, index, array) {
  return element * 2
})

timesTwo

let dividedByTwo = arr.map(function(element, index, array) {
  return element / 2
})

dividedByTwo


let evens = arr.map(function(element, index, array) {
  if(element % 2 === 0) {
    return element
  }
})

evens



// array.filter(callback)

let realEvens = arr.filter(function(element, index, array) {
  if(element % 2 === 0) {
    return element
  }
})

realEvens



// array.reduce(callback)

let arr2 = [2, 4, 6, 8]

// let sum2 = arr2.reduce(function(total, element, index, array) {
//   return total + element
// })

let sum2 = arr2.reduce(function(t, e) {
  return t + e
})

sum2


let strings = ['1', '2', '3']

// an example of chaining methods

let sum = strings.map(function(e) {
  return +e
}).reduce(function(t, e) {
  return t + e
})

sum




// =================
// OBJECTS 
// =================

// delete operator 

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
    four: [1, 2, 3, 4]
  }
}

delete obj2.two.four

obj2



// Object.assign(target, ...sources)



let first = {
  one: 1
}

let second = first

second.two = 2

let copy = Object.assign({happy: 'always'}, first)

console.log(first === second)

console.log(copy === first)

copy


let third = {
  one: 30
}

let copy2 = Object.assign({one: 100}, first, third)

first 
copy2







let objWithArray = {
  one: 1,
  arr: [1, 2, 3]
}

let newObjWithArray = Object.assign({}, objWithArray)

newObjWithArray
console.log(newObjWithArray === objWithArray)
console.log(newObjWithArray.arr === objWithArray.arr)


let objWithObj = {
  one: 1,
  obj: {
    two: 2
  }
}

let newObjWithObj = Object.assign({}, objWithObj, {obj: {two: objWithObj.two}})

newObjWithObj.obj.two = 4
newObjWithObj
objWithObj
console.log(newObjWithObj.obj === objWithObj.obj)


// for in loops --- for(variable in obj)

let forLoopObj = {
  name: 'Sally Jean',
  age: 18,
  salary: '1000000'
}

for(let key in forLoopObj) {
  key
  forLoopObj
  console.log(forLoopObj[key])

  forLoopObj[key] = null

}

forLoopObj

// object destructuring


let pencils = {
  red: 5,
  blue: 10,
  black: 1
}

// let red = pencils.red
// red
// let blue = pencils.blue
// blue
// let black = pencils.black
// black

let { black, red, blue } = pencils

red
blue
black

console.log(red + black)

// =================
// ARROW FUNCTIONS
// =================


function traditional(num) {
  return num
}

let modern = num => {
  return num
}

let oneLine = num => num / 2

let multiLine = (num1, num2) => {
  let total = num1 + num2;
  return total
}

let noParameters = () => {
  return 'cool!'
}

let oneLineNoParameters = () => 'cool!'

let arrowArr = [1, 2, 3]

let newArrowArr = arrowArr.map(e => e * 2)

// let newArrowArr = arrowArr.map(function(e) {
//   return e * 2
// })

oneLineNoParameters()


// =================
// CLASSES
// =================


class Parameters {
  constructor(num) {
    this.number = num
  }
}

let newClassObj = new Parameters(5)
newClassObj
let newClassObj2 = new Parameters(8)
newClassObj2


class User {
  constructor(age, name, points) {
    this.age = age;
    this.name = name;
    this.points = points;
  }

  upPoints() {
    this.points += 5
  }

}

let user1 = new User('21', 'Henry', 12)
user1.homeTown = 'Provo'
user1 
user1.upPoints()
user1 