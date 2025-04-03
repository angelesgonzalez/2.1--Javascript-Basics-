// !Exercise 3

const user = {
	id: 1,
	name: "Alex",
	age: 28,
	email: "alex@example.com",
};

const user2 = { ...user, age: 29 };

// !Exercise 4

const elements = ["a string", 1, true, "another string", 2, 3, 4, 5];
const [firstElement, secondElement, ...everythingElse] = elements;
