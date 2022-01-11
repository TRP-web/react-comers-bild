import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { basketReducer } from "./basketReducer"
import { catalogReduser } from "./catalogReducer";


const rootReducer = combineReducers({
  basket: basketReducer,
  productAll: catalogReduser
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))