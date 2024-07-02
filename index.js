//exercício 1
let cotacaoAtual = Number(prompt("Informe a cotação do dolar:"));

let carteira = Number(prompt("Imforme o valor que você tem: "));

let opcao =Number(prompt("Informe o tipo de conversão \n1 REAL -> DOLAR -> \N2 DOLAR -> DOLAR -> REAL ->"))

if (opcao == 2) {
valorConvertido = cotacaoAtual * carteira;
} else {
    valorConvertido = carteira / cotacaoAtual;
}
alert (valorConvertido);

//exercício 2

const numero = parseInt(prompt("Informe um número inteiro"));

if (numero % 2 === 0) {
console.log(`o número ${numero} é par.`);
} else {
 console.log(`o número ${numero} é impar`);   
}
    

//exercício 3
let numero1 = Number(prompt("Informe o numero 1"));

let numero2 = Number("Informe o numero 2");

if (numero1 > numero2) {
    console.log(`o número ${numero1} é maior.`);
} else {
  console.log(`o número ${numero2} é maior.`);  
}

//exercício 4
let prova1 = Number(prompt("Informe a nota da prova"));
let prova2 = Number(prompt("Informe a nota da prova"));

if (prova1 >=6) {
console.log("Aluno aprovado");    
} else {
  console.log("Aluno aprovado"); 
}

if (prova2 >=6) {
    console.log("AlunO aprovado");
} else {
 console.log("Aluno aprovado");  
}

//exercício 5
