import {data} from "./data.js";

const num = 3;

var correctCount = 0;

var winner;

window.addEventListener("load", loadStreamer);



function loadStreamer(){
    document.getElementById("againBtn").style.display = "none";
    document.getElementById("points").innerHTML = "Score: " + correctCount;

    let s1 = Math.floor(Math.random() * num);
    let s2 = Math.floor(Math.random() * num);
    while(s2 == s1){
        s2 = Math.floor(Math.random() * num);
    }
    if(s1 < s2){
        winner = 1;
    }
    else{
        winner = 2;
    }


    document.getElementById("pic1").src = data[s1][1];
    document.getElementById("s1").innerHTML = data[s1][0];

    document.getElementById("pic2").src = data[s2][1];
    document.getElementById("s2").innerHTML = data[s2][0];

}

const pic1 = document.getElementById("pic1")
const pic2 = document.getElementById("pic2")
pic1.addEventListener("click", pic1Pick);
pic2.addEventListener("click", pic2Pick);

function pic1Pick(){
    if(winner == 1){
        won()
    }
    else{
        lost()
    }

}

function pic2Pick(){
    if(winner == 2){
        won()
    }
    else{
        lost()
    }

;}

function won(){
    correctCount++;
    loadStreamer();
}

function lost(){
    document.getElementById("container").style.display = "none";
    document.getElementById("points").innerHTML = "Final Score: " + correctCount;
    document.getElementById("againBtn").style.display = "block";
}


const againBtn = document.getElementById("againBtn");
againBtn.addEventListener("click", playAgain);

function playAgain(){
    document.getElementById("container").style.display = "block";
    correctCount = 0;
    loadStreamer();
}