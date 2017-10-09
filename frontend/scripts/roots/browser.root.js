import createBrowserHistory from 'history/createBrowserHistory'

import createRoot from './root'

const root = createRoot(createBrowserHistory({ basename: '/' }))

export default root
