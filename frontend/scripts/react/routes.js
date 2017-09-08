import React from 'react'
import { Redirect } from 'react-router'
import { getLocationSearch } from 'transactions-interface-state'

import render from './render'
import links from '../utils/links'
import { redirectToHome,
  redirectToHomeWithWarning
} from '../utils/redirection'

function getPageProps (router, setup) {
  const { match: { params } } = router
  return Object.assign({}, setup, params)
}

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
    return { exact: true,
      path,
      render: router => render(router, { getPageProps,
        setup
      })
    }
  })).concat(Object.keys(api)
    // APIS HOME WARNING REDIRECTS
    .map(path => {
      return { path: `${path}/*`, render: ({ match }) =>
        <Redirect to={redirectToHomeWithWarning(match)} /> }
    })
  )
}
