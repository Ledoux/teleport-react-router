import React from 'react'
import { Redirect } from 'react-router'

import { redirectToHome,
  render } from './navigation'
import links from '../utils/links'

export const routes = [
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
    render
  }
}))
