import startcase from 'lodash.startcase'
import React from 'react'
import { Redirect } from 'react-router'

import App from './containers/App'
import HomePage from './pages/HomePage'
import { PageComponentsByComponentsName } from './views'
import links from '../utils/links'

export function render (router) {
  // unpack
  const { location: { pathname, search }, match: { params } } = router
  const { pageName } = params
  // special content case which is not a page
  const componentName = pageName && `${startcase(pageName)}Page`
  const PageComponent = componentName && PageComponentsByComponentsName[componentName]
  // PageComponent
  if (PageComponent) {
    return (
      <App
        {...params}
        pathname={pathname}
      >
      <PageComponent
        {...params}
      />
    </App>
  )} else {
    // maybe the user typed something for which the first param
    // in the path does not match a known path, so in that
    // case let's return to the home page
    const firstParam = `/${window.location.pathname.split('/')[1]}`
    console.warn('wrongPageName', pageName)
    return (
      <App wrongPageName={firstParam}>
        <HomePage />
      </App>
    )
  }
}

export const redirectToHome = () => '/home'
