<template>
    <main>
        <div class="container-fluid">
            <div class="row d-flex flex-wrap mt-2">
                <CardComponent v-for="(card, index) in store.cardList" :card="card" :key="card.id"/>
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