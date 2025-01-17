<template>
  <div class="blog-list">
    <BlogCard v-for="blog in blogs" :key="blog.id" :blog="blog" />
  </div>
</template>

<script>
import BlogCard from 'components/BlogCard.vue';

export default {
  components: {
    BlogCard
  },
  data() {
    return {
      blogs: [
        {
          id: 1,
          title: 'Sample Blog Title 1',
          description: 'This is a short description for Blog 1.',
          image: 'https://via.placeholder.com/400x200?text=Blog+1'
        },
        {
          id: 2,
          title: 'Sample Blog Title 2',
          description: 'This is a short description for Blog 2.',
          image: 'https://via.placeholder.com/400x200?text=Blog+2'
        },
        {
          id: 3,
          title: 'Sample Blog Title 3',
          description: 'This is a short description for Blog 3.',
          image: 'https://via.placeholder.com/400x200?text=Blog+3'
        }
        // Add more static blogs here as needed
      ]
    };
  }
};
</script>

<style scoped>
.blog-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
}
</style>
