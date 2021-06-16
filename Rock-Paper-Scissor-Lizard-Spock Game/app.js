let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const lizard_div = document.getElementById("l");
const scissors_div = document.getElementById("sc");
const spock_div = document.getElementById("s");

function getComputerChoice() {
    const choices = ['r','p','l','sc','s'];
    const randomNumber = Math.floor(Math.random() * 5);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if(letter ==="r") return "Rock";
    if(letter ==="p") return "Paper";
    if(letter ==="l") return "Lizard";
    if(letter ==="sc") return "Scissors";
    return "Spock";
}
function win(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} beats ${convertToWord(computerChoice)}${smallCompWord}. You win!!`;
    userChoice_div.classList.add('green-glow');
    setTimeout(() => userChoice_div.classList.remove('green-glow'), 300);  
}
    
function lose(userChoice, computerChoice) {   
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} loses to ${convertToWord(computerChoice)}${smallCompWord}. You lost..`;
    userChoice_div.classList.add('red-glow');
    setTimeout(() => userChoice_div.classList.remove('red-glow'), 300);
}

function draw(userChoice, computerChoice) {
    const smallUserWord = "user".fontsize(3).sub();
    const smallCompWord = "comp".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);
    result_p.innerHTML = `${convertToWord(userChoice)}${smallUserWord} equals ${convertToWord(computerChoice)}${smallCompWord}. Its a draw`;
    userChoice_div.classList.add('gray-glow');
    setTimeout(() => userChoice_div.classList.remove('gray-glow'), 300);
}

function game(userChoice){
    const computerChoice  = getComputerChoice();
     switch(userChoice + computerChoice) {
         case "ps":
         case "pr":
         case "lp":
         case "ls":
         case "rl":
         case "rs":
         case "sr":
         case "ssc":
         case "scp":
         case "scl":
             win(userChoice,computerChoice);
             break;
         case "sp":
         case "rp":
         case "pl":
         case "sl":
         case "lr":
         case "sr":
         case "rs":
         case "scs":
         case "psc":
         case "lsc":   
              lose(userChoice,computerChoice);
              break;
         case "pp":
         case "rr":
         case "ll":
         case "ss":
         case "scsc":
               draw(userChoice,computerChoice);
               break;             
     }
}

function main(){
rock_div.addEventListener('click', () => game("r"));
paper_div.addEventListener('click', () => game("p"));
lizard_div.addEventListener('click', () => game("l"));
scissors_div.addEventListener('click', () => game("sc"));
spock_div.addEventListener('click', () => game("s"));
}
main();