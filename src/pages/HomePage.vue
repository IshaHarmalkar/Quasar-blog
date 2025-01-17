<template>
  <div class="home-page">
    <!-- Featured Blog Carousel -->
    <FeaturedBlog />
    <div>
    <h3>What's new</h3>    
    </div>
    <div>
<div class="row">
  <div class="col-4"><BlogCard/></div>
  <div class="col-4"><BlogCard/></div>
  <div class="col-4"><BlogCard/></div>

</div>
    </div>


    <!-- Blog List Section -->
    <!-- <BlogList /> -->
  </div>
</template>

<script>
import FeaturedBlog from 'components/FeaturedBlog.vue';
import BlogCard from 'src/components/BlogCard.vue';

// import BlogList from 'components/BlogList.vue';

export default {
  components: {
    FeaturedBlog,
    BlogCard,
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
