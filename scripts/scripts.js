// function greet(a) {
//     console.log(`Hello ${user}`)
//  }

//  greet(Dev)
// const greet = function (user) {
//     console.log("Hello" + user)
//  }

//  greet("Dev")

const greet = function (user, time = "day") {
    console.log(`Good ${time} ${user}`);

 }

 greet("dev", "night")

 let radius = prompt("Enter a value: ")
 const areaCircle = function (radius) {
    if (radius > 0) {
        alert(`${radius} * ${radius} * ${Math.PI} `)
    }
 }
 areaCircle(radius)
