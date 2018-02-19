var newGameBtn =document.getElementById('js-newGameButton');
	
	newGameBtn.addEventListener('click', newGame);

var pickRock = document.getElementById("js-playerPick_rock"),
	pickPaper = document.getElementById("js-playerPick_paper"),
	pickScissors = document.getElementById("js-playerPick_scissors");

	pickRock.addEventListener("click", function(){playerPick("rock")});
	pickPaper.addEventListener("click", function(){playerPick("paper")});
	pickScissors.addEventListener("click", function(){playerPick("scissors")});



var gameState = "notStarted",
	player = {
		name: '',
		score: 0
	},
	computer = {
		score: 0
	};

var newGameElem = document.getElementById("js-newGameElement"),
	pickElem = document.getElementById("js-playerPickElement"),
	resultsElem = document.getElementById("js-resultsTableElement");

function setGameElements(){
	switch(gameState){
		case 'started':
			newGameElem.style.display = 'none';
			pickElem.style.display = 'block';
			resultsElem.style.display = 'block';
		 break;
		case 'ended':
				newGameBtn.innerText = 'Play again';
		case 'notStarted':
		default:
			newGameElem.style.display = 'block';
			pickElem.style.display = 'none';
			resultsElem.style.display = 'none';
	}
}
setGameElements()

var playerPointsElem = document.getElementById('js-playerPoints'),
	playerNameElem = document.getElementById('js-playerName'),
	computerPointsElem = document.getElementById('js-computerPoints');

function newGame(){
	player.name = prompt('Please enter your name', 'imię gracza');
		if(player.name){
			player.score = computer.score = 0;
			gameState = 'started';
			setGameElements();

			playerNameElem.innerHTML = player.name;
		}
	}

function getComputerPick(){
	var possiblePicks = ['rock', 'paper', 'scissors'];
	return possiblePicks[Math.floor(Math.random()*3)];
}

var playerPickElem = document.getElementById('js-playerPick'),
	computerPickElem = document.getElementById('js-computerPick'),
	playerResultElem = document.getElementById('js-playerResult'),
	computerResultElem = document.getElementById('js-computerResult');

function playerPick(playerPick){
	var computerPick = getComputerPick();

	playerPickElem.innerHTML=playerPick;
	computerPickElem.innerHTML=computerPick;

	checkRoundWinner(playerPick,computerPick);
}
function checkRoundWinner (playerPick, computerPick){
	playerResultElem.innerHTML = computerResultElem.innerHTML='';

	var winnerIs = 'player';

	if(playerPick == computerPick){
		winnerIs = 'none';
	}else if(
		(computerPick == 'rock' && playerPick == 'scissors')||
		(computerPick == 'paper' && playerPick == 'rock')||
		(computerPick == 'scissors' && playerPick == 'paper')){
		computerPointsElem.innerHTML = computer.score++;
		winnerIs == 'computer';
		computerResultElem.innerHTML='Win!';
		playerResultElem.innerHTML='Lose :(';
	}else{
		playerPointsElem.innerHTML=player.score ++;
		playerResultElem.innerHTML='Win!';
		computerResultElem.innerHTML='Lose :(';
		winnerIs == 'player';
	}
	
	computerPointsElem.innerHTML = computer.score;
	playerPointsElem.innerHTML=player.score;
	
	if (player.score == 10){
		alert('You WIN!! ' +player.score+' - '+computer.score);
		gameState='ended';
		setGameElements();
		
	}else if(computer.score == 10){
		alert('You LOSE!! ' +player.score+' - '+computer.score);
		gameState='ended';
		setGameElements();
	}
}

