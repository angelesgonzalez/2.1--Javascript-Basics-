// !Exercise  1
// Map: Teniu un array de números [1, 2, 3, 4]. Crea una nova array que contingui el quadrat de cada número.

const numbers = [1, 2, 3, 4];
const squareNumbers = numbers.map((number) => number * number);

// !Exercise 2
// Filter: Teniu una array de números [1, 2, 3, 4]. Crea una nova array que només contingui els números parells.

const numbersToFilter = [1, 2, 3, 4];
const evenNumbers = numbers.filter((num) => {
	if (num % 2 === 0) return num;
});

// !Exercici 3
// Find: Teniu una array de números [1, 10 , 8, 11]. Utilitza la funció find per a trobar el primer número que és major a 10.

const numbersToFind = [1, 10, 8, 11];

const found = numbersToFind.find((num) => num > 10); //11

// !Exercici 4
// Reduce: Teniu una array de números [13, 7, 8, 21]. Fes servir la funció reduce per a calcular la suma total dels números.

const arrayToReduce = [13, 7, 8, 21];

const total = arrayToReduce.reduce(
	(accumulator, currentValue) => accumulator + currentValue,
	0
);
