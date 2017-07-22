const serverSideRender = require('./serverSideRender.js')

function onProdDone (stats) {
  serverSideRender(stats)
}
export default onProdDone
