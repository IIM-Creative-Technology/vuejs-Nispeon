<template>
    <article v-for="post in articles" :key="post" :id="'id' + articles.indexOf(post)">

        <img :src="post.img">

        <div class="artext">
            <h2>{{post.metat}}#{{post.id}}</h2>
            <p v-html="post.metad"></p>  
        </div>
        
        <div class="arbut">
            <router-link :to="'admin-' + post.id">Éditer</router-link>
            <button>Supprimer</button>  
        </div>
        
        <div v-if="$route.params.id == post.id" class="editiv">
            <router-view v-bind:post="post"/>
        </div>
        
    </article>
</template>

<script>

import { mapState } from "vuex";

export default {
    name: "BlogPreviewCTA",
    data() {
        return {
            
        }
    },computed: {
        ...mapState(['articles'])
    },    
    methods: {
        getBlogEditLink: function(id){
            return '/admin-edit/' + id
        }
    },
    components: {
        
    }
}
</script>

<style scoped>

    article {
        border: solid 1px black;
        border-radius:  0 40px 40px 0;
        margin: 5vh 10%;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
        flex-direction: row;
    }

    article img {
        width: 20%;
    }

    .artext {
        width: 60%;
        text-align: start;
        padding: 0 5%;
    }

    .arbut {
        width: 10%;
    }

    .editiv {
        width: 100%;
        padding: 3vH 10%;
        margin-top: 5vh;
    }

    @media screen and (max-width: 769px){
        article {
            flex-direction: column;
            border-radius: 40px ;
        }

        article img {
            width: 70%;
        }

        .editiv {
            padding: 0;
            border-radius: 40px ;
        }
    }
</style>

<style>
    .artext p {line-break: anywhere;}

</style>