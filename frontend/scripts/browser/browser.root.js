import { Redirect, Route } from 'react-router-dom'

import App from './App'
import { PageComponentsByName } from './pages'
import createRoot from '../utils/root'

const createBrowserRoot = history => createRoot({ App,
  history,
  PageComponentsByName,
  Redirect,
  Route
})

export default createBrowserRoot
