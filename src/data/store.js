import {reactive} from 'vue';

export const store = reactive({
    cardList: [],
    baseUrl: 'https://api.themoviedb.org/3/',
    baseUrlImage: 'https://image.tmdb.org/t/p',
    myKey: 'api_key=f51fd13bc875752d61e123c6554b6dab',
    endpoint: '',
    limit: 'num=20&offset=0',
})