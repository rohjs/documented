// next.config.js
module.exports = {
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/about': { page: '/about'},
      '/works': { page: '/works'}
    }
  }
}
