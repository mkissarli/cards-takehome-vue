<template>
  <div class="p-card--highlighted">
    <h3>Tag</h3>
    <img/>
    <h2><a>This is the title</a></h2>
    <p>By <a>author</a> on date</p>
    <h3>tag</h3>
  </div>
</template>

<script>
export default {
  name: 'BlogCard',
  props: [
    'blogPost'
  ],
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
div{
  width: 308px;
  height: 394px;
}

</style>
