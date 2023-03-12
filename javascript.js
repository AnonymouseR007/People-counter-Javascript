// document.getElementById("count-el").innerText = 5

// let firstBatch = 5
// let secondBatch = 7
// let count = firstBatch + secondBatch;

// console.log(count)

// let myAge = 29
// let humanDogRatio = 7
// let myDogAge = myAge * humanDogRatio
// console.log (myDogAge)

// let bonusPoints = 50
// console.log(bonusPoints)
// bonusPoints = bonusPoints + 50
// console.log(bonusPoints)
// bonusPoints = bonusPoints - 75
// console.log(bonusPoints)
// bonusPoints = bonusPoints + 45

// console.log(bonusPoints)

// function increment (){
//     console.log("Button was clicked!")
// }

// function countdown () {
//     console.log(5)
//     console.log(4)
//     console.log(3)
//     console.log(2)
//     console.log(1)
// }
// countdown()

// countdown()

// function invoke(){
//     console.log(42)
// }
// invoke()

// let lap1 = 34
// let lap2 = 33
// let lap3 = 36


// function lapTotalTime(){
//    let totalTime = lap1 + lap2 + lap3
//    console.log(totalTime)
// }
// lapTotalTime()

// let username = "Per"
// let message = "You have three new notifications"
// let messageToUser = message + ", " + username + "!"
// console.log(messageToUser)


// let name = "Matej";
// let greeting = "Hi, my name is ";
// let myGreeting = greeting + name;
// console.log(myGreeting)

// let points = 4
// let bonusPoints = "10"

// let totalPoints = points + bonusPoints

// console.log(totalPoints);
let welcomeEl = document.getElementById("welcome-el");
let name = prompt("Prosím, zadaj svoje meno:");
let greeting = "Vitaj v aplikácii, ";
welcomeEl.innerText = greeting + name;
welcomeEl.innerText += "👋";

let countEl =  document.getElementById("count-el")
let count = 0
function increment(){
    count += 1
    countEl.innerText = count
}


let saveEl = document.getElementById("save-el");
function save(){
    let countStr = " - " + count;
    saveEl.innerText += countStr 
}