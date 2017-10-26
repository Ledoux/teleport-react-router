import HomePage from './HomePage'

const ComponentsByName = { HomePage }

export const PageComponentsByName = {}
Object.keys(ComponentsByName)
  .forEach(key => {
    const pageName = `${key[0].toLowerCase()}${key.slice(1, -4)}`
    PageComponentsByName[pageName] = PageComponentsByComponentsName[key]
  })
