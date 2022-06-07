import axios from './axios';
const END_POINT = 'products';

const headers = {
  'Content-Type': 'text/plain; charset=utf-8',
  //CORS with my ProxyServer that enables it:
  'Access-Control-Allow-Origin':
    'https://cors-proxyserver-thiagoow.herokuapp.com/'
};

export default {
  all() {
    return axios.get(END_POINT, headers);
  },
  show(id) {
    return axios.get(`${END_POINT}/${id}`, headers);
  }
};
