import axios from "axios";

// 1.request & reseponse 기본설정
const config = {
 baseUrl:'https://api.hnpwa.com/v0/',
}

// 2.api 함수 정리
function fetchNewsList(){
  return axios.get(`${config.baseUrl}news/1.json`);
}

export{
  fetchNewsList
}