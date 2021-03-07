import {
    createStore
} from 'vuex'

export default createStore({
    state: {
        admin: {
            name: "Nispeon",
            who: "Web Developper",
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
        },

        UPDATE_DATA(state, newdata) {
            state.articles[newdata.id] = newdata;
        },

        REMOVE_DATA(state, id) {
            for( var i = 0; i < state.articles.length; i++){ 
                console.log(i)
                if ( state.articles[i].id == id) { 
                    console.log(id + "success")
                    state.articles.splice(i, 1); 
                }
            
            }
            
        }
    },
    actions: {},
    modules: {}
})