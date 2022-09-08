const numeros = [1, 3, 5, 4, 2, 7]
const strings = ["Melancia", "Banana", "Maçã", "Pêra"]
const misturado = [10, 34, "Uva", "Manga", true, false]

/*
Agora, vamos manipular os arrays, adicionando ou removendo informações.
Para isso, crie **três** novos arrays, chamados `nomeDoArrayOriginalCopia`,
e faça o que se pede abaixo nas cópias dos arrays originais;
*/

const numeros1 = numeros.slice();
const strings1 = strings.slice();
const misturado1 = misturado.slice();

/*
- Adicione um item `number` ao primeiro array. 
Utilize `console.log()` para exibir o original e a cópia;
*/

numeros1.push(25)
console.log(numeros)
console.log(numeros1)

/*
- Remova o último item do segundo array. Utilize `console.log()` 
para exibir o original e a cópia;
*/

strings1.pop("Pêra")
console.log(strings);
console.log(strings1);

/*
- Remova o segundo item do terceiro array. Utilize `console.log()` 
para exibir o original e a cópia;
*/

misturado1.splice(2, 1)

console.log(misturado);
console.log(misturado1);



