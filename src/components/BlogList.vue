<template>
  <div class="blog-list">
    <div class="row">
      <div class="col-md-4"><BlogCard /></div>
      <div class="col-md-4"><BlogCard /></div>
      <div class="col-md-4"><BlogCard /></div>
    </div>
  </div>
</template>

<script>
import BlogCard from 'components/BlogCard.vue'

export default {
  components: {
    BlogCard,
  },
  data() {
    return {
      blogs: [
        {
          id: 1,
          title: 'Sample Blog Title 1',
          description: 'This is a short description for Blog 1.',
          image: 'https://via.placeholder.com/400x200?text=Blog+1',
        },
        {
          id: 2,
          title: 'Sample Blog Title 2',
          description: 'This is a short description for Blog 2.',
          image: 'https://via.placeholder.com/400x200?text=Blog+2',
        },
        {
          id: 3,
          title: 'Sample Blog Title 3',
          description: 'This is a short description for Blog 3.',
          image: 'https://via.placeholder.com/400x200?text=Blog+3',
        },
        // Add more static blogs here as needed
      ],
    }
  },
}
</script>

<style scoped>

</style>
