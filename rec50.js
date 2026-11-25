const prompt = require('prompt-sync')();

// 1. Criação das 3 variáveis
let precoIngresso = 20;
let quantidade = Number(prompt("Quantos ingressos deseja comprar? "));
let nomeFilme = prompt("Qual filme deseja assistir? ");

// 2. Operação aritmética (multiplicação)
let total = precoIngresso * quantidade;

// 3. Saídas interpoladas
console.log("\n===== BILHETERIA DE CINEMA =====");

console.log(`Filme escolhido: ${nomeFilme}`);

console.log(`Preço de cada ingresso: R$ ${precoIngresso.toFixed(2)}`);

console.log(`Quantidade de ingressos: ${quantidade}`);

console.log(`Operação aritmética: ${precoIngresso} x ${quantidade} = ${total}`);

console.log(`Valor total da compra: R$ ${total.toFixed(2)}`);

console.log("\nObrigado pela preferência! Bom filme!");