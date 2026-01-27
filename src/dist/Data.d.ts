export declare class Data {
    constructor(dia: number, mes: number, ano: number);
    dia: number;
    mes: number;
    ano: number;
}
export declare class Produto {
    constructor(nome: string, preco: number, desconto?: number);
    nome: string;
    preco: number;
    desconto: number;
}
export declare class Carro {
    constructor(marca: string, modelo: string, ano: number, preco: number);
    marca: string;
    modelo: string;
    ano: number;
    preco: number;
}
export declare class motorista {
    constructor(nome: string, cpf: string, id: number, idade: number, genero: string, carro: Carro);
    nome: string;
    cpf: string;
    id: number;
    idade: number;
    genero: string;
    carro: Carro;
}
//# sourceMappingURL=Data.d.ts.map