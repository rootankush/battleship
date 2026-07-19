import GameController from "./gameController";
import Player from "./player";

describe("Turn Order and Switching", () => {
	test("getCurrentPlayer returns player1 before any round is played", () => {
		const game = GameController();
		expect(game.getCurrentPlayer()).toEqual(game.player1);
	});
	test("after one round no one wins and switch to player2", () => {
		const game = GameController();
		game.player1.gameboard.placeShip([0, 0], "horizontal", 3);
		game.player2.gameboard.placeShip([0, 0], "horizontal", 3);
		game.playRound([2, 3]);
		expect(game.player1.gameboard.getAttacksHit().length).toBe(1);
	});
	test("after a full real-turn does it come back to player1", () => {
		const game = GameController();
		game.player1.gameboard.placeShip([0, 0], "horizontal", 3);
		game.player2.gameboard.placeShip([0, 0], "horizontal", 3);
		game.playRound([2, 3]);
		expect(game.getCurrentPlayer()).toBe(game.player1);
	});
});

describe("Attack Targeting", () => {
	test("does player1 attack on player2 board", () => {
		const game = GameController();
		game.player1.gameboard.placeShip([0, 0], "horizontal", 3);
		game.player2.gameboard.placeShip([0, 0], "horizontal", 3);
		game.playRound([2, 3]);
		expect(game.player2.gameboard.getAttacksHit().length).toBe(1);
	});
	test("does player2 attack on player1 board after player1 round", () => {
		const game = GameController();
		game.player1.gameboard.placeShip([0, 0], "horizontal", 3);
		game.player2.gameboard.placeShip([0, 0], "horizontal", 3);
		game.playRound([2, 3]);
		expect(game.player1.gameboard.getAttacksHit().length).toBe(1);
	});
});
