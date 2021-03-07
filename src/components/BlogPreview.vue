<template>
    <article v-for="post in articles" :key="post">
        <img :src="post.img">
        <p>{{post.metad}} 
            <router-link :to="'/blog/' + post.metat + '/' + post.id"><strong>Read >></strong></router-link>
        </p>
    </article>
</template>

<script>
    import {
        mapState
    } from "vuex";

    export default {
        name: "BlogPreview",
        computed: {
            ...mapState(['articles'])
        }
    }
</script>

<style scoped>
    article {
        border: solid 1px black;
        border-radius: 40px;
        margin: 10vh 10% 0;
        padding: 3vh 5%;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
        flex-wrap: wrap;
        flex-direction: row;
    }

    article:hover {
        background-color: rgb(202, 198, 198);
    }

    article img {
        width: 20%;
    }

    article p {
        width: 60%;
        padding: 0 5%;
        line-break: anywhere;
        text-align: left;
    }

    @media screen and (max-width: 769px) {
        article {
            flex-direction: column;
            border-radius: 40px;
        }

        article img {
            width: 70%;
        }

        article p {
            width: 80%;
            padding: 0 5%;
            text-align: center;
        }

    }
</style>