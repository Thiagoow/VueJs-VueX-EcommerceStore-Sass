import axios from './axios';
const END_POINT = 'favorites';

export default {
  all() {
    return axios.get(END_POINT);
  },

  store(data) {
    return axios.post(END_POINT, data);
  },

  delete(id) {
    return axios.delete(`${END_POINT}/${id}`);
  },

  deleteAll() {
    return axios.delete(END_POINT);
  }
};
