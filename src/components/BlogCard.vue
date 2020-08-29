<template>
  <div class="p-card--highlighted">
    <h4>{{(blogPost["topic"][0] === undefined) ? "" : blogPost._embedded["wp:term"][2][0].name }}</h4>
    <img :src="blogPost.featured_media"/>
    <h3><a :href="blogPost.link">{{blogPost.title.rendered}}</a></h3>
    <p>By <a :href="blogPost._embedded.author[0].link">{{ blogPost._embedded.author[0].name }}</a> on {{blogPost.date}}</p>
    <h4>{{(blogPost["categories"] === undefined) ? "" : blogPost._embedded["wp:term"][0][0].name}}</h4>
  </div>
</template>

<script>
export default {
  name: 'BlogCard',
  props: [
    'blogPost'
  ],
  methods: {
    isUndefined: function(value){
      if(value[0].name !== null){
        return value[0].name;
      }
      else{
        return "";
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
div{
  width: 308px;
  height: 394px;
  margin-left: 33px;
  margin-right: 33px;
}

</style>
