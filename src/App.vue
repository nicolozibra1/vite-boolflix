<template>
  <HeaderComponent />
  <MainComponent />
</template>

<script>
import {store} from './data/store.js';
import axios from 'axios';
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';
  export default {
    name: 'App',
    components: {
      HeaderComponent,
      MainComponent
    },
    data() {
      return {
        store,
      }
    },
    methods: {
      getCards() {
        let url = store.baseUrl + 'movie/popular?' + store.myKey;
        axios.get(url).then((res) => {
          store.cardList = res.data.results
          console.log(res.data.results)
        })
        // let image = store.baseUrlImage + store.wImg;
        // axios.get(url).then((res) =>{
        //   store.imgList = res.data
        //   console.log(res.data)
        // })
        
      }
    },
    mounted() {
      this.getCards()
    }
  }
</script>

<style lang="scss" scoped>

</style>
