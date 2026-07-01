const Ship = (length) => {
	let hits = 0;

	const hit = () => {
		if (hits < length) {
			hits += 1;
		}
	};

	const isSunk = () => {
		return hits >= length;
	};

	const getHits = () => {
		return hits;
	};

	return {
		length,
		hit,
		isSunk,
		getHits,
	};
};

export default Ship;
