import { Produto } from "./ListaProdutos";

interface Props {
  cartProducts: Produto[];
}

export default function Cart({ cartProducts }: Props) {
  return (
    <div>
      <h2 className="text-center text-7xl font-bold mt-52">Seu carrinho	</h2>
      <ul className="flex justify-around ">
        {cartProducts.map((produto) => (
          <li className="flex flex-col items-center gap-2">
            <img src={produto.imgUrl} alt="" style={{ width: "300px" }} />
            <h1 className="text-2xl font-medium">{produto.name}</h1>
            <h2 className="text-xl font-medium">R$ {produto.price}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
}
