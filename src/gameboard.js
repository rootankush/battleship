import Ship from "./ship.js";

const Gameboard = () => {
	const missedAttacks = [];
	const ships = [];

	const placeShip = (startCoordinates, orientation, length) => {
		const startX = startCoordinates[0];
		const startY = startCoordinates[1];
		const footprint = [];
		if (startX > 9 || startX < 0) {
			return false;
		} else if (startY > 9 || startY < 0) {
			return false;
		}

		if (orientation.toLowerCase() === "horizontal") {
			for (let i = 0; i < length; i++) {
				const currentX = startX + i;
				const currentY = startY;

				footprint.push([currentX, currentY]);
			}
		} else if (orientation.toLowerCase() === "vertical") {
			for (let i = 0; i < length; i++) {
				const currentX = startX;
				const currentY = startY + i;

				footprint.push([currentX, currentY]);
			}
		}

		const newShip = Ship(length);

		ships.push({
			shipInstance: newShip,
			coordinates: footprint,
		});
	};

	const receiveAttack = (attackCoordinates) => {
		const coordinatesOfShip = ships.find((shipObj) => {
			let checkCord = shipObj.coordinates;
			for(let i=0; i<checkCord.length; i++) {
				if(checkCord[i][0] === attackCoordinates[0] && checkCord[i][1] === attackCoordinates[1]) {
					return true;
				}
			}
			return false;
		})

		if(coordinatesOfShip) {
			let ship = coordinatesOfShip.shipInstance;
			ship.hit();
			return true;
		}
		else {
			missedAttacks.push(attackCoordinates);
			return false
		}
	};

	const allShipsSunk = () => {};

	const getMissedAttacks = () => {
		return missedAttacks;
	};

	const getShipCoordinates = () => {
		return ships.flatMap(shipObj => shipObj.coordinates);
	};

	return {
		placeShip,
		receiveAttack,
		allShipsSunk,
		getMissedAttacks,
		getShipCoordinates,
	};
};

export default Gameboard;
