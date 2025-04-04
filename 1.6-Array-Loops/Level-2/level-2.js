// !Exercici 4
// for-in: Teniu un objecte amb parells clau-valor: let obj = { nom: Ona, edat: 25, ciutat: 'Barcelona' }; Utilitza un bucle for-in per a imprimir a la consola cada clau i el seu valor corresponent.

const object = { firstName: `Ona`, age: 25, city: `Barcelona` };

for (const property in object) {
	console.log(`${property}: ${object[property]}`);
}

// !Exercici 5
// for-of amb break: Teniu una array de números. Utilitza un bucle for-of per a imprimir a la consola els números fins a trobar el número 5, llavors atura el bucle: let numeros = [1, 2, 3, 4, 5, 6];

const numbers = [1, 2, 3, 4, 5, 6];

for (const number of numbers) {
	console.log(number);
	if (number === 5) break;
}
