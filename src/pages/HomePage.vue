<template>
  <div class="home-page">
    <!-- Featured Blog Carousel -->
    <FeaturedBlog />
    <div>
      <h3>What's new?</h3>
      <hr />
      <BlogGrid />
      <BlogGrid />
    </div>
    <div class="recent-posts"></div>

    <div class="featured-posts">
      <h3>Featured Posts</h3>
      <hr />
      <FeaturedBlog />
    </div>
  </div>
</template>

<script>
import FeaturedBlog from 'components/FeaturedBlog.vue'
import BlogGrid from 'src/components/BlogGrid.vue'

// import BlogList from 'components/BlogList.vue';

export default {
  components: {
    FeaturedBlog,
    BlogGrid,
  },
}
</script>

<style scoped>
.home-page {
  padding: 0;
  background: white;
  margin: 0;
  border: 0;
  font-family: Raleway, sans-serif;
}

h3 {
  padding: 0;
  margin: 20px 20px 0 20px;
}

hr {
  color: gray;
  margin: 20px;
}
</style>
