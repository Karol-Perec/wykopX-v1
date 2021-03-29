const router = require('express').Router();
const axios = require('../axios');
const { validateLinks } = require('../utils/LinksUtils');

router.route('/:category/:pageNumber').get((req, res) => {
  const pageNumber = req.params.pageNumber;
  const category = req.params.category;

  if (pageNumber < 1) {
    res.json([]);
  } else {
    axios.get(`/hits/${category}/page/${pageNumber}`).then(
      (response) => {
        if (!resp.data.error) {
          const validatedLinks = validateLinks(response.data.data);
          res.json(validatedLinks);
        } else {
          res.json(response.data.error);
        }
      },
      (error) => {
        res.status(500).json(error);
      }
    );
  }
});

module.exports = router;
