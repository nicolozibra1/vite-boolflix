<template>
    <main>
        <div class="container-fluid">
            <div class="popular" v-if="!store.research">
                <div class="row popular-movie d-flex flex-wrap mt-2">
                    <!-- <SliderComponent /> GOOD IDEA BUT NOT WORK (FIX REQUIRED)--> 
                    <SliderComponent2 />
                </div>
                <div class="row popular-tv d-flex flex-wrap">
                    <!-- <SliderComponent /> GOOD IDEA BUT NOT WORK (FIX REQUIRED)--> 
                    <SliderPopularTv />
                </div>
            </div>
            <div class="movie" v-if="store.research">
                <h1>Film</h1>
                <div class="row d-flex flex-wrap mt-2">
                    <CardComponent v-for="(card, index) in store.movieList" :card="card" :key="card.id"/>
                </div>
            </div>
            <div class="tv" v-if="store.research">
                <h1>Serie Tv</h1>
                <div class="row d-flex flex-wrap mt-2">
                    <CardComponent v-for="(card, index) in store.tvList" :card="card" :key="card.id"/>
                </div>
            </div>   
        </div>
    </main>
</template>

<script>
import {store} from '../data/store.js'
import CardComponent from './CardComponent.vue';
import SliderComponent from './SliderComponent.vue';
import SliderComponent2 from './SliderComponent2.vue';
import SliderPopularTv from './SliderPopularTv.vue';
    export default {
        name: 'MainComponent',
        components: {
            CardComponent,
            SliderComponent,
            SliderComponent2,
            SliderPopularTv
        },
        data() {
            return {
                store,
            }
        }
    }
</script>

<style lang="scss" scoped>
    .popular-tv{
        margin-top: 150px;
    }
</style>