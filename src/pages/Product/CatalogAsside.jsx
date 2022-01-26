import React, { useEffect, useState } from 'react'
import "./style/CatalogAsside.scss"
import Title from "../../components/UI/Title/Title"
import axios from 'axios'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
const CatalogAsside = () => {
  const [activeFilter, setActiveFilter] = useState('no catigories')
  const [radio, setRadio] = useState([])
  const dispatch = useDispatch()
  const productGet = useSelector(state => state.productAll.productGet)

  const setAcitve = (e) => {
    setActiveFilter(e.target.value)
  }
  const getRadio = () => {
    axios.get('https://trp-web.github.io/React-comers/json/catigories/catigories.json')
      .then(resalt => {
        setRadio(resalt.data)
      })
  }
  useEffect(() => {
    if (activeFilter === 'no catigories') {
      dispatch({ type: 'PRODUCT_FILTER', productFilter: productGet })
    } else {
      let filter = productGet.filter(product => product.catigorie === activeFilter)
      console.log(filter);
      if (filter.length > 0) {
        dispatch({ type: 'PRODUCT_FILTER', productFilter: filter })
        console.log('> 0')
      } else {
        console.log('1')
        dispatch({ type: 'PRODUCT_FILTER', productFilter: ['no products'] })
      }
    }
  }, [activeFilter])
  useEffect(() => {
    getRadio()
  }, [])
  return (
    <div className='asside'>
      <Title style={{ textAlign: 'center' }}>Filter</Title>
      <div className="radio" onChange={(e) => setAcitve(e)}>
        <div>
          <div key={radio.id} className='radio__inner'>
            <input
              type="radio"
              value='no catigories'
              name='catigories'
            />
            <span>no catigories</span>
          </div>
        </div>
        {
          radio.map(radio => {
            return (
              <div key={radio.id} className='radio__inner'>
                <input
                  type="radio"
                  value={radio.catigories}
                  name='catigories'
                />
                <img src={radio.icon} alt="" width='36' />
                <span>{radio.catigories}</span>
              </div>
            )
          })
        }
      </div>
    </div>
  )
}

export default CatalogAsside