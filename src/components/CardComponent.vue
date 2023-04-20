<template>
    <div class="col-6 col-sm-6 col-md-4 col-lg-3 col-xl-2 col-xxl-2">
        <div class="card mb-2">
            <div class="card-image p-3">
                <img :src="store.baseUrlImage + store.wImg + card.poster_path" alt="">
            </div>
            <div class="card-body d-flex flex-column">
                <h6>{{ card.title }} {{ card.name }}</h6>
                <div class="language d-flex align-items-center">
                    <span class="fst-italic">Lingua originale:</span>
                    <div class="box-flag ms-2 d-flex align-items-center">
                        <img :src="card.original_language" alt="flag-language">
                    </div>
                </div>
                <div class="vote d-flex align-items-center">
                    <span class="fst-italic">Voto:</span>
                    <div class="box-star ms-2 d-flex align-items-center">
                        <img :src="card.vote_average" alt="">
                    </div>
                </div>
                
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
    .box-flag{
        height: 20px;
        width: 30px;
        margin-top: 3px;

        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 3px;
        };
    }
    .box-star{
        height: 25px;
        width: 100px;

        img{
            width: 100%;
            height: 100%;
            object-fit: cover;
        };
    }
</style>