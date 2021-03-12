<template>
  <div class="body">
    <header>    
        <router-link to="/admin-create" class="link">Create an article</router-link>
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

.link {
  text-decoration: none;
  color: #2c3e50;
  border: #2c3e50 dotted 1px;
  padding: 1vH;
  border-radius: 50px;
}

.link:hover {
  color: #42b983;
  border: #42b983 dotted 1px;
}

.body {
  font-family: sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
