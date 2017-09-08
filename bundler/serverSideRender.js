import createMemoryHistory from 'history/createMemoryHistory'
import fs from 'fs'
import path from 'path'
import React from 'react'
import ReactDOMServer from 'react-dom/server'

import Root from '../frontend/scripts/react/containers/Root'
import createRootReducer from '../frontend/scripts/reducers'
import config from '../frontend/scripts/utils/config'
import createStore from '../frontend/scripts/utils/store'
import serverConfig from './server.config.js'

// SETUP
const setup = Object.assign({}, config)

// STATE
const initialState = {}

// HISTORY
const history = createMemoryHistory({ basename: '/' })

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

// RENDER
function serverSideRender (stats) {
  const renderedBody = ReactDOMServer.renderToString(<Root history={history}
    setup={setup}
    store={store}
  />)
  const bodyHTML = `<div id="app_div">
      ${renderedBody}
    </div>`
  const fileDir = path.join(serverConfig.contentBase, '_body.html')
  // fs.writeFileSync(fileDir, bodyHTML)
}

export default serverSideRender
