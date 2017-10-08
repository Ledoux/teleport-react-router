import { ConnectedRouter } from 'react-router-redux'

import config from './config'

export function createRoot (history) {
  const setup = Object.assign({}, config,
    typeof window !== 'undefined' && window.__SETUP__)

  const store = createStore({ history,
    setup
  })

  return { history,
    RouterComponent: ConnectedRouter,
    setup
  }
}

export default createRoot
