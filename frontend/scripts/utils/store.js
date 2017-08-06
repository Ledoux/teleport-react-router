import { routerMiddleware as createRouterMiddleware } from 'react-router-redux'
import { applyMiddleware,
  compose,
  createStore as _createStore
} from 'redux'

import { createMiddlewares } from './middlewares'
import { createRun } from './run'

export default function createStore ({history, rootReducer}) {
  // MIDDLEWARES
  const middlewares = createMiddlewares({history, rootReducer})

  // ENHANCERS
  const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose
  const hydratedState = (typeof window !== 'undefined' && window.__INITIAL_STATE__) || {}
  const storeEnhancer = composeEnhancers(
    applyMiddleware(...middlewares)
  )

  // STORE
  const store = _createStore(
    rootReducer,
    hydratedState,
    storeEnhancer
  )

  // RUN
  createRun({middlewares, store})

  // return
  return store
}
