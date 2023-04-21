<template>
    <div class="slider" @mouseover="stopScroll" @mouseleave="startScroll">
        <div class="thumbnail container-fluid" ref="box">
            <div class="nail px-2 py-4" v-for="(thumb, index) in store.cardList" :key="index" @click="getInfoCard(index)">
                <img :src="store.baseUrlImage + store.wImg + thumb.poster_path" alt="" :class="{active: currentIndex === index}">
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
        name: 'SliderComponent',
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
	            const element = this.$refs.box;
	            element.scrollBy({
		        left: 1200,
		        behavior: "smooth",
	            });
            },
            
            prevSlide() {
                const element = this.$refs.box;
	            element.scrollBy({
		        left: -1200,
		        behavior: "smooth",
	            });
            },
            restartSlide() {
                const element = this.$refs.box;
                element.scrollBy({
                    left: -3600,
                    behavior: "smooth",
                })
            },
            startScroll() {
                this.autoscroll = setInterval(() => {
                    this.currentIndex = (this.currentIndex + 1) % store.cardList.length;
                    if (this.currentIndex === 6 || this.currentIndex === 12 || this.currentIndex === 18) {
                        this.nextSlide()
                    }
                    if(this.currentIndex === 17) {
                        this.currentIndex = 0;
                        this.restartSlide()
                    }
                }, 1500);
            },
            stopScroll() {
                clearInterval(this.autoscroll);
                this.isPaused = true;
            },
            getInfoCard(index) {
                store.selected.splice(0, 1)
                store.selected.push(store.cardList[index])
                console.log(store.selected);
                }
        },
        
        mounted() {
            this.startScroll()
        }
    }
</script>

<style lang="scss" scoped>
.slider{
    position: relative;
}
.thumbnail{
    height: 400px;
    background-color: black;
    display: flex;
    overflow: auto;
}
/* Hide scrollbar for Chrome, Safari and Opera */
.thumbnail::-webkit-scrollbar {
  display: none;
}
/* Hide scrollbar for IE, Edge and Firefox */
.thumbnail {
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
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
    border-radius: 20px;
    opacity:1;
    scale: 1.1;
}
.nail img{
    opacity: 80%;
}
</style>