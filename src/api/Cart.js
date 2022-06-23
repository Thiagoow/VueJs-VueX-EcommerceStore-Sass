import axios from './axios';
const END_POINT = 'cart';

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

  store(data) {
    return axios.post(END_POINT, data, headers);
  },

  delete(id) {
    return axios.delete(`${END_POINT}/${id}`, headers);
  },

  deleteAll(IDsArray) {
    IDsArray.forEach((id) => {
      axios.delete(`${END_POINT}/${id}`, headers);
    });
  }
};
