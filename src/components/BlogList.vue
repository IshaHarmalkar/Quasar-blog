<template>
  <div class="blog-list">
    <div class="row">
      <BlogListItem />
    </div>
  </div>
</template>

<script>
import BlogListItem from './BlogListItem.vue'

export default {
  components: {
    BlogListItem,
  },
}
</script>

<style scoped>
.blog-list {
  display: flex;
  flex-wrap: wrap;
}
</style>
