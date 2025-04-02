// !Exercici 3

const waitAndSayHi = (personName, callback) => {
	setTimeout(() => callback(personName), 2000);
};

waitAndSayHi("Angeles", (personName) => {
	console.log(`Hi ${personName}`);
});

// !Exercici 4

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const processElements = (array, callback) => {
	let newArray = [];
	for (let i = 0; i < array.length; i++) {
		newArray.push(callback(array[i]));
	}
	return newArray;
};

newArray = processElements(arr, (element) => {
	return ++element;
});
