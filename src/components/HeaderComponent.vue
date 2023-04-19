<template>
    <header class="d-flex justify-content-between align-items-center">
        <div class="box-logo d-flex justify-content-center align-items-center">
            <img src="/images/logo-main.png" alt="">
        </div>
        <div class="search-box d-flex justify-content-center align-items-center">
            <form>
                <input type="search" placeholder="Titoli, Generi, A-Z">
                <button type="submit" class="btn bg-none"><i class="fa-solid fa-search text-white"></i></button>
            </form> 
        </div>
    </header>
</template>

<script>
    export default {
        name: 'HeaderComponent'
    }
</script>

<style lang="scss" scoped>
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
            }
        }
    }
</style>