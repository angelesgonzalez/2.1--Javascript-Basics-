// !Exercici 1

const processar = (num, callback) => {
	return callback(num);
};

processar(12, (num) => num + num);

// !Exercici 2

const calculadora = (num1, num2, callback) => {
	return callback(num1, num2);
};

calculadora(2, 3, (num1, num2) => num1 + num2);
