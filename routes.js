module.exports = () => {
  return {
    '/': { page: '/' },
    '/404': { page: '/404' },
    '/about': { page: '/about' },
    '/works': { page: '/works' },
    '/work/:id': { page: '/work' },
  }
}