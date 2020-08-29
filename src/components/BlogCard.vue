<template>
  <div class="p-card--highlighted col-4">

    <header class="topic-name">
      <h5 class="p-muted-heading">{{(blogPost["topic"][0] === undefined) ? "" : blogPost._embedded["wp:term"][2][0].name }}</h5>
    </header>

    <div class="content">
      <img :src="blogPost.featured_media"/>
      <h3 class="p-heading--four"><a :href="blogPost.link">{{blogPost.title.rendered}}</a></h3>
      <p>By <a :href="blogPost._embedded.author[0].link">{{ blogPost._embedded.author[0].name }}</a> on {{blogPost.date | formatDate}}</p>
    </div>

    <footer>
      <h6>
        {{(blogPost["categories"] === undefined) ? "" : blogPost._embedded["wp:term"][0][0].name}}
      </h6>
    </footer>

  </div>
</template>

<script>
import moment from 'moment'

export default {
  name: 'BlogCard',
  props: [
    'blogPost'
  ],
  filters:{
    formatDate: function(value) {
      if (value) {
        return moment(String(value)).format('DD MMMM YYYY')
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
div.p-card--highlighted{
  /*width: 308px;
  height: 393px;*/
  /*margin: 0 0.5rem;*/
  border-top: 3px solid #a87ca0;
  
}
header.topic-name {
  padding: 0.5rem 1rem 0.5rem;
  font-size: 1.5rem;
}
header.topic-name h5{
  color: #272727;
  margin-top: -0.5rem;
  margin-bottom: -0.25rem;
}

div.content{
  border-top: 1px dotted;

  margin: 0 .5rem;
  padding: 1rem .5rem .5rem;
  height: 100%;

  /*display: flex;
  flex-direction: column;*/
}
div.content h3 {
  display: block;
  margin: .5rem 0;
}
div.img{
  width: 95%;
}
div footer{
  border-top: 1px dotted;
}
</style>
