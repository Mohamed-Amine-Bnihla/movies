import api from "@/api/api"

const state = {
    tv:{},
     videos:[],

}

const getters = {
    tv : state => state.tv,
    videos:state => state.videos
}
const mutations ={
    SET_TV(state,data){
        state.tv = data;
    },
    SET_VIDEOS(state,data){

        state.videos = data.filter((video)=> video.site.toLowerCase() == "youtube").slice(0,2);
      
    }
 
}

const actions= {

  async fetchTv({commit},{id}){
       await api.get(`tv/${id}`)
        .then(({data})=>{
    commit('SET_TV',data); 
   api.get(`tv/${id}/videos`)
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