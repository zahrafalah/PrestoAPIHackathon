import axios from "./instance";

class MovieAPI {
  async getAll() {
    const { data } = await axios.get("/movies?limit=150");
    return data;
  }
  async getById(id) {
    const { data } = await axios.get(`/movies/${id}`);
    return data;
  }
  async getComments(id) {
    const { data } = await axios.get(`/comments`);
    return data;
  }
  update() {}
  delete() {}
  create() {}
}

export const movieAPI = new MovieAPI();
