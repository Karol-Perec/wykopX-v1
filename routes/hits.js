const router = require('express').Router();
const axios = require('../axios');
const { validateLinks } = require('../utils/LinksUtils');

router.route('/:pageNumber').get((req, res) => {
  const pageNumber = req.params.pageNumber;
  if (pageNumber < 1) {
    res.json([]);
  } else {
    axios.get('/Hits/Week/page/' + pageNumber).then(
      (resp) => {
        if (!resp.data.error) {
          const validatedLinks = validateLinks(resp.data.data);
          res.json(validatedLinks);
        } else {
          res.json(resp.data.error);
        }
      },
      (err) => {
        res.json(err);
      }
    );
  }
});

module.exports = router;
