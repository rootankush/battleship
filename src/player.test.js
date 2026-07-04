import Player from "./player.js";

describe("Player", () => {
	test("'player' type forwards given coordinates to its gameboard", () => {
		const player = Player("player");

		player.attackType([4, 5]);

		expect(player.gameboard.getAttacksHit()).toContainEqual([4, 5]);
	});

	test("'computer' type generates its own coordinates within the 0-9 board range", () => {
		const player = Player("computer");

		player.attackType();

		const hits = player.gameboard.getAttacksHit();
		expect(hits.length).toBe(1);

		const [x, y] = hits[0];
		expect(x).toBeGreaterThanOrEqual(0);
		expect(x).toBeLessThanOrEqual(9);
		expect(y).toBeGreaterThanOrEqual(0);
		expect(y).toBeLessThanOrEqual(9);
	});

	test("'computer' type ignores any coordinates passed in and attacks on its own board", () => {
		const player = Player("computer");

		player.attackType([9, 9]);

		expect(player.gameboard.getAttacksHit().length).toBe(1);
	});
});
