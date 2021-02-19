import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.themoviedb.org/3",
}); //This is the base URL so instead od typing this again and again we'll use it directly

export default instance;
