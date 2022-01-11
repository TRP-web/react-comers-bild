import React, { useEffect, useState } from 'react'
import ButtonBuy from './UI/BuyButton/BuyButton'
import '../style/Product.scss'
import { useDispatch, useSelector } from 'react-redux'

const Product = ({ product }) => {
  const productBasket = useSelector(state => state.basket.basket)
  const [buyed, setBuyed] = useState(false)
  const dispatch = useDispatch()
  const buttonView = () => {
    if (buyed) {
      return (
        <ButtonBuy style={{ fontSize : '15px' }}>In Busket</ButtonBuy>
      )
    } else {
      return (
        <ButtonBuy onClick={() => buy(product)}>Buy</ButtonBuy>
      )
    }
  }

  const buy = (product) => {
    product.count = 1
    dispatch({ type: 'ADD_PRODUCT', product: [product] })
  }

  useEffect(() => {
    for (let index = 0; index < productBasket.length; index++) {
      let element = productBasket[index];
      if (element.id === product.id) {
        setBuyed(true)
        return
      } else if (element.id !== product.id) {
        setBuyed(false)
      }
    }
    if (productBasket.length === 0) {
      setBuyed(false)
      return
    }
  }, [productBasket, product.id])

  return (
    <div className="product-block">
      <div className="product-block__img">
        <img src={product.photo} alt="" />
      </div>
      <h4 className="product-block__title">
        {product.title}
      </h4>
      <div className="product-block__inner">
        <span className="product-block__prise">{product.prise}</span>
        {
          buttonView()
        }
      </div>
    </div>
  )
}

export default Product