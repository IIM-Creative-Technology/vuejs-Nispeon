<template>
    <article v-for="post in tarray" :key="post">

        <img :src="post.img">

        <div class="artext">
            <h2>{{post.title}}</h2>
            <p v-html="post.preview"></p>  
        </div>
        
        <div class="arbut">
            <button>Éditer</button>
            <button>Supprimer</button>  
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
        ...mapState(['tarray'])
    },    
    methods: {

    }
}
</script>

<style scoped>

    article {
        border: solid 1px black;
        margin: 5vh 10%;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    article img {
        width: 20%;
    }

    .artext {
        width: 80%;
        text-align: start;
        padding: 0 5%;
    }

    .arbut {
        width: 20%;
    }

    @media screen and (max-width: 769px){
        article {
            flex-direction: column;
        }
    }
</style>

<style>
    .artext p {line-break: anywhere;}
</style>