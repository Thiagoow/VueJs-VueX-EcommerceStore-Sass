import axios from 'axios';
const APIkey = 'a936a97a7b6448430a09401f17ec508f';
const END_POINT = `/trending/tv/week?api_key=${APIkey}&language=pt-br&region=br`;

const axiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3'
});

const productsArray = new Array(6);
//☝🏽 I just want 6 items on this array

const { data } = await axiosInstance.get(END_POINT);
const results = data.results;

for (let i = 0; i < productsArray.length; i++) {
  //Push product object:
  productsArray[i] = {
    id: i + 1,
    name: `${results[i].name}`,
    imgUrl: `https://image.tmdb.org/t/p/w200${results[i].backdrop_path}`,
    description: `${results[i].overview.substring(0, 80)}...`,
    price: 10 + results[i].vote_average
  };
}

export default productsArray;
