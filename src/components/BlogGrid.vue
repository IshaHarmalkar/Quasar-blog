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
}
</script>

<style>
    </style>