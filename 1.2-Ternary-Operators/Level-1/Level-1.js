// Exercise 1
const isAllowedToDrive = (age) => {
	return age >= 18 ? `Allowed to drive` : `Not allowed to drive.`;
};

console.log(isAllowedToDrive(14)); //Not Allowed to drive
console.log(isAllowedToDrive(18)); // Allowed to drive

//Exercise 2

const compareNumbers = (num1, num2) => {
	return num1 === num2
		? `${num1} & ${num2} are equals.`
		: num1 > num2
		? `${num1} is higher than ${num2}`
		: `${num2} is higher than ${num1} `;
};

console.log(compareNumbers(2, 2)); //are equals.
console.log(compareNumbers(1, 2)); // 2 is higher than 1
console.log(compareNumbers(3, 1)); // 3 is higher than 1
