import { mapState, mapActions } from 'vuex';
export default{
  //재사용할 컴포넌트 옵션 &로직
  computed:{
    ...mapState(['list']),
  },
  methods:{
    ...mapActions({
      showSpinner:'SHOW_SPINNER',
      hideSpinner:'HIDE_SPINNER',
      fetchList:'FETCH_LIST'
    }),

    _fetchList:(async function(){
      await this.showSpinner();

      await this.fetchList(this.$route.name)
        .then(async ()=>{
          await this.hideSpinner();
        })
        .catch((error)=>{
          console.log(error);
        })
    }),
  },

  created(){
    this._fetchList();
  },
}