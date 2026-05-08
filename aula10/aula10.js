
// INTRODUÇÃO AO JAVASCRIPT

// CRIAR VARIÁVEL

let nome = "Ana";


let masculino = false;
let email;

console.log(nome)

nome = "João"

console.log("O valor guardado é " + nome)

let primeiro_nome = "João"
let ultimoNome = "David"

console.log(primeiro_nome + " " + ultimoNome)

const precoBase = 100;
const IVA = 0.25;
const precoFinal =  precoBase + precoBase* IVA;
console.log(precoFinal)

// CONDICIONAIS

const idade = 15;

if (idade >= 18){
    console.log("Entras na disco")
} else {
    console.log("Não entras jovem")
}

// > MAIOR
// < MENOR
// >= <= MAIOR OU IGUAL / MENOR OU IGUAL
// || OU OR
// && E AND
// = atribuição
// == equivalente
// === estritamente equivalente
// != diferentes

7 == "7" // V
7 === "7" // F



const nota = 14;

// nota >= 18 - Excelente
// nota >= 14 - Bom
// nota >= 10 - Suficiente
// Insuficiente

if(nota>=18){
    console.log(nota + ": Excelente")
} else if(nota >= 14){
    console.log(nota + ": Bom")
} else if(nota >=10){
    console.log(nota + ": Suficiente")
} else {
    console.log(nota + ": Insuficiente")
}