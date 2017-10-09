import createMemoryHistory from 'history/createMemoryHistory'

import createRoot from './root'

const root = createRoot(createMemoryHistory({ basename: '/' }))

export default root
