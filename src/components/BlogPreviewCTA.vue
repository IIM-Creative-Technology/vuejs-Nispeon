<template>
    <article v-for="post in tarray" :key="post" :id="'id' + tarray.indexOf(post)">

        <img :src="post.img">

        <div class="artext">
            <h2>{{post.title}}</h2>
            <p v-html="post.metad"></p>  
        </div>
        
        <div class="arbut">
            <router-link :to="{ path: getBlogEditLink() }">Éditer</router-link>
            <button>Supprimer</button>  
        </div>

        <router-view/>
        
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
        getBlogEditLink: function(){
            return '/admin-edit'
        }
    },
    components: {
        
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
        flex-wrap: wrap;
        flex-direction: row;
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