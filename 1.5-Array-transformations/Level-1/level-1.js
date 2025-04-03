// !Exercise  1

const numbers = [1, 2, 3, 4];
const squareNumbers = numbers.map((number) => number * number);

// !Exercise 2

const numbersToFilter = [1, 2, 3, 4];
const evenNumbers = numbers.filter((num) => {
	if (num % 2 === 0) return num;
});

// !Exercise  3

const numbersToFind = [1, 10, 8, 11];

const found = numbersToFind.find((num) => num > 10);

// !Exercise  4

const arrayToReduce = [13, 7, 8, 21];

const total = arrayToReduce.reduce(
	(accumulator, currentValue) => accumulator + currentValue,
	0
);
