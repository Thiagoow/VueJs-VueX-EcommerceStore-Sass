import { createApp } from 'vue';
import App from './App.vue';

createApp(App).mount('#app');

/*===== Insert products data into API: */
import axios from './api/axios';
import productsArray from './api/generateProducts';
console.log(productsArray);

const headers = {
  'Content-Type': 'text/plain; charset=utf-8'
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
