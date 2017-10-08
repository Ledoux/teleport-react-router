export function getPageProps (router, setup) {
  const { match: { params } } = router
  return Object.assign({}, setup, params)
}
