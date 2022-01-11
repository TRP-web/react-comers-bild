import axios from 'axios'
import React, { useEffect, useState } from 'react'
import '../style/ProductsView.scss'
import Product from './Product'
import Title from './UI/Title/Title'

const ProductsView = () => {
  const [products, setProducts] = useState([])
  const productGet = async () => {
    axios.get('https://trp-web.github.io/React-comers/json/product/products.json')
      .then(res => {
        setProducts(res.data)
      })
  }
  const productMore = async () => {
    if (products.length <= 6) {
      axios.get('https://trp-web.github.io/React-comers/json/product/porductMore.json')
        .then(res => {
          setProducts([...products, ...res.data])
        })
    }
  }
  useEffect(() => {
    productGet()
  }, [])


  return (
    <div className="product">
      <Title>Popular</Title>
      <div className="product__inner">
        {
          products.map(product => {
            return (
              <Product product={product} key={product.id} />
            )
          })
        }
      </div>
      <div className="product__more" onClick={productMore}>
        <span>Show More...</span>
        <img src="/img/arrowmore.svg" alt="arrow" />
      </div>
    </div>
  )
}

export default ProductsView