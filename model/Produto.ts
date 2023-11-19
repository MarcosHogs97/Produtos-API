export default class Produto {
    protected id: number;
    protected nome: string;
    protected valor: number;
    protected resumo: string;

    constructor(id: number, nome: string, valor: number, resumo: string) {
        this.id = id;
        this.nome = nome;
        this.valor = valor;
        this.resumo = resumo;
    }
    get GetId() {
        return this.id
    }
    get GetIdNome() {
        return this.nome
    }
    get GetValor() {
        return this.valor
    }
    get GetResumo() {
        return this.resumo
    }


}