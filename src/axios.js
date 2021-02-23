import axios from 'axios';

const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'https://a2.wykop.pl',
});

instance.interceptors.request.use((config) => {
  config.url += '/appkey/aNd401dAPp'
  // console.log(config);
  return config;
});

export default instance;
