import Ship from "./ship";
import Gameboard from "./gameboard";

const Player = (type) => {
	const gameboard = Gameboard();

	const attackType = (coordinates, enemyBoard) => {
		if (type === "real") {
			enemyBoard.receiveAttack(coordinates);
		} else if (type === "computer") {
			let coordinatesComputer = [
				Math.floor(Math.random() * 10),
				Math.floor(Math.random() * 10),
			];
			const hits = enemyBoard.getAttacksHit();
			while (
				hits.some(
					(hit) =>
						hit[0] === coordinatesComputer[0] &&
						hit[1] === coordinatesComputer[1],
				)
			) {
				coordinatesComputer = [
					Math.floor(Math.random() * 10),
					Math.floor(Math.random() * 10),
				];
			}
			enemyBoard.receiveAttack(coordinatesComputer);
		}
	};

	return {
		type,
		gameboard,
		attackType,
	};
};

export default Player;
