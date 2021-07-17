function ageInDays(){
    let birthYear = prompt("What year were you born.. Good friend?")
    let ageInDays = (2021 - birthYear) * 365
    let h1 = document.createElement("h1")
    h1.setAttribute("id", "ageInDays")
    let textAnswer = document.createTextNode("You are "+ ageInDays + " days old")
    h1.append(textAnswer)
    let flexBoxResult = document.getElementById("flex-box-result")
    flexBoxResult.append(h1)
}

function reset(){
   document.getElementById("ageInDays").remove()

}
 
//Challenge 2 : Cat Generator

function generateCat(){
    let myId = document.getElementById('flex-cat-gen')
    let img =  document.createElement('img')
    myId.append(img)
    img.src = 'http://thecatapi.com/api/images/get?format=src&type=gif'  
}

//Challenge 3 : RPS 

function rpsGame(yourChoice){
let humanChoice = yourChoice.id;
console.log(humanChoice);
let botChoice = rps(math);
console.log(botChoice)
let results = decideWinner(humanChoice, botChoice)
console.log(results);
}


function mathFloor(){
    return Math.floor(Math.random()*3);
} 
let math = mathFloor();

function rps(be) {
    return ["rock", "paper", "scissor"][be]
}

function decideWinner(humanSelected, computerSelected){

    let rpsDataBase = {
        "rock": {"rock": 0.5, "paper": 0, "scissor":1},
        "paper": {"rock": 1, "paper": 0.5, "scissor":0},
        "scissor": {"rock": 0, "paper": 1, "scissor": 0.5}
    }
let humanScore = rpsDataBase[humanSelected][computerSelected];
let computerScore = rpsDataBase[computerSelected][humanSelected];

return [humanScore, computerScore]

}


// let object = {
//     "name" : "Venkatesh Prasad"
// }

// console.log(object["name"]);