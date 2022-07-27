import {
  fatchList,
  fetchNewsList, fetchAskList, fetchJobsList,
  fetchUserInfo, 
  fetchItemList, 
} from '../api/index';

export default {
  FETCH_LIST({commit}, pageName){
    fatchList(pageName)
    .then(({data})=>{
      commit('SET_LIST',data);
      return data;
    })
    .catch((error)=>{
      console.log(error);
      return error
    })
  },
  FETCH_NEWS({commit}){
    fetchNewsList()
    .then(({data})=>{
      commit('SET_NEWS',data);
      return data;
    })
    .catch(error=>{
      console.log(error);
      return error;
    })
  },

  FETCH_ASK({commit}){
    fetchAskList()
    .then(({data})=>{
      commit('SET_ASK',data);
      return data;
    })
    .catch(error=>{
      console.log(error);
      return error;
    })
  },

  FETCH_JOBS({commit}){
    fetchJobsList()
    .then(({data})=>{
      commit('SET_JOBS',data);
      return data;
    })
    .catch(error=>{
      console.log(error);
      return error;
    })
  },

  FETCH_USER({commit}, name){
    fetchUserInfo(name)
    .then(({data})=>{
      commit('SET_USER', data);
      return data;
    })
    .catch(error=>{
      console.log(error);
      return error;
    })
  },
  
  FETCH_ITEM({commit}, id){
    fetchItemList(id)
    .then(({data})=>{
      commit('SET_ITEM', data);
      return data;
    })
    .catch((error)=>{
      console.log(error);
      return error;
    })
  },

  SHOW_SPINNER({commit}){
    commit('SET_SPINNER', true);
  },

  HIDE_SPINNER({commit}){
    commit('SET_SPINNER', false);
  },

}