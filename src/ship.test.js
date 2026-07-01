import { Ship } from "./ship";

describe("Ship Class", () => {
	test("should initialize with correct length and 0 hits", () => {
		const submarine = new Ship(3);
		expect(submarine.length).toBe(3);
		expect(submarine.hits).toBe(0);
	});

	test("should increase hit count when hit() is called", () => {
		const destroyer = new Ship(3);
		destroyer.hit();
		expect(destroyer.hits).toBe(1);
	});

	test("should return false for isSunk() initially", () => {
		const patrolBoat = new Ship(2);
		expect(patrolBoat.isSunk()).toBe(false);
	});

	test("should return true for isSunk() when hits equal length", () => {
		const patrolBoat = new Ship(2);
		patrolBoat.hit();
		patrolBoat.hit();
		expect(patrolBoat.isSunk()).toBe(true);
	});

	test("should not allow hits to exceed length", () => {
		const sub = new Ship(1);
		sub.hit();
		sub.hit(); // Intentional extra hit
		expect(sub.hits).toBe(1);
	});
});
