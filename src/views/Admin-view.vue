<template>
  <div class="body">
    <header>    
        <router-link to="/admin-create">Create an article</router-link>
    </header>

    <main>
      <BlogPreviewCTA/>
    </main>
  </div>
</template>

<script>

  import BlogPreviewCTA from "@/components/BlogPreviewCTA";

export default {

  
  name: 'Admin-view',
  components: {
    BlogPreviewCTA
  }

}
</script>

<style>
.body {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
