import createMemoryHistory from 'history/createMemoryHistory'
import fs from 'fs'
import path from 'path'
import React from 'react'
import ReactDOMServer from 'react-dom/server'

import Root from '../frontend/scripts/react/containers/Root'
import rootReducer from '../frontend/scripts/reducers'
import { BASE_NAME } from '../frontend/scripts/utils/config'
import createStore from '../frontend/scripts/utils/store'
import serverConfig from './server.config.js'

// HISTORY
const history = createMemoryHistory({ basename: BASE_NAME })

// STORE
const store = createStore({ history, rootReducer })

// RENDER
function serverSideRender (stats) {
  const renderedBody = ReactDOMServer.renderToString(<Root
    history={history}
    store={store}
  />)
  const bodyHTML = `<div id="app_div">
      ${renderedBody}
    </div>`
  const fileDir = path.join(serverConfig.contentBase, '_body.html')
  // fs.writeFileSync(fileDir, bodyHTML)
}

export default serverSideRender
