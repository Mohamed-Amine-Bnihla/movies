import api from "@/api/api"

const state = {
    popular:[],
    topRated:[],
}

const getters = {
    popular : state => state.popular,
topRated:state => state.topRated,
}
const mutations ={
    SET_POPULAR(state,data){
        state.popular = data;
    },
    SET_TOP_RATED(state,data){
        state.topRated = data;
    }
}

const actions= {

    fetchPopularTv({commit}){
        api.get('tv/popular')
        .then(({data})=>{
    commit('SET_POPULAR',data.results);
    })
    },
    fetchTopTv({commit}){
        api.get('tv/top_rated')
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