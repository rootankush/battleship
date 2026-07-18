import Player from "./player";
import Gameboard from "./gameboard";

const GameController = () => {
	const player1 = Player("real");
	const player2 = Player("computer");

	let gameOver = false;
	let currentTurn = player1;

	function switchTurn() {
		if (currentTurn === player1) {
			currentTurn = player2;
		} else {
			currentTurn = player1;
		}
	}

	function triggerComputerTurn() {
		if (currentTurn.type === "computer") {
			playRound();
		}
	}

	const playRound = (coordinates) => {
		if (gameOver === true) {
			return;
		}
		if (currentTurn === player1) {
			player1.attackType(coordinates, player2.gameboard);
			if (player2.gameboard.allShipsSunk() === true) {
				gameOver = true;
			} else {
				switchTurn();
				triggerComputerTurn();
			}
		} else {
			player2.attackType(coordinates, player1.gameboard);
			if (player1.gameboard.allShipsSunk() === true) {
				gameOver = true;
			} else {
				switchTurn();
				triggerComputerTurn();
			}
		}
	};

	const getCurrentPlayer = () => {
		return currentTurn;
	};

	const isGameOver = () => {
		return gameOver;
	};

	return {
		playRound,
		getCurrentPlayer,
		isGameOver,
		player1,
		player2,
	};
};

export default GameController;
