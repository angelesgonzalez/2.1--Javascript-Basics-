const numbers = [1, 3, 7, 10, 15, 17, 11, 5, 8, 12, 9];

const calculation = (array) =>
	array
		.filter((num) => num >= 10)
		.map((num) => num * 2)
		.reduce((accu, value) => accu + value);

console.log(calculation(numbers)); //130
