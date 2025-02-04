<template>
  <q-page>
    <div class="row admin-page">
    
      <div class="col-9 bg-1">
        <BlogList />
      </div>

      <div class="col-3 bg-2">
        <q-btn label="Create Blog" color="primary" @click="goToEditor" class="blog-list-admin" />
      </div>
    </div>
  </q-page>
</template>

<script>
import BlogList from 'src/components/BlogList.vue'

export default {
  components: {
    BlogList,
  },

  methods: {
    goToEditor() {
      this.$router.push({ name: 'create' }) // Navigate to the editor page
    },
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

.admin-page {
  margin: 100px 25px;
  /*border: solid 1px blue; */
}

.bg-1 {
 
}

.bg-2 {
 
}
</style>
