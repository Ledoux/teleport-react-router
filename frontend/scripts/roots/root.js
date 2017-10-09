import { Provider } from 'react-redux'
import { ConnectedRouter } from 'react-router-redux'

import createRootReducer from '../reducers'
import config from '../utils/config'
import createStore from '../utils/store'

export function createRoot (history) {
  const setup = Object.assign({}, config,
    typeof window !== 'undefined' && window.__SETUP__)

  const initialState = typeof window !== 'undefined' && window.__INITIAL_STATE__

  const rootReducer = createRootReducer({ initialState,
    history,
    setup
  })

  const store = createStore({ history,
    initialState,
    rootReducer,
    setup
  })

  return { history,
    ProviderComponent: Provider,
    RouterComponent: ConnectedRouter,
    setup,
    store
  }
}

export default createRoot
