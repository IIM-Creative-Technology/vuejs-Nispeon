<template>
    <section v-for="post in articles" :key="post" >
        <div v-if="$route.params.title == post.metat && $route.params.id == post.id " class="editiv">

            <img :src="post.img" class="mainImg">

            <h1>{{post.title}}</h1>   

            <p v-html="post.content" class="mainCont"></p>

            <footer>
                <p>Posted on <strong>{{post.date}}</strong></p>

                <div>
                    <img :src="admin.avatar" class="avatar">
                    <div>
                        <h3>{{admin.name}}</h3>
                        <p>{{admin.who}}</p> 
                    </div>
                    
                </div>
            </footer>
        </div>        
    </section>
</template>

<script>

import { mapState } from "vuex";

export default {
    name: "BlogPage",
    computed: {
        ...mapState(['articles', 'admin'])
    }
}
</script>

<style scoped>

    .mainImg {
        max-height: 50vH;
        border-radius: 40px;
        border: 5px rgb(190, 107, 59) solid;
        max-width: 90%;
    }

    h1 {
        font-size: 2em;
    }

    .mainCont {
        font-size: 3em;
        line-break: anywhere;
    }

    footer {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }

    footer > div {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }

    .avatar {
        width: 50%;
        border-radius: 20px;
        border: black 5px solid;
    }

</style>