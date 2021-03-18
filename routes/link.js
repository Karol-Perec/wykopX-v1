const router = require('express').Router();
const axios = require('../axios');
const { validateLinks } = require('../utils/LinksUtils');

router.route('/:id').get((req, res) => {
  const id = req.params.id;
  axios.get(`/Links/Link/${id}/withcomments/true`).then(
    (resp) => {
      if (!resp.data.error) {
        res.json(resp.data.data);
      } else {
        res.json(resp.data.error);
      }
    },
    (err) => {
      res.json(err);
    }
  );
});

module.exports = router;
