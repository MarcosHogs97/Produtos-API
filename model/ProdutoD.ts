import Produto from "./Produto";

export default class DetalheProduto extends Produto {
    private detalhes: string;
    private informacaoExtra: string;
    private dataLancamento: string;

    constructor(id: number, nome: string, valor: number, resumo: string, detalheAdicional: string, informacaoExtra: string, dataLancamento: string) {
        super(id, nome, valor, resumo);
        this.detalhes = detalheAdicional;
        this.informacaoExtra = informacaoExtra;
        this.dataLancamento = dataLancamento;
    }

    get GetDetalhes() {
        return this.detalhes;
    }

    get GetInformacaoExtra() {
        return this.informacaoExtra;
    }

    get GetDataLancamento() {
        return this.dataLancamento;
    }
}