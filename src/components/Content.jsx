import React from 'react'
import Slider from './Slider'
import '../style/Content.scss'
import ProductsView from './ProductView'
import ActionBanner from './ActionBanner'

const Content = () => {
  return (
    <div className="content">
      <Slider></Slider>
      <ProductsView></ProductsView>
      <ActionBanner/>
    </div>
  )
}

export default Content