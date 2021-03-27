const axios = require('axios');
const { MD5 } = require('crypto-js');
const querystring = require('querystring');

const instance = axios.create({
  baseURL: 'https://a2.wykop.pl',
});

const MAIN_APPKEY = process.env.MAIN_APPKEY;
const SECONDARY_APPKEY = process.env.SECONDARY_APPKEY;
const SECRECT = process.env.SECRECT;

instance.interceptors.request.use((config) => {
  config.url += '/appkey/' + SECONDARY_APPKEY;

  let signContent = SECRECT + config.baseURL + config.url;
  
  if (config.method === 'post') {
    signContent += Object.values(config.data).join(',');
  }
  config.data = querystring.stringify(config.data)
  const apiSign = MD5(signContent).toString();
  config.headers['apisign'] = apiSign;

  return config;
});

module.exports = instance;
