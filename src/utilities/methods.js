import axios from "axios"
const API_URL = "https://pokeapi.co/api/v2/pokemon";
const  getData=(url=API_URL)=>axios.get(url).then(response=>response.data);
export default getData;