import fs from 'fs'
import path from 'path'
import React from 'react'
import ReactDOMServer from 'react-dom/server'

import { contentBase } from './server.config'
import Root from '../frontend/scripts/react/containers/Root'
import root from '../frontend/scripts/roots/server.root'

// RENDER
function serverSideRender (stats) {
  const renderedBody = ReactDOMServer.renderToString(<Root {...root} />)
  const bodyHTML = `<div id="app_div">
      ${renderedBody}
    </div>`
  const fileDir = path.join(contentBase, '_body.html')
  // fs.writeFileSync(fileDir, bodyHTML)
}

export default serverSideRender
