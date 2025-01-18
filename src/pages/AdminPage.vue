<template>
  <q-page>
    <div class="row">
      <div class="col-9">
        <BlogListItem class="blog-list-admin" />
      </div>

      <div class="col-3">
        <q-btn label="Create Blog" color="primary" @click="goToEditor" class="blog-list-admin" />
      </div>
    </div>
  </q-page>
</template>

<script>
import BlogListItem from 'src/components/BlogListItem.vue'

export default {
  components: {
    BlogListItem,
  },

  data() {
    
  },
  methods: {
     goToEditor() {
      this.$router.push({ name: 'create' }); // Navigate to the editor page
    }
  
  },
}
</script>

<style scoped>
button {
  padding: 20px 32px;
  margin: 8px;
  border-radius: 55px;
}
.primary-button {
  color: #ce5d25;
  background: white;
  border: #ce5d25 solid;
}
.secondary-button {
  color: white;
  background: #ce5d25;
  border: white solid 1px;
}

.blog-list {
  background: salmon;
  margin: 50px;
  padding: 20px;
}
.side-section {
  background: red;
}

.blog-list-admin {
  margin: 42px 25px;
}
</style>
