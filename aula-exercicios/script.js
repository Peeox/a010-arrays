/*
// tipo strings

const strings = ["Pedro","Felippe","Simoes"]
console.log(strings)
console.log(strings.length)
console.log("Acessar 3º item:", strings[2])

// tipo número

const numeros = [0 , 1 , 2]
console.log(numeros)

// vários tipos

const misturado = ["Pedro", 28, true]
console.log(misturado)
console.log("verificar se inclui primeiro item", misturado.includes("Pedro"))
// Array único

const unico = [1000]
console.log (unico)
console.log(unico.indexOf(1000))

// Array vazio

const vazio = []
console.log(vazio);

// Cópia do primeiro array

const copiaDoStrings = strings.slice()

console.log(copiaDoStrings);

// Adição de uma variável 

copiaDoStrings.push("Peeox")
console.log(copiaDoStrings)

// Remoção dos itens 2 e 3

copiaDoStrings.splice(2,2).splice(2,2)
console.log("Copia do array sem itens 2 e 3", copiaDoStrings);
*/

// criação de array com variaveis de números aleatórios
const aleatorios = [1, 6, 5, 9, 4, 3, 2]

// cópia da variável
const slice = aleatorios.slice()

// retirada da última variável da arrey
slice.pop()

// inclusão de um número na última posição do array
slice.push(6)

//impressão das duas arrays 

console.log(aleatorios);
console.log(slice);