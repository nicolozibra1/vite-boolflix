<template>
    <div class="thumbnail thumbanail-scroll container-fluid" >
        <div class="nail px-2 py-4 ms-3" v-for="(thumb, index) in store.cardList" :key="index">
            <img :src="store.baseUrlImage + store.wImg + thumb.poster_path" alt="" :class="{active: currentIndex === index}" @mouseover="stopScroll">
        </div>
    </div>
    <div class="box-arrow d-flex justify-content-between">
        <div class="arrow prev" @click="prevSlide">
            <i class="fa-solid fa-circle-arrow-left"></i>
        </div>
        <div class="arrow next d-flex justify-content-end" @click="nextSlide">
            <i class="fa-solid fa-circle-arrow-right"></i>
        </div>
    </div>
    
</template>

<script>
import {store} from '../data/store.js';
    export default {
        name: 'SliderComponent',
        props: ['thumb'],
        data() {
            return {
                store,
                currentIndex: 0,
                autoscroll: "",
                visible: false,
                page1: [],
                page2: [],
                page3: [],
                newCard:[]
            }
        },
        methods: {
            nextSlide() {
                this.currentIndex = this.currentIndex > 5 ? 0 : this.currentIndex + 1;
            },
            prevSlide() {
                this.currentIndex === 0 ? this.currentIndex = store.cardList.length - 1 : this.currentIndex--;
            },   
            startScroll() {
                this.autoscroll = setInterval(() => {
                    this.currentIndex = (this.currentIndex + 1) % store.cardList.length;
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
.thumbnail{
    height: 400px;
    background-color: black;
    display: flex;
    position: absolute;
    right: 0;
    overflow-x: hidden;
    overflow-y: hidden;
    z-index: 2;
}
.nail{
    width: 100%;
    display: flex;
    flex-direction: row;
}
.box-arrow{
    z-index: 2;
    margin-top: 180px;
}
.arrow{
    color: white;
    background-color: transparent;
    border: none;
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