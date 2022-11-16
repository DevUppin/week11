// function greet(a) {
//     console.log(`Hello ${user}`)
//  }

//  greet(Dev)
// const greet = function (user) {
//     console.log("Hello" + user)
//  }

//  greet("Dev")

// const greet = function (user, time = "day") {
//     console.log(`Good ${time} ${user}`);

//  }

//  greet("dev", "night")

//  let radius = prompt("Enter a value: ")
//  const areaCircle = function (radius) {
//     let result = Math.PI * radius * radius;
//     return result;
// }
// let r = prompt("Give a radius");
// let calculatedArea = areaCircle(r).toFixed(2);

// }document.getElementById(#radius)
let shoppingItems = ["cheese", "bread", "green pepper"];
const shoppingListElement = document.querySelector(".shopping")
function populatList(arr) {
    for (let item of arr) {
        let listItem = document.createElement("li")
        listItem.textContent = item;
        shoppingListElement.appendChild(listItem)
    } 
}

function squareToCircle() {
    shoppingListElement.classList.remove("circleList");
    const allListItems = shoppingListElement.classList.add("squareList")

}
function makeGreen() {
    const allListItems = document.querySelectorAll(".shopping li");
    for (let i = 0; i < allListItems.length; i++) {
        if (allListItems.textContent.include("green")) {
            allListItems[1].classList.add("green");
        
        }
    }

}

populatList(shoppingItems);
squareToCircle()
