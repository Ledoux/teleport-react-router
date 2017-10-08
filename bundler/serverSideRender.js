import createMemoryHistory from 'history/createMemoryHistory'
import fs from 'fs'
import path from 'path'
import React from 'react'
import ReactDOMServer from 'react-dom/server'

import serverConfig from './server.config'
import Root from '../frontend/scripts/react/containers/Root'
import createRoot from '../frontend/scripts/utils/root'

// ROOT
const root = createRoot(createMemoryHistory({ basename: '/' }))

// RENDER
function serverSideRender (stats) {
  const renderedBody = ReactDOMServer.renderToString(<Root {...root} />)
  const bodyHTML = `<div id="app_div">
      ${renderedBody}
    </div>`
  const fileDir = path.join(serverConfig.contentBase, '_body.html')
  // fs.writeFileSync(fileDir, bodyHTML)
}

export default serverSideRender
