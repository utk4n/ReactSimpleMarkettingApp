import { useState } from 'react'

const Product = ({ product, setBasket, basket, cartTotal, money }) => {

    const basketItem = basket.find(item => item.id === product.id)

    const addToBasket = () => {

        const checkBasket = basket.find(item => item.id === product.id)

        if (checkBasket) {
            checkBasket.amount += 1
            setBasket([...basket.filter(item => item.id !== product.id), checkBasket])
        }
        else {
            setBasket([...basket, {
                id: product.id,
                amount: 1
            }])
        }
    }

    const removeFromBasket = () => {
        const checkBasket = basket.find(item => item.id === product.id)
        basketItem.amount -= 1
        if (checkBasket.amount === 0)
            setBasket([...basket.filter(item => item.id !== product.id)])
        else {
            setBasket([...basket.filter(item => item.id !== product.id), checkBasket])

        }
    }



    return (
        <div className="product">
            <h3>{product.name}</h3>
            <span>Adet : {basketItem && basketItem.amount || 0}</span>
            <div className="cart">
                <button disabled={cartTotal + product.price > money} onClick={addToBasket}>Satın Al</button><h3>${product.price}</h3> <button disabled={!basketItem} onClick={removeFromBasket}>Sat</button>
            </div>
        </div>
    )
}

export default Product




