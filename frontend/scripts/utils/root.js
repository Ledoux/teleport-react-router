import createBrowserHistory from 'history/createBrowserHistory'
import { Router } from 'react-router'

import config from './config'

const setup = Object.assign({}, config,
  typeof window !== 'undefined' && window.__SETUP__)

const history = createBrowserHistory({ basename: '/' })

const root = { history,
  RouterComponent: Router,
  setup
}

export default root
