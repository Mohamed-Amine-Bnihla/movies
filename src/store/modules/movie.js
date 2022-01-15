import api from "@/api/api"

const state = {
    movie:{},
    videos:[],

}

const getters = {
    movie : state => state.movie,
    videos:state => state.videos,

}
const mutations ={
    SET_MOVIE(state,data){
        state.movie = data;
    },
    SET_VIDEOS(state,data){
        console.log(data)
        state.videos = data.filter((video) => video.site.toLowerCase() == "youtube").slice(0,2)
    }
 
}

const actions= {

    fetchMovie({commit},{id}){
        api.get(`movie/${id}`)
        .then(({data})=>{
          
    commit('SET_MOVIE',data); 
    api.get(`movie/${id}/videos`)
    .then(({data})=>{
        
        commit('SET_VIDEOS',data.results); 
      
     })
    })
    },

}

export default {
    namespaced:true,
    state,
    getters,
    mutations,
    actions
}