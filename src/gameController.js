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

	const playRound = (coordinates) => {
		if (currentTurn === player1) {
			player1.attackType(coordinates, player2.gameboard);
			if (player2.gameboard.allShipsSunk() === true) {
				isGameOver();
			} else {
				switchTurn();
			}
		} else {
			player2.attackType(coordinates, player1.gameboard);
			if (player1.gameboard.allShipsSunk() === true) {
				isGameOver();
			} else {
				switchTurn();
			}
		}
	};

	const getCurrentPlayer = () => {
		return currentTurn;
	};

	const isGameOver = () => {};

	return {
		playRound,
		getCurrentPlayer,
		isGameOver,
	};
};
