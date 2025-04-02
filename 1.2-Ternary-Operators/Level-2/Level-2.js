// Exercise 1

const isPositiveOrNegative = (num) => {
	return num === 0
		? `${num} is equal to 0`
		: num > 0
		? `${num} is a positive number`
		: `${num} is a negative number`;
};

console.log(isPositiveOrNegative(-1)); //negative
console.log(isPositiveOrNegative(2)); //positive
console.log(isPositiveOrNegative(0)); // 0

// !Exercise 2

const findMaximum = (num1, num2, num3) => {
	if (num1 === num2 && num2 === num3) return `All numbers are equals.`;
	
    let maximum = num1;
	maximum > num2 ? maximum : (maximum = num2);
    maximum > num3 ? maximum : (maximum = num3);
    
	return `${maximum} is the highest number. `;
};

console.log(findMaximum(1, 2, 3)); // 3
console.log(findMaximum(1, 5, 3)); // 5
console.log(findMaximum(8, 5, 3)); // 8
console.log(findMaximum(2, 2, 2)); // 2
