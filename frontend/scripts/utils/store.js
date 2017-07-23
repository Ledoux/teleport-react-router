import { routerMiddleware as createRouterMiddleware } from 'react-router-redux'
import { applyMiddleware,
  compose,
  createStore as _createStore
} from 'redux'

import { createMiddlewares } from './middlewares'

export default function createStore ({history, rootReducer}) {
  // MIDDLEWARES
  const middlewares = createMiddlewares({history, rootReducer})

  // ENHANCERS
  const composeEnhancers = (window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose
  const hydratedState = (window && window.__INITIAL_STATE__) || {}
  const storeEnhancer = composeEnhancers(
    applyMiddleware(...middlewares)
  )

  // STORE
  const store = _createStore(
    rootReducer,
    hydratedState,
    storeEnhancer
  )

  // return
  return store
}
