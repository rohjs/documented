// next.config.js
const worksData = require('./static/data/works')
const routes = require('./routes')

module.exports = {
  exportPathMap: function() {
    const basePathMap = routes
    const workPathMap = worksData.reduce((acc, work) => {
      acc[`/work/${work.id}`] = {
        page: '/work',
        query: {
          id: work.id
        }
      }
      return acc
    }, {})

    const pathMap = {
      ...basePathMap,
      ...workPathMap
    }
    return pathMap
  }
}
