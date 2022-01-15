import { createStore } from 'vuex'
import movies from "./modules/movies"
import tvShows from "./modules/tvShows"
import movie from "./modules/movie"
import tv from "./modules/tv"
export default createStore({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    movies,
    tvShows,
    tv,
    movie
  }
})
