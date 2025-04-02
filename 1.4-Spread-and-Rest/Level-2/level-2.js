// !Exercise 3

const user = {
	id: 1,
	name: "Alex",
	age: 28,
	email: "alex@example.com",
};

const user2 = { ...user, age: 29 };
console.log(user2); //{id: 1, name: "Alex", age: 29, email: "alex@example.com" };
console.log(user); //{id: 1, name: "Alex", age: 28, email: "alex@example.com" };

// !Exercise 4
// Rest en Destructuring: Crea una array amb diversos elements. Utilitza destructuring i l'operador rest per a assignar els primers dos elements a variables, i després assignar la resta dels elements a una tercera variable.
