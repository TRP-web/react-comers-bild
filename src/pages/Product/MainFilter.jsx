import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import './style/MainFilter.scss'
const MainFilter = ({ allGetnereit, viewGenereit, getProductAll, setTestf }) => {
  const dispatch = useDispatch()
  const productAll = useSelector(state => state.productAll.productAll)
  const [optionFilter,] = useState([
    {
      id: '1',
      value: 'No filter'
    },
    {
      id: '2',
      value: 'Name'
    },
    {
      id: '3',
      value: "Prise Low",
    },
    {
      id: '4',
      value: "Prise Lot"
    }
  ])
  const optionChange = (e) => {
    let value = e.target.value
    if (value === 'No filter') {
      getProductAll()
    } else if (value === 'Name') {
      let sort = productAll.sort((a, b) => a.title > b.title ? 1 : -1)
      dispatch({ type: 'PRODUCT_CHENGE', filterArray: sort })
      allGetnereit()
      viewGenereit()
    } else if (value === 'Prise Low') {
      let sort = productAll.sort((a, b) => parseInt(a.prise) > parseInt(b.prise) ? 1 : -1)
      dispatch({ type: 'PRODUCT_CHENGE', filterArray: sort })
      allGetnereit()
      viewGenereit()
    } else if (value === 'Prise Lot') {
      let sort = productAll.sort((a, b) => parseInt(a.prise) < parseInt(b.prise) ? 1 : -1)
      dispatch({ type: 'PRODUCT_CHENGE', filterArray: sort })
      allGetnereit()
      viewGenereit()
    }
  }
  return (
    <div className="catalog__main-filt">
      <select name="filterRov" onChange={optionChange}>
        {
          optionFilter.map((option) => {
            return (
              <option
                value={option.value}
                key={option.id}
              >{option.value}
              </option>
            )
          })
        }
      </select>
    </div>
  )
}

export default MainFilter