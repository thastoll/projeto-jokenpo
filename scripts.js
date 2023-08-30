// função para a escolha humana
const playHuman = (humanChoice) => {
    
    playTheGame(humanChoice, playMachine());
};

// função para a escolha maquinha
const playMachine = () => {
    const choices = ["rock", "paper", "scissors"];

    const randomNumber = Math.floor(Math.random() * 3);

    return choices[randomNumber]
}

// variaveis necessarias
const result = document.querySelector(".result");
const humanScore = document.querySelector("#humanScore");
const machineScore = document.querySelector("#machineScore");

let humanScoreNumber = 0;
let machineScoreNumber = 0;

// função para suposições dos jogos
const playTheGame = (human, machine) => {

    if(human === machine){
        result.innerHTML = "Deu empate!";
    } else if( 
        (human === "paper" && machine === "rock") || 
        (human === "rock" && machine === "scissors") ||
        (human === "scissors" && machine === "paper")
    ) {
        humanScoreNumber++
        humanScore.innerHTML = humanScoreNumber
        result.innerHTML = "Você ganhou!";
    } else {
        machineScoreNumber++
        machineScore.innerHTML = machineScoreNumber
        result.innerHTML = "Você perdeu para a Alexa!";
    }
}


