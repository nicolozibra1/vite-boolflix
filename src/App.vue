<template>
  <IntroComponent v-if="!store.log"/>
  <HeaderComponent v-if="store.log" @searchTopMovie="getTopMovie" @searchPopularTv="getPopularTv" @searchChange="getCards" @searchMovie="getMovie" @searchTv="getTv" />
  <HeroComponent v-if="store.log" />
  <MainComponent v-if="store.log" />
</template>

<script>
import {store} from './data/store.js';
import axios from 'axios';
import IntroComponent from './components/IntroComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';
import HeroComponent from './components/HeroComponent.vue';
import MainComponent from './components/MainComponent.vue';
  export default {
    name: 'App',
    components: {
      IntroComponent,
      HeaderComponent,
      MainComponent,
      HeroComponent
    },
    data() {
      return {
        store,
        url: '',
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
      getPopularTv() {
        this.url = store.baseUrl + 'tv/popular?' + store.myKey; //popular
        axios.get(this.url).then((res) => {
          store.popularTv = res.data.results
          setTimeout(() => {
            this.setLanguage(store.popularTv)
            this.setVote(store.popularTv)
          }, 100)
          console.log(res.data.results)
        })
      },
      getTopMovie() {
        this.url = store.baseUrl + 'movie/top_rated?' + store.myKey; //top rated movie
        axios.get(this.url).then((res) => {
          store.topMovie = res.data.results
          setTimeout(() => {
            this.setLanguage(store.topMovie)
            this.setVote(store.topMovie)
          }, 100)
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
          setTimeout(() => {
            this.setLanguage(store.movieList)
            this.setVote(store.movieList)
          }, 100)
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
          setTimeout(() => {
            this.setLanguage(store.tvList)
            this.setVote(store.tvList)
          }, 100)
          console.log(res.data.results)
        })
      },
      setLanguage(list) {
        for (let i = 0; i < list.length; i++) {
          // EXCEPTIONS 
          if(list[i].original_language === 'en'){
            list[i].original_language = 'gb'
          }
          else if(list[i].original_language === 'ko'){
            list[i].original_language = 'kr'
          }
          else if(list[i].original_language === 'ja'){
            list[i].original_language = 'jp'
          }
          else if(list[i].original_language === 'hi'){
            list[i].original_language = 'in'
          }
          else if(list[i].original_language === 'zh'){
            list[i].original_language = 'ch'
          }
          // PRINT
          list[i].original_language = 'https://flagcdn.com/32x24/' + list[i].original_language + '.png'
        }      
      },
      setVote(list) {
        for (let i = 0; i < list.length; i++) {
          let calcVote = list[i].vote_average * 0.5;
          calcVote = Math.round(calcVote)
          if(calcVote === 0){
            calcVote = 1
          }
          list[i].vote_average = '/images/vote-' + calcVote +'.png'
        }
      }
    },
    mounted() {
      this.getCards()
      this.getPopularTv()
      this.getTopMovie()
      setTimeout(() => {
        this.setLanguage(store.cardList);
        this.setVote(store.cardList)
      }, 100)
    },
  }
</script>

<style lang="scss" scoped>

</style>
