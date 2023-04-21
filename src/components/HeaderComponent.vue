<template>
    <div class="box-header">
        <header class="d-flex justify-content-between align-items-center">
            <div class="box-logo d-flex justify-content-center align-items-center">
                <img src="/images/logo-main.png" alt="">
            </div>
            <div class="search-box d-flex justify-content-center align-items-center">
                <form @submit.prevent="setSearch">
                    <input type="search" placeholder="Titoli, Generi, A-Z" v-model.trim="store.search.query">
                    <button type="submit" class="btn bg-none"><i class="fa-solid fa-search text-white"></i></button>
                </form> 
            </div>
        </header>
    </div>  
</template>

<script>
import { store } from '../data/store';
    export default {
        name: 'HeaderComponent',
        data() {
            return {
                store,
                searchOption: [
                    'movie'
                ]
            }
        },
        methods: {
            setSearch() {
                this.$emit('searchChange');
                this.$emit('searchPopularTv');
                this.$emit('searchTopMovie');
                this.$emit('searchMovie');
                this.$emit('searchTv')
            }
        }
    }
</script>

<style lang="scss" scoped>
.box-header{
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1000;
}
    header{
        height: 70px;
        background-color: black;

        .box-logo{
            width: 100px;
            height: 50px;
            margin-left: 60px;

            img{
                width: 100%;
            }
        }
        .search-box{
            margin-right: 60px;
            input{
                background-color: rgb(32, 32, 32);
                border: 1px solid darkgray;
                border-radius: 5px;
                color: white;
            }
        }
    }
</style>