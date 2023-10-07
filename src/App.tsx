import Cart from "./components/Cart";
import ListaProdutos from "./components/ListaProdutos";
import { useState, useEffect } from "react";
import { Produto } from "./components/ListaProdutos";

function App() {
  const [cart, setCart] = useState<Produto[]>([]);
  const addCarrinho = (produto: Produto) => () => {
    setCart([...cart, produto]);
  };

  useEffect(() => {
    if (cart.length > 0) {
      console.log("Produto");
    }
  }, [cart]);

  return (
    <>
      <ListaProdutos addCarrinho={addCarrinho} />
      <Cart cartProducts={cart} />
    </>
  );
}

export default App;
