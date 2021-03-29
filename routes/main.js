const router = require('express').Router();
const axios = require('../axios');
const { validateLinks } = require('../utils/LinksUtils');

router.route('/:pageNumber').get((req, res) => {
  const pageNumber = req.params.pageNumber;
  if (pageNumber < 1) {
    res.json([]);
  } else {
    axios.get('/Links/Promoted/page/' + pageNumber).then(
      (response) => {
        if (!response.data.error) {
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
