import axios from './axios';
const END_POINT = 'products';

export default {
  all() {
    return axios.get(END_POINT);
  },
  show(id) {
    return axios.get(`${END_POINT}/${id}`);
  }
};
