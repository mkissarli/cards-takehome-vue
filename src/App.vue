<template>
  <div id="app" class="row">
    <BlogCard v-for="post in posts" :key="post.slug" :blogPost="post"/>
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
// Import the framework
@import 'node_modules/vanilla-framework/scss/vanilla';

// Include all of Vanilla Framework
@include vanilla;
#app{
  margin-top: 0.65rem;
  margin-bottom: 0.65rem;
  display: flex;
  flex-direction: row;

  // The dimensions given for the brief.
  width: 1030px;
  height: 420px;
  background-color: #ffffff;
}
</style>
