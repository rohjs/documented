// next.config.js
const worksData = require('./static/data/works')

module.exports = {
  exportPathMap: function () {
    const basePathMap = {
      '/': { page: '/' },
      '/not-found': { page: '/not-found' },
      '/about': { page: '/about' },
      '/works': { page: '/works' },
      '/work': { page: '/work' },
    }
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
      ...workPathMap,
    }
    return pathMap
  }
}
