import React from 'react'

import context from './context'
import createPage from './page'
import createRoutes from './routes'
import createRender from './render'

function createRoot (config) {

  const { App,
    history,
    Route,
    Router
  } = config

  const setup = Object.assign({}, context,
    typeof window !== 'undefined' && window.__SETUP__)

  const Page = createPage()

  const render = createRender(Object.assign({ Page }, config))

  const routes = createRoutes(Object.assign({ render, setup }, config))

  const Root = () => (
    <Router history={history}>
      <App setup={setup}>
        {
          routes && routes.map((route, index) =>
            <Route key={index} {...route} />
          )
        }
      </App>
    </Router>
  )

  return { Root,
    rootProps: Object.assign({ setup }, config)
  }
}

export default createRoot
