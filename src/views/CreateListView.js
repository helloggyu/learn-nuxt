import ListView from './ListView';

export default function createListView(name){
  //재사용 인스턴스
  return{
    name:name,
    render(createElement){
      return createElement(ListView);
    }
  }
}