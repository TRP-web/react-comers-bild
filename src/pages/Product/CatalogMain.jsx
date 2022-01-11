import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import Product from '../../components/Product'
import MainFilter from './MainFilter'
import "./style/CatalogMain.scss"

const CatalogMain = () => {
  const productAll = useSelector(state => state.productAll.productAll)
  console.log(productAll)
  const [pageAll, setPageAll] = useState(1)
  const [productView, setProductView] = useState([])
  const [pageView, setPageView] = useState(1)
  const [pageArray, setPageArray] = useState([])
  const dispatch = useDispatch()
  const getProductAll = async () => {
    axios.get("https://trp-web.github.io/React-comers/json/product/productAll.json")
      .then(res => {
        dispatch({ type: 'PRODUCT_CHENGE', filterArray: res.data })
        setPageAll(Math.ceil(res.data.length / 15))
        setProductView(res.data.slice((pageView - 1) * 15, pageView * 15 - 1))
      })
  }
  const allGetnereit = () => {
    let localArr = []
    for (let index = 0; index < pageAll; index++) {
      localArr.push({ navNumber: index + 1 })
      setPageArray(localArr)
    }
  }
  const viewGenereit = () => {
    if (productAll) {
      (function () {
        setProductView(productAll.slice((pageView - 1) * 15, pageView * 15 - 1))
      }())
    }
  }
  const clickPage = (pageNamber) => {
    setPageView(pageNamber)
  }

  const prevPage = () => {
    if (pageView > 1) {
      setPageView(pageView - 1)
    }
  }

  const nextPage = () => {
    if (pageAll > pageView) {
      setPageView(pageView + 1)
    }
  }

  useEffect(viewGenereit, [pageView, productAll])

  useEffect(allGetnereit, [pageAll, productAll])

  useEffect(() => {
    getProductAll()
  }, [])

  return (
    <div>
      <h1 className="catalog__title">
        Catalog
      </h1>
      <MainFilter
        allGetnereit={allGetnereit}
        viewGenereit={viewGenereit}
        getProductAll={getProductAll}
      />
      <div className="catalog__inner-product">
        {
          productView.map(product => {
            return (
              <Product product={product} key={product.id} />
            )
          })
        }
      </div>
      <div className="navigation">
        <div className="navigation__prev" onClick={prevPage}>
          {'<'}
        </div>
        {
          pageArray.map(page => {
            return (
              page.navNumber === pageView ?
                <div className="navigation__block active" key={page.navNumber} onClick={() => clickPage(page.navNumber)}>
                  {page.navNumber}
                </div>
                :
                <div className="navigation__block" key={page.navNumber} onClick={() => clickPage(page.navNumber)}>
                  {page.navNumber}
                </div>
            )
          })
        }
        <div className="navigation__next" onClick={nextPage}>
          {'>'}
        </div>
      </div>
    </div>
  )
}

export default CatalogMain