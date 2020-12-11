import axios from "axios";

export default axios.create({
  baseURL: "https://mflix.prestoapi.com/api",
  timeout: 15000,
});
