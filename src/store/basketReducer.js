const defaultState = {
  basket: [
  ],
  newProduct: 0,
  total: 0,
}



export const basketReducer = (state = defaultState, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return {
        ...state,
        basket: [...state.basket, ...action.product],
        newProduct: state.newProduct + 1
      }
    case "REMOVE_PRODUCT":
      return {
        ...state,
        basket: state.basket.filter(product => product.id !== action.id),
        newProduct: state.newProduct - 1
      }
    case "INCRIMENT_COUNT":
      return {
        ...state,
        basket: state.basket.map(elem => {
          if (elem.id === action.productId) {
            elem.count += 1
          }
          return elem
        })
      }
    case "DECRIMENT_COUNT":
      return {
        ...state,
        basket: state.basket.map(elem => {
          if (elem.id === action.productId) {
            elem.count -= 1
          }
          return elem
        })
      }
    case "TOTAL_CASH":
      if (state.basket.length) {
        return {
          ...state,
          total: state.basket.reduce((total, item) => {
            return total + parseInt(item.prise) * item.count
          }, 0)
        }
      } else {
        return {
          ...state,
          total: 0
        }
      }

    default:
      return state
  }

}
