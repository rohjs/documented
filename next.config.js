const path = require('path')
const worksData = require('./static/data/works')
const routes = require('./routes')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  exportPathMap: async function (defaultPathMap) {
    const basePathMap = routes
    const workPathMap = worksData.reduce((acc, work) => {
      acc[`/works/${work.id}`] = {
        page: '/works/[id]',
        query: {
          id: work.id
        }
      }
      return acc
    }, {})

    return {
      ...defaultPathMap,
      ...basePathMap,
      ...workPathMap
    }
  }
}
