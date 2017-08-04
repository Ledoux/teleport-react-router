import startcase from 'lodash.startcase'
import React from 'react'
import { Redirect } from 'react-router'

import App from './containers/App'
import HomePage from './pages/HomePage'
import { PageComponentsByComponentsName } from './views'
import { IS_DEVELOPMENT } from '../utils/config'
import links from '../utils/links'

export default function render (router, config = {}) {
  // unpack
  const { history,
    location: { pathname, search },
    match: { params }
  } = router
  const { pageName } = params
  const { getAppProps,
    getPageProps,
    getRedirectPathname
  } = config
  // redirect
  const redirectPathName = getRedirectPathname && getRedirectPathname(router, config)
  if (redirectPathName) {
    return <Redirect to={redirectPathname} />
  }
  // special content case which is not a page
  const componentName = pageName && `${startcase(pageName)}Page`
  const PageComponent = componentName && PageComponentsByComponentsName[componentName]
  // PageComponent
  if (PageComponent) {
    // app props
    const appProps = (getAppProps && getAppProps(router, config)) || Object.assign({
      history,
      pathname,
      search
    }, params)
    // page props
    const pageProps = (getPageProps && getPageProps(router, config)) || Object.assign({
      history,
      pathname,
      search
    }, params)
    // return
    return (
      <App {...appProps} >
        <PageComponent {...pageProps} />
      </App>
    )
  } else {
    if (IS_DEVELOPMENT) {
      console.warn(`Did not find a page like ${componentName} in PageComponentsByComponentsName`)
    }
    // maybe the user typed something for which the first param
    // in the path does not match a known path, so in that
    // case let's return to the home page
    const firstParam = `/${window.location.pathname.split('/')[1]}`
    return (
      <App wrongPageName={firstParam}>
        <HomePage />
      </App>
    )
  }
}
