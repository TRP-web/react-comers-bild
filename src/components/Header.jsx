import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { NavLink, Link } from "react-router-dom";
import '../style/Header.scss'
import BasketProduct from './BasketProduct';

const Header = () => {
  const [basketActive, setBasketActive] = useState(false)
  const basket = useSelector(state => state.basket.basket)
  const newProduct = useSelector(state => state.basket.newProduct)
  const total = useSelector(state => state.basket.total)
  const dispatch = useDispatch()
  //const basketAdd = (e) => {
  //  setBasketActive(true)
  //  e.stopPropagation();
  //}
  useEffect(() => {
    dispatch({ type: 'TOTAL_CASH' })
  }, [basket, dispatch])

  const basketReove = (e) => {
    setBasketActive(false)
    e.stopPropagation();
  }
  const newsView = () => {
    if (newProduct === 0) {
      return (false)
    }
    else if (newProduct !== 0 && newProduct <= 9) {
      return (
        <span className="basket__news">{newProduct}</span>
      )
    } else if (newProduct > 9) {
      return (
        <span className="basket__news">9+</span>
      )
    }
  }
  const basketProductRemove = (id) => {
    dispatch({ type: 'REMOVE_PRODUCT', id: id })
  }
  return (
    <header className="header">
      {
        basketActive
          ?
          <div className="basket" onClick={basketReove}>
            <div className="basket__name">
              <h2 className="basket__title">basket</h2>
              <div className="basket__closes" onClick={basketReove}>
                <img src="/img/close.png" width="30px" alt="close" />
              </div>
            </div>
            <div className="basket__inner" onClick={e => e.stopPropagation()}>
              <div className="basket-products">
                {
                  basket.map(product => {
                    return (
                      <BasketProduct product={product} basketProductRemove={basketProductRemove} key={product.id} />
                    )
                  })
                }
              </div>

            </div>
            <div className="basket__total" onClick={e => e.stopPropagation()}>
              <span className='basket__back' onClick={basketReove}>Back to shop</span>
              <div>
                <span className="basket__prise">{total}$</span>
                <button className="basket__formet">
                  Сheckout
                </button>
              </div>
            </div>
          </div> : false
      }
      <div className="container">
        <div className="header__inner">
          <div className="header__logo">
            <Link to="/" className="header__link">
              <img src={window.location.origin + '/img/Logo.svg'} alt="logo" />
            </Link>
          </div>
          <form>
            <input type="text" placeholder="Search..." />
            <div className="loop">
              <img src="/img/loop.svg" alt="" />
            </div>
          </form>
          <nav className="header__menu">
            <ul>
              <li className="header__list">
                <NavLink to="/" className="header__link">Main</NavLink>
              </li>
              <li className="header__list">
                <NavLink to="/product" className="header__link">Catalog</NavLink>
              </li>
              <li className="header__list">
                <NavLink to="/about" className="header__link">About Us</NavLink>
              </li>
            </ul>
          </nav>
          <div className="header__busket" onClick={setBasketActive}>
            <img src="/img/basket.svg" alt="basket" />
            {
              newsView()
              //console.log('ss'),
              //newProduct
              //  ? <span className="basket__news">{newProduct}</span> :
              //  (newProduct == 9) ? <span className="basket__news">9+</span> : console.log('ss2')   
            }
          </div>
        </div>
      </div>
    </header >
  )
}

export default Header