<template>
    <div class="title-section">
        <span>Most Popular Tv</span>
    </div>
    <div class="thumbnail thumbanail-scroll container-fluid" >
        <div class="nail px-2 py-4 ms-3" v-for="(thumb, index) in store.popularTv" :key="index">
            <img :src="store.baseUrlImage + store.wImg + thumb.poster_path" alt="" :class="{active: currentIndex === index}" @mouseover="stopScroll">
        </div>
    </div>
    <div class="box-arrow d-flex justify-content-between align-items-center px-0">
        <div class="arrow prev d-flex justify-content-center align-items-center" @click="prevSlide">
            <i class="fa-solid fa-chevron-left fs-3"></i>
        </div>
        <div class="arrow next d-flex justify-content-center align-items-center" @click="nextSlide">
            <i class="fa-solid fa-chevron-right fs-3"></i>
        </div>
    </div>
</template>

<script>
import {store} from '../data/store.js';
    export default {
        name: 'SliderPopularTv',
        props: ['thumb'],
        data() {
            return {
                store,
                currentIndex: 0,
                autoscroll: "",
                visible: false,
            }
        },
        methods: {
            nextSlide() {
                this.currentIndex = this.currentIndex > 5 ? 0 : this.currentIndex + 1;
            },
            prevSlide() {
                this.currentIndex === 0 ? this.currentIndex = store.popularTv.length - 1 : this.currentIndex--;
            },   
            startScroll() {
                this.autoscroll = setInterval(() => {
                    this.currentIndex = (this.currentIndex + 1) % store.popularTv.length;
                    if (this.currentIndex > 6) {
                        this.currentIndex = 0;
                    }
                }, 1500);
            },
            stopScroll() {
                clearInterval(this.autoscroll);
                this.isPaused = true;
            }
        },
        mounted() {
            this.startScroll();
        }
    }
</script>

<style lang="scss" scoped>
template{
    position: relative;
}
span{
    color: white;
    position: absolute;
    top: 550px;
    left: 20px;
    z-index: 3;
    background-color: red;
    padding: 10px;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 0.9rem;
}
.thumbnail{
    height: 400px;
    background-color: black;
    display: flex;
    position: absolute;
    right: 0;
    overflow-x: hidden;
    overflow-y: hidden;
    z-index: 2;
    margin-top: 120px;
}
.nail{
    width: 100%;
    display: flex;
    flex-direction: row;
}
.box-arrow{
    height: 100px;
    z-index: 2;
    margin-top: 140px;
}
.arrow{
    color: white;
    background-color: rgba(255, 255, 255, 0.13);
    border: none;
    height: 100px;
    width: 40px;
    cursor: pointer;

    &:hover{
        background-color: rgba(255, 255, 255, 0.212);
    }
}
.nail img.active{
    border-radius: 10px;
    opacity:1;
    scale: 1.1;
}
.nail img{
    opacity: 40%;
}
</style>