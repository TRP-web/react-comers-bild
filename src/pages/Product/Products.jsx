import React from 'react'
import CatalogAsside from './CatalogAsside'
import CatalogMain from './CatalogMain'
import MainFilter from './MainFilter'
import "./style/Product.scss"

const Products = () => {
  return (
    <div className="container">
      <div className="catalog__inner">
        <CatalogAsside />
          <CatalogMain />
      </div>
    </div>
  )
}

export default Products