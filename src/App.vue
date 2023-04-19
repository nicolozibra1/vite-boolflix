<template>
  <HeaderComponent />
</template>

<script>
import {store} from './data/store.js';
import axios from 'axios';
import HeaderComponent from './components/HeaderComponent.vue';
  export default {
    name: 'App',
    components: {
      HeaderComponent,
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
          store.cardList = res.data
          console.log(res.data)
        })
        console.log(url)
        
      }
    },
    mounted() {
      this.getCards()
    }
  }
</script>

<style lang="scss" scoped>

</style>
