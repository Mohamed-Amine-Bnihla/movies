import api from "@/api/api"

const state = {
    tv:{},
     videos:[],
     credits:[]

}

const getters = {
    tv : state => state.tv,
    videos:state => state.videos,
    credits:state=>state.credits
}
const mutations ={
    SET_TV(state,data){
        state.tv = data;
    },
    SET_VIDEOS(state,data){

        state.videos = data.filter((video)=> video.site.toLowerCase() == "youtube").slice(0,2);
      
    },
     SET_CREDITS(state,data){
        console.log(data);
      const cast = data.cast.slice(0,10);
      const crew = data.crew.find((el)=> el.job.toLowerCase() == "director" || el.job.toLowerCase() == "producer"  ) ?? null;
      
      state.credits = crew != null ? [...cast,crew] : [...cast];
    
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
     fetchCredits({commit},{id}){
         api.get(`tv/${id}/credits`)
    .then(({data})=>{

        commit('SET_CREDITS',data); 
      
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