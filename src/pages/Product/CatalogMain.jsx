import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import Product from '../../components/Product'
import MainFilter from './MainFilter'
import "./style/CatalogMain.scss"

const CatalogMain = () => {
  const productGet = useSelector(state => state.productAll.productGet)
  const productSort = useSelector(state => state.productAll.productSort)
  const [pageAll, setPageAll] = useState(1)
  const [productView, setProductView] = useState([])
  const [pageView, setPageView] = useState(1)
  const [pageArray, setPageArray] = useState([])
  const [hasProducts, setHasProducts] = useState(true)
  const dispatch = useDispatch()
  const getProductAll = async () => {
    axios.get("https://trp-web.github.io/React-comers/json/product/productAll.json")
      .then(res => {
        dispatch({ type: 'PRODUCT_GET', productGet: res.data })
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
    console.log(productSort);
    if (productSort[0] === 'no products') {
      if (hasProducts === true) {
        setHasProducts(false)
        setPageAll(1)
      }
      console.log('no')
    } else {
      if (hasProducts === false) {
        setHasProducts(true)
      }
      if (productSort.length === 0) {
        setProductView(productGet.slice((pageView - 1) * 15, pageView * 15 - 1))
      } else {
        setProductView(productSort.slice((pageView - 1) * 15, pageView * 15 - 1))
        setPageAll(Math.ceil(productSort.length / 15))
      }
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

  useEffect(allGetnereit, [productView, productSort, pageAll])

  useEffect(viewGenereit, [pageView, productSort])


  useEffect(() => {
    getProductAll()
  }, [])

  return (
    <div className='catalog-inner'>
      <h1 className="catalog__title">
        Catalog
      </h1>
      <MainFilter />
      <div className="catalog__inner-product">
        {
          hasProducts ?
            productView.map(product => {
              return (
                <Product product={product} key={product.id} />
              )
            })
            :
            <div className='no-product'>no product</div>
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