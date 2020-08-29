<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <!--{{posts}}-->
    <BlogCard v-for="post in posts" :key="post.id" :blogPost="post"/>
  </div>
</template>

<script>
import axios from "axios";

import BlogCard from './components/BlogCard.vue'

export default {
  name: 'App',
  data(){
    return {
      posts: null,
    }
  },
  components: {
    BlogCard
  },
  mounted () {
    axios
      .get('https://people.canonical.com/~anthonydillon/wp-json/wp/v2/posts.json')
      .then(response => (this.posts = response.data));
    console.log(this.posts);
  }
}
</script>

<style lang="scss">
/*#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
*/
// Import the framework
@import 'node_modules/vanilla-framework/scss/vanilla';

// Include all of Vanilla Framework
@include vanilla;
#app{
  margin-left: 20px;
  margin-right: 20px;
}
</style>
