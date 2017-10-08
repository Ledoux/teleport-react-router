import React from 'react'
import { Redirect } from 'react-router'

import render from './render'
import links from '../utils/links'
import { getPageProps } from './utils/page'
import { redirectToHome,
  redirectToHomeWithWarning
} from '../utils/redirection'

export function createRoutes (config = {}) {
  const { setup } = config
  const api = setup.api || {}
  return [
    // ROOT HOME REDIRECT
    {
      exact: true,
      path: '/',
      render: () => <Redirect to={redirectToHome()} />
    }
  ].concat(links.map(path => {
    return {
      exact: true,
      path,
      render: router => render(router, { getPageProps,
        setup
      })
    }
  })).concat([
    // WRONG TOO MANY SLASHES URLS WARNING REDIRECTS
    {
      exact: true,
      path: `${links.slice(-1)[0]}/*`,
      render: ({ match }) =>
        <Redirect to={redirectToHomeWithWarning(match)} />
    }
  ]).concat(Object.keys(api)
    // APIS HOME WARNING REDIRECTS
    .map(path => {
      return { path: `${path}/*`,
        render: ({ match }) =>
          <Redirect to={redirectToHomeWithWarning(match)} />
      }
    })
  )
}
