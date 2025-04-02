// !Exercise 5

const processString = (string, callback) => {
	let stringToUppercase = string.toUpperCase();
	callback(stringToUppercase);
};

processString(`Otra Prueba`, (string) => {
	console.log(`String a mayusculas: ${string}`);
});
