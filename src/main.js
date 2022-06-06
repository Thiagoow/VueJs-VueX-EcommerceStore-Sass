import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index.js';

const app = createApp(App);
app.use(router);
app.mount('#app');

/*===== Insert products data into API: 
import axios from './api/axios';
import productsArray from './api/generateProducts';
console.log(productsArray);

const headers = {
  'Content-Type': 'text/plain; charset=utf-8',
  //CORS with my ProxyServer that enables it:
  'Access-Control-Allow-Origin':
    'https://cors-proxyserver-thiagoow.herokuapp.com/'
};

for (let i = 0; i < productsArray.length; i++) {
  axios
    .post('/products', productsArray[i], headers)
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
}
*/
