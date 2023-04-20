<template>
    <div class="thumbnail container-fluid">
        <div class="nail p-2" v-for="(thumb, index) in store.cardList" :key="index">
            <img :src="store.baseUrlImage + store.wImg + thumb.poster_path" alt="" :class="{active: currentIndex === index}">
        </div>
    
        <div class="arrow next" @click="nextSlide">
            <i class="fa-solid fa-circle-arrow-right"></i>
        </div>
        <div class="arrow prev" @click="prevSlide">
            <i class="fa-solid fa-circle-arrow-left"></i>
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
                this.currentIndex === store.cardList.length - 1 ? this.currentIndex = 0 : this.currentIndex++
                console.log(this.currentIndex)
                 if(this.currentIndex === 7){
                     for(let i = 0; i < 7; i++) {
                         this.page1.push(store.cardList[i])
                         store.cardList[i] = this.page1
                    }
                 this.page1[i] = this.visible
                 }

                // if(this.currentIndex === 13){
                //     for(let i = 0; i < 13; i++) {
                //         this.page2.push(store.cardList[i])
                //         store.cardList[i] = this.page2
                //     }
                // this.page2 = this.visible
                // }
            },
            prevSlide() {
                this.currentIndex === 0 ? this.currentIndex = store.cardList.length - 1 : this.currentIndex--
            },
            startScroll() {
                this.autoscroll = setInterval(() => {
                    this.currentIndex = (this.currentIndex + 1) % store.cardList.length;
                }, 3000);
            },
            stopScroll() {
                clearInterval(this.autoscroll);
                this.isPaused = true;
            }
        },
    }
</script>

<style lang="scss" scoped>
.thumbnail{
    height: 400px;
    background-color: black;
    display: flex;
    position: relative;
}
.nail{
    width: 100%;
    display: flex;
    flex-direction: row;
}
.arrow{
    color: white;
    background-color: transparent;
    border: none;
    position: absolute;
}
.next{
    top: 50%;
    right:20px;
    transform: translate(-50%, -50%);
}
.prev{
    top: 50%;
    left:20px;
    transform: translate(-50%, -50%);
}
.nail img.active{
    border: 1px solid white;
    border-radius: 10px;
    opacity:1;
    scale: 1.1;
}
.nail img{
    opacity: 40%;
}
</style>