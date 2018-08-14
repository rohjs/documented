// next.config.js
<<<<<<< HEAD
module.exports = {
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/about': { page: '/about'},
      '/works': { page: '/works'}
    }
=======
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
>>>>>>> bd990ecbe403cbb9af33a8ecb8aa66cce0358de5
  }
}
