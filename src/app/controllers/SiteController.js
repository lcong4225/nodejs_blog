class SiteController {
  //[GET] /
  index(req, res) {
    res.render('home')
  }

  //[GET] /seach
  search(req, res) {
    res.render('search')
  }
}

module.exports = new SiteController()
