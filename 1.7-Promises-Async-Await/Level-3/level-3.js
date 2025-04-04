// !Exercici 6

const promise1 = new Promise((resolve, reject) => {
	setTimeout(() => {
		const sucess = true;
		if (sucess) {
			resolve(`Resolved. Promise 1.`);
		} else {
			reject(`Rejected. Promise 1`);
		}
	}, 2000);
});

const promise2 = new Promise((resolve, reject) => {
	setTimeout(() => {
		const sucess = true;
		if (sucess) {
			resolve(`Resolved. Promise 2.`);
		} else {
			reject(`Rejected. Promise 2.`);
		}
	}, 3000);
});

const waitingForPromises = async () => {
	try {
		const allPromises = await Promise.all([promise1, promise2]);
		console.log(allPromises);
	} catch (error) {
		console.log(error);
	}
};

waitingForPromises();
