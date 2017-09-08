require('./utils/styles')

import createBrowserHistory from 'history/createBrowserHistory'
import React from 'react'
import ReactDOM from 'react-dom'

import Root from './react/containers/Root'
import createRootReducer from './reducers'
import config from './utils/config'
import { onDomReady } from './utils/dom'
import createStore from './utils/store'

// SETUP
const setup = Object.assign({}, config,
  typeof window !== 'undefined' && window.__SETUP__)

// STATE
const initialState = typeof window !== 'undefined' && window.__INITIAL_STATE__

// HISTORY
const history = createBrowserHistory({ basename: '/' })

// REDUCER
const rootReducer = createRootReducer({ initialState,
  setup
})

// STORE
const store = createStore({ history,
  initialState,
  rootReducer,
  setup
})

// DOM
export function domReady () {
  return new Promise(function (resolve) {
    var state = document.readyState
    if (state === 'complete' ||
      state === 'loaded' ||
      state === 'interactive') {
      return resolve()
    }
    document.addEventListener('DOMContentLoaded', function () {
      resolve()
    })
  })
}

// READY
domReady().then(() => {
  // INIT
  onDomReady && onDomReady({ history,
    setup,
    store
  })
  // RENDER
  const reactDivElement = document.getElementById('app_div')
  if (!reactDivElement) {
    return
  }
  if (!module.hot) {
    // production
    ReactDOM.render(<Root history={history}
      setup={setup}
      store={store}
    />, reactDivElement)
  } else {
    // dev
    const AppContainer = require('react-hot-loader').AppContainer
    ReactDOM.render(
      <AppContainer>
        <Root history={history}
          setup={setup}
          store={store}
        />
      </AppContainer>
      , reactDivElement)
    module.hot.accept('./react/containers/Root', () => {
      const NextRoot = require('./react/containers/Root').default
      ReactDOM.render(
        <AppContainer>
          <NextRoot history={history}
            setup={setup}
            store={store}
          />
        </AppContainer>,
        reactDivElement
      )
    })
  }
})
