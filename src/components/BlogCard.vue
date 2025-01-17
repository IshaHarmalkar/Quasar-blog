<template>
  <div class="blog-card">

 <q-card class="my-card" flat bordered>
      <img src="https://cdn.quasar.dev/img/mountains.jpg">

      <q-card-actions align="right">
        <q-btn flat round color="red" icon="favorite" />
        <q-btn flat round color="teal" icon="bookmark" />
        <q-btn flat round color="primary" icon="share" />
      </q-card-actions>
    </q-card>
  </div>
</template>

<script>
export default {
  props: {
    blog: {
      type: Object,
      required: true,
      validator(value) {
        // Ensure the blog object has the necessary properties
        return value && typeof value.title === 'string' && typeof value.description === 'string' && typeof value.id === 'number';
      }
    }
  },
  data() {
    return {
      // Fallback image in case blog.image is undefined
      defaultImage: 'https://via.placeholder.com/400x200?text=No+Image+Available'
    };
  }
}
</script>

<style scoped>
.blog-card {
  border: 1px solid #ccc;
  padding: 16px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  background-color: #fff;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.blog-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
}

.blog-card-image {
  width: 100%;
  height: auto;
  border-radius: 8px;
  object-fit: cover;
}

.blog-card-content {
  padding: 16px;
}

.blog-title {
  font-size: 1.5em;
  margin: 0;
}

.blog-description {
  font-size: 1.1em;
  margin: 16px 0;
}

.read-more {
  text-decoration: none;
  color: #007bff;
  font-weight: bold;
}

.read-more:hover {
  text-decoration: underline;
}
</style>
