import React from 'react'

const BasketItems = ({products,product}) => {
  return (
    <div>{products?.name} x {product.amount}</div>
  )
}


export default BasketItems