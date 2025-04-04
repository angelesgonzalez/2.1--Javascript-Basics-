// !Exercici 1

const newPromise = new Promise((resolve, reject) => {
	setTimeout(() => {
		const sucess = true;
		if (sucess) {
			resolve(`Hello World.`);
		} else {
			reject(`This is an error message.`);
		}
	}, 2000);
});

// !Exercici 2

newPromise
	.then((result) => {
		console.log(result);
	})
	.catch((error) => {
		console.log(error);
	});

// !Exercici 3

const promiseInput = new Promise((resolve, reject) => {
	setTimeout(() => {
		const input = "Hola";
		if (input === "Hola") {
			resolve(`Promise resolved. Exercise 3.`);
		} else {
			reject(`This is an error message`);
		}
	}, 2000);
});

promiseInput
	.then((result) => {
		console.log(result);
	})
	.catch((error) => {
		console.log(error);
	});

// !Exercici 4

const usingPromise = async () => {
	try {
		const promiseResult = await newPromise;
		console.log(promiseResult, "Exercise 4");
	} catch (error) {
		console.log(error);
	}
};

usingPromise();
