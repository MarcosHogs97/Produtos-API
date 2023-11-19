import type { NextApiRequest, NextApiResponse } from 'next'
import listaProdutos from '../../../data/listaProdutos';
import ProdutoD from '../../../model/ProdutoD';

type Data = {
  Lista: ProdutoD[]
}
const ListaDeProdutos: ProdutoD[] = listaProdutos 

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method === "GET") {
    (res as any).status(200).json({ Produto:ListaDeProdutos });
  } else {
    (res as any).status(405).send("Erro 405 Método Não Permitido!!!");
  };
}
