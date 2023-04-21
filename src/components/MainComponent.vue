<template>
    <main>
        <div class="container-fluid">
            <div class="home-page" v-if="!store.research">
                <div class="row popular-movie d-flex flex-wrap">
                    <SliderComponent />
                    <!-- <SliderComponent2 /> -->
                </div>
                <div class="row popular-tv d-flex flex-wrap">
                    <!-- <SliderComponent /> --> 
                    <SliderPopularTv />
                </div>
                <div class="row top-rated-movie d-flex flex-wrap">
                    <!-- <SliderComponent /> --> 
                    <SliderTopRatedMovie />
                </div>

                <div class="card-info d-flex justify-content-center align-items-center">
                    <CardInfo />
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
import SliderTopRatedMovie from './SliderTopRatedMovie.vue';
import CardInfo from './CardInfo.vue';
    export default {
        name: 'MainComponent',
        components: {
            CardComponent,
            SliderComponent,
            SliderComponent2,
            SliderPopularTv,
            SliderTopRatedMovie,
            CardInfo
        },
        data() {
            return {
                store,
            }
        }
    }
</script>

<style lang="scss" scoped>
    .home-page{
        .row{
            margin-bottom: 100px;
        }
        .popular-movie{
            margin-top: 100px;
        }
    }
</style>