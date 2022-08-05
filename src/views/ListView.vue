<template>
    <ListItem/>
</template>

<script>
import ListItem from '../components/ListItem.vue';
import { reactive, toRefs, onMounted } from '@vue/composition-api';
import { useActions } from 'vuex-composition-helpers';

export default {
  components:{
    ListItem,
  },
  setup( context ){
    const { router }=context.root;
    
    const { showSpinner, hideSpinner, fetchList }= useActions({
      showSpinner:'SHOW_SPINNER',
      hideSpinner:'HIDE_SPINNER',
      fetchList:'FETCH_LIST'
      });

    const state = reactive({});

    const _fetchList= async() =>{
        await fetchList(router.name)
          .then(async ()=>{
           await hideSpinner();
          })
          .catch((error)=>{
            console.log(error);
          })      
    }

    onMounted(async() => {
      await showSpinner();
     _fetchList();
    });

    return{
      ...toRefs(state),
      _fetchList,
    }
  },
}
</script>

<style>

</style>