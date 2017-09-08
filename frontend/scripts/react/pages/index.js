import HomePage from './HomePage'

const PageComponentsByComponentsName = { HomePage }

export const PageComponentsByName = {}
Object.keys(PageComponentsByComponentsName)
  .forEach(key => {
    const pageName = `${key[0].toLowerCase()}${key.slice(1, -4)}`
    PageComponentsByName[pageName] = PageComponentsByComponentsName[key]
  })
