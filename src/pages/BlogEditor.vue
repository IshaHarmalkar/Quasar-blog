<template>
  <q-page padding>
    <q-form @submit="submitBlog">
      <q-input v-model="title" label="Blog Title" required />
      <q-editor v-model="content" label="Blog Content" :min-height="200" required />
      
      <!-- Image upload field -->
      <q-file v-model="image" label="Upload Image" filled accept="image/*" />

      <q-btn label="Submit Blog" color="primary" type="submit" />
      <q-btn label="Cancel" color="negative" @click="cancel" flat />
    </q-form>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      content: '',
      image: null // Store the image file here
    };
  },
  methods: {
    submitBlog() {
      const formData = new FormData();
      formData.append('title', this.title);
      formData.append('content', this.content);
      formData.append('image', this.image); // Append the image file

      // Send the formData to the backend (you can use axios or fetch)
      console.log('Blog Title:', this.title);
      console.log('Blog Content:', this.content);
      console.log('Blog Image:', this.image);

      // For example, make an API call to submit the blog (replace with actual API)
      // axios.post('/api/blog', formData)
      //   .then(response => {
      //     console.log('Blog saved', response);
      //     this.$router.push({ name: 'home' });
      //   })
      //   .catch(error => {
      //     console.error('Error saving blog', error);
      //   });

      // Clear the form or redirect
      this.$router.push({ name: 'home' });
    },
    cancel() {
      this.$router.push({ name: 'home' }); // Redirect back to the homepage
    }
  }
}
</script>
