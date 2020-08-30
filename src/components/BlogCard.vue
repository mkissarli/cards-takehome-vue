<template>
  <div class="p-card--highlighted col-3">

    <header class="topic-name">
      <h4 class="p-muted-heading">{{(blogPost["topic"][0] === undefined) ? "" : blogPost._embedded["wp:term"][2][0].name }}</h4>
    </header>


    <div class="content">
      <div>
        <img :src="blogPost.featured_media"/>
      </div>
      <h3><a class="line-clamp" :href="blogPost.link">
        {{blogPost.title.rendered}}</a></h3>
      <span><p class="author">
        <em>
           By <a :href="blogPost._embedded.author[0].link">{{ blogPost._embedded.author[0].name }}</a> on {{blogPost.date | formatDate}}
        </em>
      </p></span>
    </div>


      <p class="post-type">
        {{(blogPost["categories"] === undefined) ? "" : blogPost._embedded["wp:term"][0][0].name}}
      </p>


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

<style scoped lang="scss">
div.p-card--highlighted{
  padding: 0;
  border-top: 3px solid #a87ca0;
  max-height: 100%;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}
header{
  min-height: 11%;
}
header.topic-name {
  padding: 1rem 1rem 0rem;
  font-size: 1.5rem;
}
header.topic-name h4{
  color: #272727;
  margin-top: -0.35rem;
}

div.content{
  border-top: 1px dotted #cdcdcd;
  margin: 0 .5rem;
  padding: 1rem .5rem .5rem;
  flex-grow: 1;
  line-height: 36px;
  display: flex;
  flex-direction: column;
  //max-height:  70%;
}

div.content h3 {
  display: block;
  margin: 0.5rem 0;
  font-size: 1.5rem;
  height: 4rem;
  width: 100%;
  line-height: 32px;
}

.line-clamp {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;  
  overflow: hidden;
}

span{
  display: flex;
}

p.author{
  margin: 0.1rem 0;
}

div img{
  display: block;
  width: 98%;
  margin-top: -0.25rem;
}

p.post-type{
  border-top: 1px dotted #cdcdcd;
  font-size: .875rem;
  margin: auto .5rem 0;
  max-width: inherit;
  padding: 1rem .5rem;
}

a {
  font-weight: medium;
  color: #007aa6;
}

</style>
