<template>
    <div class="box-canvas" v-for="(item, index) in store.selected" :key="index">
        <div class="item">
            <div class="box-backdrop">
                <img :src="store.baseUrlImage + store.wBack + item.backdrop_path" alt="">
                <span>{{ item.title }} {{ item.name }}</span>
                <button class="back" @click="goBack(index)">
                    <i class="fa-solid fa-arrow-left"></i>
                </button>
            </div>
            <div class="info">
                <div class="title p-3">
                    <h5>title:</h5> <span class="ps-3">{{ item.title }}</span>
                </div>
                <div class="description p-3">
                    <h5>description:</h5> <span class="ps-3">{{ item.overview }}</span>
                </div>
                <div class="release p-3">
                    <h5>Release date:</h5> <span class="ps-3">{{ item.release_date }}</span>
                </div>
                <div class="language p-3">
                    <h5>language:</h5> <span class="ps-3"><img :src="item.original_language" alt="flag-language"></span>
                </div>
                <div class="vote p-3">
                    <h5>vote:</h5> <span class="ps-3" id="box-star"><img :src="item.vote_average" alt="vote"></span>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import { store } from '../data/store';
    export default {
        name: 'CardInfo',
        props: ['card'],
        data() {
            return {
                store
            }
        },
        methods: {
            goBack(index) {
                store.selected.splice(0, 1)
            }
        }
        
    }
</script>

<style lang="scss" scoped>
    .box-canvas{
        background-color: rgb(34, 34, 34);
        height: 90vh;
        width: 45vw;
        position: fixed;
        top: 50px;
        z-index: 4;
        border-radius: 10px;
        
        .box-backdrop{
            height: 400px;
            width: 100%;
            position: relative;

            img{
                width: 100%;
                height: 100%;
                object-fit: cover;
                border-top-right-radius: 10px;
                border-top-left-radius: 10px;
            }
            span{
                background-color: rgb(168, 168, 168);
                font-size: 3rem;
                font-weight: 600;
                position: absolute;
                bottom: 0;
                left: 0;
                padding:0 30px;
                color: white;
            }
            button{
                background-color: rgba(255, 255, 255, 0.418);
                border: none;
                padding: 15px 18px;
                border-radius: 50%;
                position: absolute;
                top: 20px;
                left: 20px;

                i{
                    color: white;
                    font-size: 1.2rem;
                }
            }
        }
        .info{
            h5{
                color: white;
                text-transform: uppercase;
                display: inline-block;
           }
           span{
                color: white;
                font-style: italic;
           }
           #box-star{
                height: 25px;
                width: 100px;


                img{
                    width: 15%;
                    height: 100%;
                    object-fit: cover;
                    margin-top: -10px;
                };
            }
        }
    }
</style>