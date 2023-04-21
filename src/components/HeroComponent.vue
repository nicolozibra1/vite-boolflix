<template>
    <div class="box-video">
        <video autoplay muted loop id="trailer" ref="videoPlayer">
            <source src="../../public/videos/creed3-trailer.mp4" type="video/mp4">
        </video>
    </div>
    <div class="content d-flex">
        <h1 class="me-3">Creed III</h1>
        <button v-if="this.muted" id="toggle-audio" @click="toggleAudio"><i class="fa-solid fa-volume-xmark"></i></button>
        <button v-if="!this.muted" id="toggle-audio" @click="toggleAudio"><i class="fa-solid fa-volume-high"></i></button>
    </div>
    <button id="myBtn" @click="toggleVideo">{{ videoPaused ? '>' : '||' }}</button>
</template>

<script>
    export default {
        name: 'HeroComponent',
        data() {
            return {
                videoPaused: false,
                muted: true
            };
        },
        methods: {
            toggleVideo() {
                const video = document.getElementById('trailer');
                if (video.paused || video.ended) {
                    video.play();
                    this.videoPaused = false;
                } 
                else {
                    video.pause();
                    this.videoPaused = true;
                }
            },
            toggleAudio() {
                const video = this.$refs.videoPlayer;
                video.muted = !video.muted;
                this.muted = video.muted;
            },
        },
    }
</script>

<style lang="scss" scoped>
.box-video{
    height: 860px;
    overflow: hidden;
    position: relative;
}
video{
    margin-top: -140px;
    z-index: -1;
}
#myVideo {
    position: fixed;
    right: 0;
    bottom: 0;
    min-width: 100%;
    min-height: 100%;
}
.content {
    position: fixed;
    bottom: 45px;
    background: rgba(0, 0, 0, 0.5);
    color: #f1f1f1;
    width: 25%;
    padding: 20px;
}
#myBtn {
    font-size: 18px;
    padding: 10px 20px;
    border: none;
    background: #00000073;
    color: #fff;
    cursor: pointer;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 200;
    color: white;
    font-weight: bold ;
    border-radius: 50%;
}
#toggle-audio{
    border-radius: 50%;
    background: rgb(32, 32, 32);
    border: none;
    color: white;
    padding: 15px;
    &:hover{
        background-color: rgba(255, 255, 255, 0.397);
    }
}

#myBtn:hover {
    background: #ddd;
    color: black;
}
</style>