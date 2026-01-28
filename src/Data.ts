//export = posso exportar para outros arquivos com impor {nomeClasse} from nomeArquivo
export class Data {
    public constructor(dia: number, mes: number, ano: number) { //essa "função" recebe um dia que é number, mes que é number e ano que é number
        this.dia = dia; //o parametro dia recebido é atribuído ao atributo dia da classe Data
        this.mes = mes;
        this.ano = ano;
    }
    public dia: number; //e o atributto dia é publico e number
    public mes: number;
    public ano: number;
}

export class Produto{
    public constructor(nome: string, preco: number, desconto:number = 0){
        this.nome = nome;
        this.preco = preco;
        this.desconto = desconto;
    }
    public nome:string;
    public preco:number;
    public desconto:number;
}

export class Carro{
    public constructor(marca:string, modelo:string, ano:number, preco:number){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
        this.preco = preco;
    }
    public marca:string;
    public modelo:string
    public ano:number;
    public preco:number;
}

export class motorista{
    public constructor(nome:string, cpf:string, id:number, idade:number, genero:string, carro:Carro){
        this.nome = nome;
        this.cpf = cpf;
        this.id = id;
        this.idade = idade;
        this.genero = genero;
        this.carro = carro;
    }
    public nome:string;
    public cpf:string;
    public id:number;
    public idade:number;
    public genero:string;
    public carro:Carro;
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