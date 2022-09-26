let gameList=["rock","paper","scissor"];
let userScore=document.getElementById("userScoreVal");
let botScore=document.getElementById("compScoreVal");
let userChoise=document.getElementById("result-user-stat");
let botChoise=document.getElementById("result-comp-stat");
let finalResult=document.getElementById("result-final-stat");
let userScoreCounter=0;
let botScoreCounter=0;

let UserChoise=document.querySelectorAll(".choices .choice");

UserChoise.forEach(function (choise){
    choise.addEventListener("click",function(element){
        let choiseImg=element.currentTarget.classList;
        if(choiseImg.contains("rock"))
        gameLogic("rock");
        if(choiseImg.contains("paper"))
        gameLogic("paper");
        if(choiseImg.contains("scissor"))
        gameLogic("scissor");
    });
});

function gameLogic(uChoise){
    let compChoise=gameList[Math.floor(Math.random()*3)];
    if(uChoise==compChoise)
    {
        userChoise.innerText="User: "+uChoise;
        botChoise.innerText="Computer: "+compChoise;
        finalResult.innerText="Winner: Tie";
    }
    if(uChoise=="paper" && compChoise=="scissor")
    {
        botScoreCounter++;
        userChoise.innerText="User: "+uChoise;
        botChoise.innerText="Computer: "+compChoise;
        finalResult.innerText="Winner: You Loss";
    }
    if(uChoise=="scissor" && compChoise=="paper")
    {
        userScoreCounter++;
        userChoise.innerText="User: "+uChoise;
        botChoise.innerText="Computer: "+compChoise;
        finalResult.innerText="Winner: You Won";
    }
    if(compChoise=="rock" && uChoise=="paper" || compChoise=="rock" && uChoise=="scissor")
    {
        botScoreCounter++;
        userChoise.innerText="User: "+uChoise;
        botChoise.innerText="Computer: "+compChoise;
        finalResult.innerText="Winner: You Loss";

    }
    if(uChoise=="rock" && compChoise=="scissor" || uChoise=="rock" && compChoise=="paper" )
    {
        userScoreCounter++;
        userChoise.innerText="User: "+uChoise;
        botChoise.innerText="Computer: "+compChoise;
        finalResult.innerText="Winner: You Won";
    }
    userScore.innerText=userScoreCounter;
    botScore.innerText=botScoreCounter;
}