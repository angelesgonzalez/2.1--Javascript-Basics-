// !Exercise 1

const array1 = [1, 2, 3, 4, 5];
const array2 = [6, 7, 8, 9, 10];
const array3 = [...array1, ...array2];

// !Exercise 2

function sum(...nums) {
	let result = 0;
	let array = nums;
	for (let i = 0; i < array.length; i++) {
		result += array[i];
    }
    return result;
}

console.log(sum(1,2,3,4,5)) // 15