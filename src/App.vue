<template>
  <HeaderComponent @searchChange="getCards" />
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
        url: ''
      }
    },
    methods: {
      getCards() {
        if(store.search.query.length > 0) {
          this.url = store.baseUrl + 'search/movie?' + store.myKey
        }
        else {
          this.url = store.baseUrl + 'movie/popular?' + store.myKey;
        }
        let options = {};
        let params = {}
        for (let key in store.search) {
          if (store.search[key]) {
            params[key] = store.search[key]
          }
        }
        if (Object.keys(params).length > 0) {
        options.params = params;
        }
        axios.get(this.url, options).then((res) => {
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
