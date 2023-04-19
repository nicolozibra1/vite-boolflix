<template>
  <HeaderComponent @searchChange="getCards" @searchMovie="getMovie" @searchTv="getTv" />
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
        this.url = store.baseUrl + 'movie/popular?' + store.myKey; //popular
        axios.get(this.url).then((res) => {
          store.cardList = res.data.results
          console.log(res.data.results)
        })
      },
      getMovie() {
        this.url = store.baseUrl + 'search/movie?' + store.myKey // movie
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
          store.research = true;
          store.movieList = res.data.results;
          store.cardList = '';
          console.log(res.data.results)
        })
      },
      getTv() {
        this.url = store.baseUrl + 'search/tv?' + store.myKey // movie
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
          store.research = true;
          store.tvList = res.data.results;
          store.cardList = '';
          console.log(res.data.results)
        })
      }
    },
    mounted() {
      this.getCards()
    }
  }
</script>

<style lang="scss" scoped>

</style>
