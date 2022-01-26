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
            <div className="basket-count__dic" onClick={() => dicriment(product.id)}>
              <img src="/img/dis.svg" alt="" />
            </div>
            <span className="basket-count__sum">{product.count}</span>
            <div className="basket-count__inc" onClick={() => incriment(product.id)}>
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 8L15 8" stroke="#1290D7" stroke-width="2" stroke-linecap="round" />
                <line x1="8" y1="15" x2="8" y2="1" stroke="#1290D7" stroke-width="2" stroke-linecap="round" />
              </svg>
            </div>
          </div>
        </div>
      </div>
      <div className="basket-products__del" >
        <span onClick={() => basketProductRemove(product.id)}>
          Remove
        </span>
        <div className="basket-products__prise">{parseInt(product.prise) * product.count}$</div>
      </div>
    </div>
  )
}

export default BasketProduct