import React, { Component } from 'react'
import { Route } from 'react-router-dom'

import App from './App'
import { createRoutes } from '../routes'

class Root extends Component {
  constructor (props) {
    super(props)
    this.state = { routes: createRoutes(props) }
  }
  render () {
    const { history,
      ProviderComponent,
      RouterComponent,
      setup,
      store
    } = this.props
    const { routes } = this.state
    const RouterElement = (
      <RouterComponent history={history}>
        <App setup={setup}>
          {
            routes && routes.map((route, index) =>
              <Route key={index}
                {...route}
              />
            )
          }
        </App>
      </RouterComponent>
    )
    return ProviderComponent
    ? (
        <ProviderComponent store={store}>
          {RouterElement}
        </ProviderComponent>
      )
    : RouterElement
  }
}

export default Root
