import { routerMiddleware as createRouterMiddleware } from 'react-router-redux'

export function createMiddlewares ({history}) {
  const routerMiddleware = createRouterMiddleware(history)
  return [
    routerMiddleware
  ]
}
