/*Com os arrays criados, agora vamos observar os arrays. 
Faça o que se pede abaixo, utilizando `console.log()`:*/

const strings = ["Melancia", "Banana", "Maçã", "Pêra"]
const numeros = [1, 3, 5, 4, 2, 7]
const misturado = [10, 34, "Uva", "Manga", true, false]


/*
- Imprima a quantidade de itens de cada array (utilize um console.log()
para cada impressão);
*/

console.log(strings.length);
console.log(numeros.length);
console.log(misturado.length);

/*
- Imprima o primeiro item do primeiro array, o segundo item do segundo array,
e o terceiro item do terceiro array;
*/

console.log(strings[1])
console.log(numeros[0])
console.log(misturado[2])

/*
- Imprima uma informação booleana verdadeira sobre a 
**inclusão** de um item do primeiro array, e uma informação booleana 
falsa sobre a **inclusão** de um item ao terceiro array. 
Isto é, um `includes()` verdadeiro, e outro falso.
*/

strings.push("Uva")
console.log(strings.includes("Uva", true))


numeros.push(25)
console.log(numeros.includes(24, true))
