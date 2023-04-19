<template>
    <main>
        <div class="container-fluid">
            <div class="popular" v-if="!store.research">
                <h1>Most Popular</h1>
                <div class="row d-flex flex-wrap mt-2">
                    <CardComponent v-for="(card, index) in store.cardList" :card="card" :key="card.id"/>
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
    export default {
        name: 'MainComponent',
        components: {
            CardComponent
        },
        data() {
            return {
                store,
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>