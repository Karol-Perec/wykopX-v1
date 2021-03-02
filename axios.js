const axios = require('axios');
const { MD5 } = require('crypto-js');

const instance = axios.create({
  baseURL: 'https://a2.wykop.pl',
});

const MAIN_APPKEY = 'aNd401dAPp';
const SECONDARY_APPKEY = '482VSi3YyC';
const SECRECT = 'v8RO1EXXQZ';

instance.interceptors.request.use((config) => {
  config.url += '/appkey/' + MAIN_APPKEY;

  // let signContent = SECRECT + config.baseURL + config.url;
  // if (config.method === 'POST') {
  //   signContent += '';
  // }
  // config.headers['Content'] = 'application/x-www-form-urlencoded';
  // const apiSign = MD5(signContent);
  // config.headers['apisign'] = apiSign;

  return config;
});

module.exports = instance;
