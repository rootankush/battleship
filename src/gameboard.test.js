import Gameboard from "./gameboard.js";
import Ship from "./ship.js";

describe("Gameboard", () => {
	test("successfully places a horizontal ship within bounds", () => {
		const gameboard = Gameboard();

		gameboard.placeShip([0, 0], "horizontal", 3);

		expect(gameboard.getShipCoordinates()).toEqual([
			[0, 0],
			[1, 0],
			[2, 0],
		]);
	});
	test("successfully hit the ship", () => {
		const gameboard = Gameboard();
		const ship = Ship();

		gameboard.placeShip([0, 0], "horizontal", 3);

		ship.hit();

		expect(gameboard.receiveAttack([0, 0])).toEqual(true);
	});
	test("successfully Sunk the ship", () => {
		const gameboard = Gameboard();
		const ship = Ship();

		gameboard.placeShip([0, 0], "horizontal", 3);

		ship.hit();
		ship.hit();
		ship.hit();

		gameboard.receiveAttack([0, 0]);
		gameboard.receiveAttack([1, 0]);
		gameboard.receiveAttack([2, 0]);

		expect(gameboard.allShipsSunk()).toEqual(true);
	});
	test("get coordinates", () => {
		const gameboard = Gameboard();

		gameboard.placeShip([2, 3], "horizontal", 3);

		expect(gameboard.getShipCoordinates()).toEqual([
			[2, 3],
			[3, 3],
			[4, 3],
		]);
	});
});
