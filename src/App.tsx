import Cart from "./components/Cart"
import ListaProdutos from "./components/ListaProdutos"
import { useState } from "react";
import { Produto } from './components/ListaProdutos'

function App() {
  const [cart, setCart] = useState<Produto[]>([]);
  const addCarrinho = (produto: Produto) => () => {
    setCart([...cart, produto])

}

  return (
  <>
  <ListaProdutos
  addCarrinho={addCarrinho}
  />
  <Cart
  cartProducts={cart}
  />
 </>
  )
}

export default App