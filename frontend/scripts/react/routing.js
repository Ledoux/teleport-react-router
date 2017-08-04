import React from 'react'
import { Redirect } from 'react-router'

import render from './render'
import links from '../utils/links'
import { redirectToHome } from '../utils/redirection'

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
