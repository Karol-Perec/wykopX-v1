const router = require('express').Router();
const axios = require('../axios');
const { validateLinks } = require('../utils/LinksUtils');

const categoryTypes = {
  active: 'active',
  newest: 'newest',
  voted: 'voted',
  commented: 'commented',
};

const getApiRouteByCategory = (category, pageNumber) => {
  switch (category) {
    case categoryTypes.active:
      return `/links/upcoming/page/${pageNumber}`;
    case categoryTypes.newest:
      return `/links/upcoming/sort/date/page/${pageNumber}`;
    case categoryTypes.voted:
      return `/links/upcoming/sort/votes/page/${pageNumber}`;
    case categoryTypes.commented:
      return `/links/upcoming/sort/comments/page/${pageNumber}`;
  }
};

router.route('/:category/:pageNumber').get((req, res) => {
  const pageNumber = req.params.pageNumber;
  const category = req.params.category;

  if (pageNumber < 1) {
    res.json([]);
  } else {
    axios.get(getApiRouteByCategory(category, pageNumber)).then(
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
