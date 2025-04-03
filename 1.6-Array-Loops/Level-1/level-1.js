// !Exercici 1
//

const names = ["Anna", "Bernat", "Clara"];
names.forEach((element) => console.log(element));

// !Exercici 2

const namesForOf = ["Anna", "Bernat", "Clara"];

for (const element of namesForOf) {
	console.log(element);
}

// !Exercici 3

const numbers = [1, 2, 3, 4, 5, 6];
const evenNumbers = numbers.filter((num) => {
	if (num % 2 === 0) return num;
});
