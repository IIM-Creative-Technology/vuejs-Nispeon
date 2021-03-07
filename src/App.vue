<template>

  <div id="nav">
    <router-link to="/blog">Blog</router-link> |
    <router-link to="/admin">Admin</router-link> 
  </div>
  <router-view/>
</template>

<script>


export default {
  name: "app"
}
</script>

<style>

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  min-height: 100vH;
  background-image: linear-gradient(to top, #a8edea 0%, #fed6e3 100%);}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
