let userscore = 0;
let computerscore = 0;

const choices = document.querySelectorAll(".choice");

const message = document.querySelector("#message");

const Youscore = document.querySelector("#user-score");
const Computerscore = document.querySelector("#computer-score");
const generatecomputerchoice = () => {
    const options = ["rock","paper","scissors"];
    const randomindex=Math.floor(Math.random()*3);
    return options[randomindex];
};

const Tiegame=() => {
    console.log(" It is a Tie! ");
    message.innerText = " It is a Tie! , Let's play again :) ";
    message.style.backgroundColor = "blue";
};

const showwinner= (userwin,userchoice,computerchoice) => {
    if(userwin){
        userscore++;
        Youscore.innerText = userscore;
        console.log("You Win 🎉 ");
        message.innerText = ` You Win 🎉 ${userchoice} beats ${computerchoice} `;
        message.style.backgroundColor = "green";
    }
    else{
        computerscore++;
        Computerscore.innerText = computerscore;
        console.log(" You Lose :( ");
        message.innerText = ` You Lose :( ${computerchoice} beats ${userchoice} `;
        message.style.backgroundColor = "red";
    }
};

const playgame = (userchoice) =>{
    console.log("user choice = ", userchoice);
    const computerchoice = generatecomputerchoice();
    console.log("computer choice = ",computerchoice);
    if(userchoice === computerchoice){
        Tiegame();
    }
    else{
        let userwin = true;
        if(userchoice === "rock"){
            userwin = computerchoice === "paper" ? false : true;
        }
        else if(userchoice === "scissors"){
            userwin = computerchoice === "rock" ? false : true;
        }
        else{
            userwin = computerchoice === "scissors" ? false : true;
        }
        showwinner(userwin,userchoice,computerchoice);
    }
};

choices.forEach((choice) => {
    choice.addEventListener("click",() => {
    const userchoice= choice.getAttribute("id");  
    playgame(userchoice);
    });
});