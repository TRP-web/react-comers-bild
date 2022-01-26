const defaultState = {
  productGet: [],
  productFilter: [],
  productSort: []
}

export const catalogReduser = (state = defaultState, action) => {
  switch (action.type) {
    case "PRODUCT_GET":
      return {
        ...state,
        productGet: action.productGet,

      }
    case "PRODUCT_FILTER":
      return {
        ...state,
        productFilter: action.productFilter
      }
    case "PRODUCT_SORT":
      return {
        ...state,
        productSort: action.productSort
      }
    default:
      return state
  }

}