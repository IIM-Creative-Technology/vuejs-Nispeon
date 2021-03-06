import {
    createStore
} from 'vuex'

export default createStore({
    state: {
        admin: {
            name: "Nispeon",
            who: "Web Developer",
            avatar: "https://cdn.discordapp.com/attachments/427932875837669389/817558129562222592/717151043418325013.gif"
        },
        articles: [],
        articleCount: 0
    },
    mutations: {

        INCREASE_COUNT(state) {
            state.articleCount++
        },
        
        ADD_DATA(state, data) {
            state.articles.push(data)
        }
    },
    getters: {
        getbyId(state) {
            return (id) => state.articles.find(article => article.id === id);
        },
    },
    actions: {},
    modules: {}
})