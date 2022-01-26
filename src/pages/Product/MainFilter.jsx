import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import './style/MainFilter.scss'
const MainFilter = () => {
  const dispatch = useDispatch()
  const productFilter = useSelector(state => state.productAll.productFilter)
  const productGet = useSelector(state => state.productAll.productGet)

  const [activeSelect, setActiveSelect] = useState("Name")
  const [optionFilter,] = useState([
    {
      id: '1',
      value: 'Name'
    },
    {
      id: '2',
      value: "Prise Low",
    },
    {
      id: '3',
      value: "Prise Lot"
    }
  ])
  useEffect(() => {
    if (productFilter.length > 0) {
      if (activeSelect === 'Name') {
        let copy = Object.assign([], productFilter)
        let sort = copy.sort((a, b) => a.title > b.title ? 1 : -1)
        dispatch({ type: 'PRODUCT_SORT', productSort: sort })

      } else if (activeSelect === 'Prise Low') {
        let copy = Object.assign([], productFilter)
        let sort = copy.sort((a, b) => parseInt(a.prise) > parseInt(b.prise) ? 1 : -1)
        dispatch({ type: 'PRODUCT_SORT', productSort: sort })

      } else if (activeSelect === 'Prise Lot') {
        let copy = Object.assign([], productFilter)
        let sort = copy.sort((a, b) => parseInt(a.prise) < parseInt(b.prise) ? 1 : -1)
        dispatch({ type: 'PRODUCT_SORT', productSort: sort })
      }
    }
  }, [productFilter, productGet, activeSelect, dispatch])

  useEffect(() => {
    if (productFilter.length === 0) {
      console.log(productFilter)
      console.log('0')
      if (activeSelect === 'Name') {
        let copy = Object.assign([], productGet)
        let sort = copy.sort((a, b) => a.title > b.title ? 1 : -1)
        console.log(sort)
        dispatch({ type: 'PRODUCT_SORT', productSort: sort })

      } else if (activeSelect === 'Prise Low') {
        let copy = Object.assign([], productGet)
        let sort = copy.sort((a, b) => parseInt(a.prise) > parseInt(b.prise) ? 1 : -1)
        dispatch({ type: 'PRODUCT_SORT', productSort: sort })

      } else if (activeSelect === 'Prise Lot') {
        let copy = Object.assign([], productGet)
        let sort = copy.sort((a, b) => parseInt(a.prise) < parseInt(b.prise) ? 1 : -1)
        dispatch({ type: 'PRODUCT_SORT', productSort: sort })
      }
    }
  }, [activeSelect, dispatch])
  return (
    <div className="catalog__main-filt">
      <select name="filterRov" onChange={(e => setActiveSelect(e.target.value))}>
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