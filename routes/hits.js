const router = require('express').Router();
const axios = require('../axios');
const { validateLinks } = require('../utils/LinksUtils');

const categoryTypes = {
  daily: 'dnia',
  weekly: 'tygodnia',
  monthly: 'miesiaca',
  yearly: 'roku',
};

router.route('/:category/:pageNumber').get((req, res) => {
  const pageNumber = req.params.pageNumber;
  const category = req.params.category;

  if (pageNumber < 1) {
    res.json([]);
  } else {
    axios.get(`/hits/${category}/page/${pageNumber}`).then(
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
