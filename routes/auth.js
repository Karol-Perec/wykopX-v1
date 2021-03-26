const router = require('express').Router();
const { MD5 } = require('crypto-js');
const btoa = require('btoa');
const atob = require('atob');

const SECONDARY_APPKEY = process.env.SECONDARY_APPKEY;
const SECRECT = process.env.SECRECT;

router.route('/getUrl').get((req, res) => {
  const redirectUrl = req.query.redirectUrl;
  res.json(generateConnectURL(redirectUrl));
});

router.route('/login').get((req, res) => {
  const connectData = JSON.parse(atob(req.query.connectData));

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
    res.json({ login: connectData.login, token: connectData.token });
  }
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
