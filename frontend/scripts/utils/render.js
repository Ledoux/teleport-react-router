import React from 'react'

import links from '../utils/links'

export default function createRender ({ PageComponentsByName,
  Redirect
}) {
  const HomePage = PageComponentsByName.home
  function render (router, config = {}) {
    // unpack
    const { match: { params } } = router
    const { pageName } = params
    const { getPageProps,
      getRedirectPathname,
      setup
    } = config
    // redirect
    const redirectPathName = getRedirectPathname && getRedirectPathname(router, config)
    if (redirectPathName) {
      return <Redirect to={redirectPathname} />
    }
    // special content case which is not a page
    const PageComponent = PageComponentsByName[pageName]
    // PageComponent
    if (PageComponent) {
      // page props
      const pageProps = getPageProps && getPageProps(router, setup)
      // return
      return <PageComponent {...pageProps} />
    } else {
      console.warn(`Did not find a page like ${componentName} in PageComponentsByComponentsName`)
      return <HomePage wrongPageName={pageName} />
    }
  }
  return render
}
