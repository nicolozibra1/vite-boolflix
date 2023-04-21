<template>
    <div class="box-video">
        <img v-if="this.visible" src="/images/logo-small.png" alt="">
        <video id="intro" ref="videoPlayer">
            <source src="../../public/videos/intro.mp4" type="video/mp4">
        </video>
        <button v-if="this.visible" @click="logIntro">
            <span class="text-uppercase fw-semibold fs-5">enter</span>
        </button>
    </div>
</template>

<script>
import { store } from '../data/store';
    export default {
        name: 'HeroComponent',
        data() {
            return {
                store,
                visible: true
            };
        },
        methods: {
            logIntro() {
                const video = document.getElementById('intro');
                    video.play();
                    this.visible = false;
                    setTimeout(() => {
                        store.log = true
                    }, 4500)
    
                } 
            },
        }
</script>

<style lang="scss" scoped>
.box-video{
    height: 100vh;
    width: 100vw;
    overflow: hidden;
    position: relative;

    img{
        position: absolute;
        top: 51%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 70%;
    }
}
video{
    margin-top:-50px;
    z-index: -1;
}
#myVideo {
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
}
button{
    position: absolute;
    top: 70%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 2;
    background-color: red;
    border: none;
    border-radius: 5px;
    padding: 0 30px;
    color: white;
    &:hover{
        cursor: pointer;
        background-color: white;
        color: black;
    }
}
</style>