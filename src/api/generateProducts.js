import axios from 'axios';
const APIkey = 'a936a97a7b6448430a09401f17ec508f';
const END_POINT = `/trending/tv/week?api_key=${APIkey}&language=pt-br&region=br`;

const axiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3'
});

const productsArray = new Array(7);
//☝🏽 I just want 7 items on this array

async function fetchMediasFromAPI() {
  const { data } = await axiosInstance.get(END_POINT);
  const results = data.results;

  for (let i = 0; i < productsArray.length; i++) {
    //Push product object:
    productsArray[i] = {
      id: i + 1,
      name: `${results[i].name}`,
      posterUrl: `https://image.tmdb.org/t/p/w200${results[i].poster_path}`,
      backdropUrl: `https://image.tmdb.org/t/p/w200${results[i].backdrop_path}`,
      description: `${results[i].overview.substring(0, 105)}...`,
      price: 10.2 + results[i].vote_average
    };
  }
}

fetchMediasFromAPI();
export default productsArray;
