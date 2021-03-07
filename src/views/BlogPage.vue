<template>
    <section v-for="post in articles" :key="post" >
        <div v-if="$route.params.title == post.metat && $route.params.id == post.id " class="editiv">
            <h1>{{post.title}}</h1>
        </div>        
    </section>
</template>

<script>

import { mapState } from "vuex";

export default {
    name: "BlogPage",
    computed: {
        ...mapState(['articles'])
    }
}
</script>