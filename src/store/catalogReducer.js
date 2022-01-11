const defaultState = {
  productAll: []
}

export const catalogReduser = (state = defaultState, aciton) => {
  switch (aciton.type) {
    case "PRODUCT_CHENGE":
      return {
        ...state,
        productAll: aciton.filterArray
      }
    default:
      return state
  }

}