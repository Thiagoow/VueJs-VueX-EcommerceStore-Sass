import axios from 'axios';

export default axios.create({
  baseURL: 'https://api-vuex-store.herokuapp.com'
  // ☝🏽 Se quiser rodar apenas localmente, substitua por: "http://localhost:3000"
});
