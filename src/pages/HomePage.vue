<template>
  <div class="home-page">
    <!-- Featured Blog Carousel -->
    <FeaturedBlog />


    <!-- Blog List Section -->
    <!-- <BlogList /> -->
  </div>
</template>

<script>
import FeaturedBlog from 'components/FeaturedBlog.vue'

// import BlogList from 'components/BlogList.vue';

export default {
  components: {
    FeaturedBlog,
  },
}
</script>

<style scoped>
.home-page {
  padding: 0;
  background:white;
  margin: 0;
  border: 0;
}
</style>
