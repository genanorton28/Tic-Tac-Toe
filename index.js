let box0 = document.getElementById("box0")
let box1 = document.getElementById("box1")
let box2 = document.getElementById("box2")
let box3 = document.getElementById("box3")
let box4 = document.getElementById("box4")
let box5 = document.getElementById("box5")
let box6 = document.getElementById("box6")
let box7 = document.getElementById("box7")
let box8 = document.getElementById("box8")

box0.addEventListener('click', clickedboxes)
box1.addEventListener('click', clickedboxes)
box2.addEventListener('click', clickedboxes)
box3.addEventListener('click', clickedboxes)
box4.addEventListener('click', clickedboxes)
box5.addEventListener('click', clickedboxes)
box6.addEventListener('click', clickedboxes)
box7.addEventListener('click', clickedboxes)
box8.addEventListener('click', clickedboxes)

let currentPlayer = "X"
let gameActivity = true; 
let announcement = ""
let message = document.getElementById("message")

function clickedboxes(){
  console.log(this)
  this.value = currentPlayer
  if (currentPlayer === 'X'){
    currentPlayer = 'O'
  }
  else {
    currentPlayer = 'X'
  }
   waysToWin() 
}

function waysToWin(){
    if (box0.value == box1.value && box1.value == box2.value && box2.value !=''){
        console.log("Winner")
        announcement = box0.value + " wins "
        message.innerText = announcement
    }
    else if (box3.value == box4.value && box4.value == box5.value && box5.value !=''){
        console.log("Winner")
        announcement = box3.value + " wins "
        message.innerText = announcement
    }
    else if(box6.value == box7.value && box7.value == box8.value && box8.value !=''){
        console.log("Winner")
        announcement = box6.value + " wins "
        message.innerText = announcement
    }
    else if(box2.value == box5.value && box5.value == box8.value && box8.value !=''){
        console.log("Winner")
        announcement = box2.value + " wins "
        message.innerText = announcement
    }
    else if(box1.value == box4.value && box4.value == box7.value && box7.value !=''){
        console.log("Winner")
        announcement = box1.value + " wins "
        message.innerText = announcement
    }
    else if(box2.value == box5.value && box5.value == box8.value && box8.value !=''){
        console.log("Winner")
        announcement = box2.value + " wins "
        message.innerText = announcement
    }
    else if(box0.value == box3.value && box3.value == box6.value && box6.value !=''){
        console.log("Winner")
        announcement = box0.value + " wins "
        message.innerText = announcement
    }
    else if(box2.value == box4.value && box4.value == box6.value && box6.value !=''){
        console.log("Winner")
        announcement = box2.value + " wins "
        message.innerText = announcement
    }
    else if(box0.value == box4.value && box4.value == box8.value && box8.value !=''){
        console.log("Winner")
        announcement = box0.value + " wins "
        message.innerText = announcement
    }

    if (waysToWin == 9){
        gameResult('Tie');
        return;
    }
}

function gameResult(announcement){
    if('X' == waysToWin){
        waysToWin.innerHTML = "X wins";
    }
    else if ('O' == waysToWin){
        waysToWin.innerHTML = "O wins";
    }
    else{
        waysToWin.innerHTML = 'Tie';
    }
    }
