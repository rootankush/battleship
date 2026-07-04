import Ship from "./ship";
import Gameboard from "./gameboard";

const Player = (type) => {
	const gameboard = Gameboard();

	const attackType = (coordinates) => {
		if (type === "player") {
			gameboard.receiveAttack(coordinates);
		} else {
			let coordinatesComputer = [
				Math.floor(Math.random() * 10),
				Math.floor(Math.random() * 10),
			];
			const hits = gameboard.getAttacksHit();
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
			gameboard.receiveAttack(coordinatesComputer);
		}
	};

	return {
		gameboard,
		attackType,
	};
};

export default Player;
