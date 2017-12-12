import { Redirect, Route, Router } from 'react-router-dom'

import App from './App'
import pageView, { PageComponentsByName } from './pages'
import createRoot from '../utils/root'

const createBrowserRoot = history => createRoot({ App,
  history,
  PageComponentsByName,
  Redirect,
  Route,
  Router,
  views: [
    pageView
  ]
})

export default createBrowserRoot
