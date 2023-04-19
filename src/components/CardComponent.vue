<template>
    <div class="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-2">
        <div class="card mb-2">
            <div class="card-image p-3">
                <img :src="store.baseUrlImage + store.wImg + card.poster_path" alt="">
            </div>
            <div class="card-body">
                <h6>{{ card.title }}</h6>
            </div>
        </div>
    </div>
</template>

<script>
import {store} from '../data/store.js';
    export default {
        name: 'CardComponent',
        props: ['card'],
        data() {
      return {
        store,
      }
    },
    }
</script>

<style lang="scss" scoped>
    .card-image{
        img{
            width: 100%;
        };
    }
</style>