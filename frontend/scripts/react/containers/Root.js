import React, { Component } from 'react'
import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'

import App from './App'
import { routes } from '../routing'

class Root extends Component {
  render () {
    return (
      <Provider store={this.props.store}>
        <ConnectedRouter history={this.props.history}>
          <div>
          {
            routes.map((route, index) =>
              <Route key={index} {...route} />
            )
          }
          </div>
        </ConnectedRouter>
      </Provider>
    )
  }
}

export default Root
