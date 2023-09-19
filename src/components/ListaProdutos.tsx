import produtosProps from "./produtos.json"

export interface Produto {
    name: string,
    price: number,
    description: string,
    imgUrl: string,
}

interface Props {
    addCarrinho: (produto: Produto) => () => void
}

export default function ListaProdutos({addCarrinho}: Props) {
  return (
    <div className="">
      <h2 className="text-center text-7xl font-bold">HI<span className="text-green-600">GH</span></h2>
      <ul className="flex justify-around ">
        {produtosProps.map((produto) => (
          <li className="flex flex-col items-center gap-2 shadow-xl rounded-2xl p-5 hover:shadow-2xl ease-in-out duration-200">
            <img src={produto.imgUrl} alt="" style={{width: "300px"}}/>
            <h1 className="text-2xl font-medium">{produto.name}</h1>
            <h2 className="text-xl font-medium">R$ {produto.price}</h2>
            <button type='button' onClick={addCarrinho(produto)}className="bg-green-400 p-4 rounded-lg" >Adicionar ao carrinho</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
