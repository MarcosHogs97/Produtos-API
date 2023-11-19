import { useState, useEffect } from "react";

interface Produto {
    id: number;
    nome: string;
    valor: number;
    resumo: string;
    detalhes: string;
    informacaoExtra: string;
    dataLancamento: string;
}

interface ProdutoLista {
    Produto: Produto[];
}

export default function RequesAPI() {
    const [Produtos, setProdutos] = useState<ProdutoLista>({ Produto: [] });
    const [modalProduto, setModalProduto] = useState<Produto | null>(null);

    const abrirModal = (produto: Produto) => {
        setModalProduto(produto);
    };

    const fecharModal = () => {
        setModalProduto(null);
    };

    async function fetchProdutos() {
        try {
            const resp = await fetch('http://localhost:3000/api/ListaDeProdutosAPI');
            const json = await resp.json();
            setProdutos(json);
        } catch (error) {
            console.error('Erro ao buscar dados:', error);
        }
    }

    useEffect(() => {
        fetchProdutos();
    }, []);

    return (
        <div className="w-2/4 flex flex-col gap-4 bg-gray-700 p-2 rounded-md min-w-min:530">
            <h1 className="text-4xl font-bold text-center p-4 text-white">Nossos Produtos</h1>

            {/* Tabela */}
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400 rounded-md border-collapse border border-slate-500">
                <thead className="text-lg bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Nome do Produto
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Valor
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Resumo
                        </th>
                        <th scope="col" className="px-6 py-3">
                            
                        </th>
                    </tr>
                </thead>
                <tbody>
                    {Produtos.Produto.map((produto, index) => (
                        <tr
                            key={produto.id}
                            className={`${index % 2 === 0
                                ? "bg-gray-50 dark:bg-gray-800"
                                : "bg-white dark:bg-gray-900"
                                } border-b dark:border-gray-700`}
                        >
                            <td className="px-6 py-4 font-medium whitespace-nowrap dark:text-white">
                                {produto.nome}
                            </td>
                            <td className="px-6 py-4">R$: {produto.valor}</td>
                            <td className="px-6 py-4">{produto.resumo}</td>
                            <td className="px-6 py-4 text-base font-semibold">
                                <button
                                    onClick={() => abrirModal(produto)}
                                    className="bg-blue-500 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-600 focus:outline-none"
                                >
                                    Saiba mais
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Modal */}
            {modalProduto && (
                <div className="absolute top-0 left-0 backdrop-blur-sm w-full h-full z-0" >
                    <div className="fixed inset-0 flex items-center justify-center bg-gray-400 bg-opacity-10">
                        <div className="flex flex-col items-end bg-gray-800 p-3 w-96 rounded-lg drop-shadow-2xl relative gap-2">
                            <span
                                className=" text-white py-2 px-5 rounded-md hover:bg-red-600 focus:outline-none cursor-pointer"
                                onClick={fecharModal}
                            >
                                &times;
                            </span>
                            <div className="bg-gray-600 p-4 rounded-md shadow-inner">
                                <h2 className="text-xl font-bold mb-4 border-b-2 text-gray-200">{modalProduto.nome}</h2>
                                <p className="mb-2 text-gray-300">
                                    <strong>Valor R$:</strong> {modalProduto.valor}
                                </p>
                                <p className="mb-2 text-gray-300">
                                    <strong>Resumo:</strong> {modalProduto.resumo}
                                </p>
                                <p className="mb-2 text-gray-300">
                                    <strong>Detalhes:</strong> {modalProduto.detalhes}
                                </p>
                                <p className="mb-2 text-gray-300">
                                    <strong>Informação Extra:</strong> {modalProduto.informacaoExtra}
                                </p>
                                <p className="mb-2 text-gray-300">
                                    <strong>Data de Lançamento:</strong> {modalProduto.dataLancamento}
                                </p>
                            </div>
                            <span
                                className=" text-white py-3 px-5 rounded-md  hover:bg-red-600 focus:outline-none cursor-pointer"
                                onClick={fecharModal}
                            >
                               Voltar
                            </span>
                        </div>
                    </div>

                </div>
            )}
        </div>
    );
}