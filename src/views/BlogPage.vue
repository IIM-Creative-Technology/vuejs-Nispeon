<template>
    <section v-for="post in articles" :key="post" >
        <div v-if="$route.params.title == post.metat && $route.params.id == post.id " class="editiv">

            <img :src="post.img" class="mainImg">

            <h1>{{post.title}}</h1>   

            <p v-html="post.content"></p>

            <div>
                <p>Posted on {{post.date}}</p>

                <div>
                    <img :src="admin.avatar" class="avatar">
                    <h3>{{admin.name}}</h3>
                    <p>{{admin.who}}</p>
                </div>
            </div>
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
        height: 50vH;
        border-radius: 40px;
        border: 5px rgb(190, 107, 59) solid;
    }

</style>