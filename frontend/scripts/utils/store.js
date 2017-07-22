import { routerMiddleware as createRouterMiddleware } from 'react-router-redux'
import { applyMiddleware,
  compose,
  createStore
} from 'redux'

export default function createStore ({history, rootReducer}) {
  // MIDDLEWARES
  const routerMiddleware = createRouterMiddleware(history)

  // ENHANCERS
  const composeEnhancers = (window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose
  const hydratedState = (window && window.__INITIAL_STATE__) || {}
  const storeEnhancer = composeEnhancers(
    applyMiddleware(routerMiddleware)
  )

  // STORE
  const store = createStore(
    rootReducer,
    hydratedState,
    storeEnhancer
  )

  // return
  return store
}
