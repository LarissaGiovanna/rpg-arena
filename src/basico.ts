let fullName: string = "Raoni Oliveira";
let age: number = 38;
let sentence: string = `Olá, meu nome é ${fullName}.
Eu terei ${age + 1} anos de idade próximo mês.`;

console.log(sentence);

let endereco: [string, number]= ["Av. Principal", 200];
console.log(endereco);

enum Level {
  LOW,
  MEDIUM,
  HIGH
}

let minhaCor = Level.HIGH;
console.log(minhaCor);

function digaOi(): void {
    console.log("Oi");
}

digaOi();

function multiplicar(numA:number, numB:number) : number{
    return numA * numB;
} 

console.log(multiplicar(2, 5));

let resultado = multiplicar(9,8);

console.log(resultado);

let sum = (x: number, y: number): number => {return x + y; } 

console.log(sum(10, 20));

const numbers = [1,10,90,900,-5];
console.log(Math.max(...numbers)); 

const turmaA: string[] = ["João","Maria","Joaquina"];
const turmaB: string [] = ["Fernando", "Miguel", "Lorena", ... turmaA]; 
console.log(turmaB);

let input = (<HTMLInputElement>document.querySelector("input"));
let btn = document.querySelector("button");

btn?.addEventListener("click", function click() {
    console.log(input.value);
});

import { Data } from "./Data.js";
const dia = new Data(1, 1, 1970);
console.log(`${dia.dia}/${dia.mes}/${dia.ano}`);

//ex 1 objeto produto
import { Produto } from "./Data.js";

const produto1 = new Produto("Caneta", 2.5);
console.log(`Produto: ${produto1.nome} custa R$${produto1.preco} com desconto de ${produto1.desconto*100}%`);

const produto2 = new Produto("Notebook", 4500, 0.1);
console.log(`Produto: ${produto2.nome} custa R$${produto2.preco} com desconto de ${produto2.desconto*100}%`);

//ex 2 objeto motorista
import { motorista } from "./Data.js";
import { Carro } from "./Data.js";
const motorista1Carro = new Carro("Chevrolet", "Onix", 2020, 60000);
const motorista1 = new motorista("Raoni Oliveira", "123.456.789-00", 1, 38, "Masculino", motorista1Carro);

console.log(`Motorista: ${motorista1.nome}, CPF: ${motorista1.cpf}, Idade: ${motorista1.idade}, Gênero: ${motorista1.genero}, Carro: ${motorista1.carro.marca} ${motorista1.carro.modelo}`);
console.log(`Carro: ${motorista1.carro.marca} ${motorista1.carro.modelo}, Ano: ${motorista1.carro.ano}, Preço: R$${motorista1.carro.preco}`);