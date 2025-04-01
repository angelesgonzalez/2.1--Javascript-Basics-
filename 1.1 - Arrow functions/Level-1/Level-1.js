// !Exercici 1

const add = (a, b) => a + b;

//    !Exercici 2

const getRandomNumber = () => Math.floor(Math.random() * 101);

//  !Exercici 3

class Person {
	constructor(personName) {
		this.personName = personName;
		this.greet = () => console.log(`Hello, ${this.personName}`);
	}
}

const newPerson = new Person("Angeles");
newPerson.greet();
