import Product from './Product';
import Header from './Header';
import Basket from './Basket';
import products from './productJson/products.json'
import { useState, useEffect } from 'react';
import './App.css';
function App() {

  const [money, setMoney] = useState(1000)
  const [basket, setBasket] = useState([])
  const [cartTotal, setCartTotal] = useState(0)

  useEffect(() => {
    setCartTotal(basket.reduce((total, curr) => {
      return total + (curr.amount * (products.find(product => product.id === curr.id).price))
    }, 0))
  }, [basket])

  const clearCart = () => {
    setBasket([])
  }
  return (
    <div className="App">
      <Header cartTotal={cartTotal} money={money} setMoney={setMoney} />
      {products.map(product => <Product cartTotal={cartTotal} money={money} key={product.id} setBasket={setBasket} basket={basket} product={product} />)}
      <Basket cartTotal={cartTotal} products={products} basket={basket} />
      <button onClick={clearCart}>Sepeti Boşalt</button>

    </div>
  );
}

export default App;
