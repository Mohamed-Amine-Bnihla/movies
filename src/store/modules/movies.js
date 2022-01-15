import api from "@/api/api"

const state = {
    popular:[],
    topRated:[],
       trending:{},
}

const getters = {
    popular : state => state.popular,
topRated:state => state.topRated,
trending : state => state.trending,
}
const mutations ={
    SET_TRENDING(state,data){
        state.trending = data[Math.floor(Math.random() * (data.length - 1))];
    },
    SET_POPULAR(state,data){
        state.popular = data;
    },
    SET_TOP_RATED(state,data){
        state.topRated = data;
    }
}

const actions= {
     fetchTrending({commit}){
         api.get('trending/movie/week')
         .then(({data})=>{
           
    commit('SET_TRENDING',data.results);
    })
    },
    fetchPopularMovies({commit}){
        api.get('movie/popular')
        .then(({data})=>{
    commit('SET_POPULAR',data.results);
    })
    },
    fetchTopMovies({commit}){
        api.get('movie/top_rated')
        .then(({data})=>{
    commit('SET_TOP_RATED',data.results);
    })
    }

}

export default {
    namespaced:true,
    state,
    getters,
    mutations,
    actions
}