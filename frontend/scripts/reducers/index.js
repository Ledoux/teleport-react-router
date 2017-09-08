import { routerReducer as router } from 'react-router-redux'
import { combineReducers } from 'redux'

export function createRootReducer (config = {}) {
  const rootReducer = combineReducers({
    router
  })
  return rootReducer
}

export default createRootReducer
