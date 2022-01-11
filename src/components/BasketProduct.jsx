import React from 'react'
import { useDispatch } from 'react-redux'
import '../style/BasketProduct.scss'
const BasketProduct = ({ product, basketProductRemove }) => {

  const dispatch = useDispatch()
  const incriment = (productId) => {
    dispatch({ type: "INCRIMENT_COUNT", productId: productId })
  }
  const dicriment = (productId) => {
    if (product.count > 1) {
      dispatch({ type: "DECRIMENT_COUNT", productId: productId })
    }
  }
  
  return (
    <div className="basket-products__block">
      <div className="basket-products__visual">
        <div className="basket-products__img">
          <img src={product.photo} alt="" />
        </div>
        <div className="basket-products__title-block">
          <div className="basket-products__title">
            {product.title}
          </div>
          <div className="basket-count">
            <div className="basket-count__dic" onClick={() => dicriment(product.id)}>-</div>
            <span className="basket-count__sum">{product.count}</span>
            <div className="basket-count__inc" onClick={() => incriment(product.id)}>+</div>
            <div className="basket-products__prise">{parseInt(product.prise) * product.count}$</div>
          </div>
        </div>
      </div>
      <div className="basket-products__del">
        <img src="/img/close.png" width="30px" alt="close" onClick={() => basketProductRemove(product.id)} />
      </div>
    </div>
  )
}

export default BasketProduct