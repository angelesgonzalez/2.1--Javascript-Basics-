// !Exercise

const names = ["Angeles", "Jordi", "Laura"];

const printNames = (name1, name2, name3) => {
	console.log(name1);
	console.log(name2);
	console.log(name3);
};

printNames(...names);

// !Exercise 6

const user = {
	id: 1,
	name: "Alex",
	age: 28,
	email: "alex@example.com",
};

const settings = {
	theme: "dark",
	notifications: true,
};

const newUser = { ...user, ...settings };
