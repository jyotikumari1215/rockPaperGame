let userScore=0;
let compScore=0;
const choices=document.querySelectorAll(".choice");
const result=document.querySelector("#show_result");
const userNum=document.querySelector(".user");
const compNum=document.querySelector(".comp");
const genCompChoice=()=>{
    const options=["rock","paper","scissor"];
    const randmIdx=Math.floor(Math.random()*3);
    return options[randmIdx];
}
const drawGame=()=>{
    console.log("Game was Draw");
    result.innerText="Game was Draw";
    result.style.backgroundColor="yellow";
    result.style.color='black';
}
const showWinner=(userwin)=>{
    if(userwin){
        userScore++;
        console.log("You Win!");
        result.innerText="You Win!";
        userNum.innerText=userScore;
        result.style.backgroundColor="green";
    }
    else {
        compScore++;
        console.log("You lose!");
        result.innerText="You lose!";
        compNum.innerText=compScore;
        result.style.backgroundColor="red";
    }
}
const playGame=(userChoice)=>{
    console.log("user Choise is ",userChoice);
    // generate computer choice
    const compChoice=genCompChoice();
    console.log("computer Choice is",compChoice);
    if(userChoice===compChoice){ //draw game
        drawGame();
    }
    else{
        let userwin=true;
        if(userChoice==="rock"){
            userwin=compChoice==="paper"?false:true;
        }
        else if(userChoice==="paper"){
            userwin=compChoice==="scissor"?false:true;
        }
        else {
            userwin=compChoice==="rock"?false:true;
        }
        showWinner(userwin);
    }
}
choices.forEach((choice)=>{
    console.log(choice);
    choice.addEventListener("click",()=>{
        const userChoice=choice.getAttribute("id");
        console.log("choice is clicked",userChoice);
        playGame(userChoice);
    });
});