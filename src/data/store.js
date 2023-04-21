import {reactive} from 'vue';

export const store = reactive({
    cardList: [],
    popularTv: [],
    topMovie: [],
    movieList: [],
    tvList: [],
    selected: [],
    baseUrl: 'https://api.themoviedb.org/3/',
    baseUrlImage: 'https://image.tmdb.org/t/p/',
    wImg: 'w342',
    wBack: 'w1280',
    myKey: 'api_key=f51fd13bc875752d61e123c6554b6dab',
    endpoint: '',
    limit: 'num=5&offset=0',
    // PARAMS
    baseSearch: 'search/',
    search: {
        query: ''
    },
    research: false
})