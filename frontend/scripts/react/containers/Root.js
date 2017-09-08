import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'

import App from './App'
import { createRoutes } from '../routes'

class Root extends Component {
  constructor (props) {
    super(props)
    this.state = { routes: createRoutes(props) }
  }
  render () {
    const { history,
      setup,
      store
    } = this.props
    const { routes } = this.state
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <App setup={setup}>
            {
              routes && routes.map((route, index) =>
                <Route key={index}
                  {...route}
                />
              )
            }
          </App>
        </ConnectedRouter>
      </Provider>
    )
  }
}

export default Root
