import React from 'react'

import config from './config'
import createRoutes from './routes'
import createRender from './render'

function createRoot ({ App,
  history,
  Route,
  Router
}) {

  const setup = Object.assign({}, config,
    typeof window !== 'undefined' && window.__SETUP__)

  const render = createRender(config)

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
