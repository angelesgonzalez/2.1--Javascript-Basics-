// !Exercici 1

const getProcessed = (num, callback) => {
	return callback(num);
};

getProcessed(12, (num) => num + num);

// !Exercici 2

const getCalculation = (num1, num2, callback) => {
	return callback(num1, num2);
};

getCalculation(2, 3, (num1, num2) => num1 + num2);
