const router = require('express').Router();
const axios = require('../axios');
const { MD5 } = require('crypto-js');
const btoa = require('btoa');
const atob = require('atob');
const querystring = require('querystring');

const SECONDARY_APPKEY = process.env.SECONDARY_APPKEY;
const SECRECT = process.env.SECRECT;

router.route('/getUrl').get((req, res) => {
  const redirectUrl = req.query.redirectUrl;
  res.json(generateConnectURL(redirectUrl));
});

router.route('/login').post((req, res) => {
  const connectData = JSON.parse(atob(req.body.connectData));

  if (connectData.appkey !== SECONDARY_APPKEY) {
    res.status(422).send('Connect data for wrong appkey');
  } else if (
    connectData.sign !==
    MD5(
      SECRECT + connectData.appkey + connectData.login + connectData.token
    ).toString()
  ) {
    res.status(422).send('Manipulated connect data');
  } else {
    axios
      .post('/Login/Index', {
        login: connectData.login,
        accountkey: connectData.token,
      })
      .then((response) => {
        console.log(response);
        res.json({
          profile: response.data.data.profile,
          accountkey: connectData.token,
          token: response.data.data.userkey,
        });
      })
      .catch((error) => {
        res.status(500).json(error);
      });
  }
});

router.route('/token').post((req, res) => {
  axios
    .post('/Login/Index', {
      login: req.body.login,
      accountkey: req.body.accountkey,
    })
    .then((response) => {
      console.log(response);
      res.json({
        profile: response.data.data.profile,
        accountkey: req.query.accountkey,
        token: response.data.data.userkey,
      });
    })
    .catch((error) => {
      res.status(500).json(error);
    });
});

function generateConnectURL(redirectUrl) {
  let url = `https://a2.wykop.pl/login/connect/appkey/${SECONDARY_APPKEY}/`;
  if (redirectUrl) {
    url += `redirect/${encodeURIComponent(btoa(redirectUrl))}/`;
    url += `secure/${MD5(SECRECT + redirectUrl)}/`;
  }
  return url;
}

module.exports = router;
