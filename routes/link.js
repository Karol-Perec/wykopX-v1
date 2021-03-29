const router = require('express').Router();
const axios = require('../axios');
const { validateLinks } = require('../utils/LinksUtils');

router.route('/:id').get((req, res) => {
  const id = req.params.id;
  axios.get(`/Links/Link/${id}/withcomments/true`).then(
    (response) => {
      if (!response.data.error) {
        res.json(response.data.data);
      } else {
        res.json(response.data.error);
      }
    },
    (error) => {
      res.status(500).json(error);
    }
  );
});

module.exports = router;
