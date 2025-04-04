// !Exercici 5

const numbers = [1, 2, 3, 5, 6, 7, 8, 9, 10, 11];

const printNumbers = (array) => {
	for (let i = 0; i < array.length; i++) {
		const printNumber = (array) => console.log(array[i]);
		printNumber(array);
	}
};

printNumbers(numbers);

// !Exercici 6

const getMessage = () =>
	setTimeout(() => {
		console.log("Hola despues de 1 segundo");
	}, 1000);

getMessage();
