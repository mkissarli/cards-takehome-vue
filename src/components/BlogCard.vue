<template>
  <div class="p-card--highlighted col-3">

    <!-- Header containing the blog Category. If empty leave empty. -->
    <header class="topic-name">
      <h4 class="p-muted-heading">{{(blogPost["topic"][0] === undefined) ? "" : blogPost._embedded["wp:term"][2][0].name }}</h4>
    </header>

    <!-- Main content of blog post card. Has an image, a title that is truncuated after two lines, and a date/author line. -->
    <div class="content">
      <div>
        <img :src="blogPost.featured_media"/>
      </div>
      <p class="p-heading--4">
        <a class="line-clamp" :href="blogPost.link">
          {{blogPost.title.rendered}}
        </a>
      </p>
      <span>
        <p class="author">
          <em>
            By <a :href="blogPost._embedded.author[0].link">{{ blogPost._embedded.author[0].name }}</a> on {{blogPost.date | formatDate}}
          </em>
        </p>
      </span>
    </div>

    <!-- Footer containing the type of post, for example article. -->
    <footer>
      <p class="post-type">
        {{(blogPost["categories"] === undefined) ? "" : blogPost._embedded["wp:term"][0][0].name}}
      </p>
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

<style scoped lang="scss">
div.p-card--highlighted{
  display: flex;
  flex-direction: column;

  padding: 0;
  
  border-top: 3px solid #a87ca0;
  max-height: 100%;
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
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  border-top: 1px dotted #cdcdcd;
  
  margin: 0 .5rem;
  padding: 1rem .5rem .5rem;
  
  line-height: 36px;
}
div.content p.p-heading--4 {
  display: block;
  margin: 0.7rem 0 0.3rem;
  font-size: 1.3rem;
  //height: 4em;
  width: 100%;
  line-height: 32px;
}
.line-clamp {
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;  
  overflow: hidden;
}

p.author{
  margin: 0.1rem 0;
  font-size: 0.9rem;
}

img{
  display: block;
  width: 98%;
  margin-top: -0.25rem;
}

p.post-type{
  margin: auto .6rem 0;
  padding: 0.8rem .5rem 0.8rem;

  border-top: 1px dotted #cdcdcd;
  max-width: inherit;
  //height: 14%;

  font-size: .875rem;
}

a {
  font-weight: medium;
  color: #007aa6;
}

</style>
