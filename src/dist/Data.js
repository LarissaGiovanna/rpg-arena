//export = posso exportar para outros arquivos com impor {nomeClasse} from nomeArquivo
export class Data {
    constructor(dia, mes, ano) {
        this.dia = dia; //o parametro dia recebido é atribuído ao atributo dia da classe Data
        this.mes = mes;
        this.ano = ano;
    }
}
export class Produto {
    constructor(nome, preco, desconto = 0) {
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
}
export class Carro {
    constructor(marca, modelo, ano, preco) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.preco = preco;
    }
}
export class motorista {
    constructor(nome, cpf, id, idade, genero, carro) {
        this.nome = nome;
        this.cpf = cpf;
        this.id = id;
        this.idade = idade;
        this.genero = genero;
        this.carro = carro;
    }
}
// get e set
//export class Data {
//     public constructor(dia: number = 1, mes: number = 1, ano: number = 1970) {
//         this.dia = dia;
//         this.mes = mes;
//         this.ano = ano;
//     }
//     private dia: number;
//     private mes: number;
//     private ano: number;
//     public get Dia(): number {
//         return this.dia;
//     }
//     public set Dia(dia: number) {
//         this.dia = dia;
//     }
//     public get Mes(): number {
//         return this.mes;
//     }
//     public get Ano(): number {
//         return this.ano;
//     }
// }
//# sourceMappingURL=Data.js.map