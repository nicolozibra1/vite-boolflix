<template>
    <div class="title-section">
        <span>top rated movie</span>
    </div>
    <div class="slider" @mouseover="stopScroll" @mouseleave="startScroll">
        <div class="thumbnail thumbanail-scroll container-fluid" >
            <div class="nail px-2 py-4 ms-3" v-for="(thumb, index) in store.topMovie" :key="index" @click="getInfoCard(index)">
                <img :src="store.baseUrlImage + store.wImg + thumb.poster_path" alt="" :class="{active: currentIndex === index}" @mouseover="stopScroll">
            </div>
        </div>
        <div class="box-arrow box-prev d-flex justify-content-between align-items-center px-0">
            <div class="arrow prev d-flex justify-content-center align-items-center" @click="prevSlide">
                <i class="fa-solid fa-chevron-left fs-3"></i>
            </div>
        </div>
        <div class="box-arrow box-next d-flex justify-content-between align-items-center px-0">
            <div class="arrow next d-flex justify-content-center align-items-center" @click="nextSlide">
                <i class="fa-solid fa-chevron-right fs-3"></i>
            </div>
        </div>   
    </div>

</template>

<script>
import {store} from '../data/store.js';
    export default {
        name: 'SliderTopRatedMovie',
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
                this.currentIndex === 0 ? this.currentIndex = store.topMovie.length - 1 : this.currentIndex--;
            },   
            startScroll() {
                this.autoscroll = setInterval(() => {
                    this.currentIndex = (this.currentIndex + 1) % store.topMovie.length;
                    if (this.currentIndex > 6) {
                        this.currentIndex = 0;
                    }
                }, 1500);
            },
            stopScroll() {
                clearInterval(this.autoscroll);
                this.isPaused = true;
            },
            getInfoCard(index) {
                store.selected.splice(0, 1)
                store.selected.push(store.topMovie[index])
                console.log(store.selected);
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
.title-section{
    position: relative;
}
span{
    color: white;
    position: absolute;
    top: -38px;
    left: 870px;
    z-index: 3;
    background-color: red;
    padding: 10px;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 0.9rem;
    border-radius: 16px;
}
.slider{
    position: relative;
}
.thumbnail{
    height: 400px;
    background-color: black;
    display: flex;
    overflow-x: hidden;
    overflow-y: hidden;
    z-index: 2;
}
.nail{
    width: 100%;
    display: flex;
    flex-direction: row;
    &:hover img{
        border-radius: 10px;
        opacity:1;
        scale: 1.1;
        border: 1px solid white;
        cursor: pointer;
    }
}
.box-prev{
    position: absolute;
    top: 150px;
    left: 0;
}
.box-next{
    position: absolute;
    top: 150px;
    right: 0;
}
.arrow{
    color: white;
    background-color: rgba(255, 255, 255, 0.226);
    border: none;
    height: 100px;
    width: 40px;
    cursor: pointer;
    &:hover{
        background-color: rgba(255, 255, 255, 0.322);
    }
}
.nail img.active{
    border-radius: 10px;
    opacity:1;
    scale: 1.1;
    border: 1px solid white;
}
.nail img{
    opacity: 80%;;
}
</style>