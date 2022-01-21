import api from "@/api/api"

const state = {
    movie:{},
    videos:[],
    credits:[]

}

const getters = {
    movie : state => state.movie,
    videos:state => state.videos,
    credits:state=>state.credits

}
const mutations ={
    SET_MOVIE(state,data){
        state.movie = data;
    },
    SET_VIDEOS(state,data){
        
        state.videos = data.filter((video) => video.site.toLowerCase() == "youtube").slice(0,2)
    },
    SET_CREDITS(state,data){
        console.log(data);
      const cast = data.cast.slice(0,10);
      const crew = data.crew.find((el)=> el.job.toLowerCase() == "director" || el.job.toLowerCase() == "producer"  );
      state.credits = crew != null ? [...cast,crew] : [...cast];
    
    }
 
}

const actions= {

    fetchMovie({commit},{id}){
        api.get(`movie/${id}`)
        .then(({data})=>{
    commit('SET_MOVIE',data); 
    })

    },
    fetchVideos({commit},{id}){
         api.get(`movie/${id}/videos`)
    .then(({data})=>{
        
        commit('SET_VIDEOS',data.results); 
      
     })
    },
     fetchCredits({commit},{id}){
         api.get(`movie/${id}/credits`)
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