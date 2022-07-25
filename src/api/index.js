import axios from "axios";

// 1.request & reseponse 기본설정
const config = {
 baseUrl:'https://api.hnpwa.com/v0/',
}

// 2.api 함수 정리
function fetchNewsList(){
  return axios.get(`${config.baseUrl}news/1.json`);
}

function fetchAskList(){
  return axios.get(`${config.baseUrl}ask/1.json`);
}

function fetchJobsList(){
  return axios.get(`${config.baseUrl}jobs/1.json`);
}

function fetchUserInfo(userName){
  return axios.get(`${config.baseUrl}user/${userName}.json`);
}

function fetchItemList(askId){
  return axios.get(`${config.baseUrl}item/${askId}.json`);
}

export{
  fetchNewsList,
  fetchAskList,
  fetchJobsList,
  fetchUserInfo,
  fetchItemList
}