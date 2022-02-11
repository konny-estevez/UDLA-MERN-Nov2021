import axios from "axios"
const API_URL = "https://pokeapi.co/api/v2/pokemon";
const getUrl = (limit,offset)=> API_URL+`?limit=${limit}&offset=${offset}`
const  getData=(url=API_URL,limit=20,offset=0)=>{console.log(limit,offset);return axios.get(offset===0?url:getUrl(limit,offset)).then(response=>response.data)};
export default getData;