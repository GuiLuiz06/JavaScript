// 1 - number 
console.log(typeof 2);
console.log(typeof 22.3);
console.log(typeof -11);

// 2 - op aritmeticas
console.log(10+4);
console.log(112222-83333);
console.log(9 * 5);
console.log(22 / 2);

// 3 - special numbers
console.log(typeof Infinity);
console.log(typeof -Infinity);
console.log(typeof 5 * "a");
console.log(typeof NaN);

// 4 - String
console.log(typeof "Guilherme");
console.log("Guilherme")
console.log('Guilherme Luiz')
console.log('22');

// 5 - Símbolos especias em String
console.log("testando a\nquebra de linha");
// espaçamento de tab
console.log("Espaçamento \t de tab");

// 6 - Concatenação
console.log("guilherme " + "luiz " + "santos");
console.log('guilherme ' + 'com ' + 'crase');

// 7 - Interpolação
console.log(`a soma de 2 + 2 é: ${2 + 2}`);

// 8 - boolean
console.log(true);
console.log(false);
console.log(5 < 30);
console.log(20 > 2);
console.log(typeof false);

// 9 - Comparações
console.log(5 <= 5);
console.log(5 < 5);
console.log(10 == 10);
console.log(10 == 9);
console.log(10 != 9);

// 10 - Idênticos 
console.log(9 == "9");
console.log(9 + "9");
console.log(9 === "9");
console.log(9 != "9");
console.log(9 !== "9");

// 11 - operadores lógicos
console.log(true && true);
console.log(true && false);
console.log(5 > 2 && 2 < 10);
console.log(5 > 2 || 9 > 20);       
console.log(!5 > 3);

// 12 - mudanças de tipos 
console.log(5 * null);
console.log("teste" * "opa");
console.log("10" + 1);
console.log("10" - 1);