const isEvenOrOdd = (array) => {
	let result = ``;
	for (let i = 0; i < array.length; i++) {
		result +=
			array[i] % 2 === 0 ? `${array[i]} is even. ` : `${array[i]} is odd. `;
	}
	return result;
};

console.log(isEvenOrOdd([2, 2, 3, 4, 5, 6, 6]));
