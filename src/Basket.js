import BasketItems from "./BasketItems"
const Basket = ({ basket, products, cartTotal }) => {


    return (
        <div className="basket">{basket.map(product => <BasketItems product={product} products={products.find(item => item.id == product.id)} />)}
            <div className="total">
                <h3> Toplam : ${cartTotal}</h3>
            </div>
        </div>
    )
}

export default Basket