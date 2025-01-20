<template>
  <q-page padding>
    <q-form @submit.prevent="submitBlog">
      <q-input v-model="title" label="Blog Title" outlined required />
      <q-editor v-model="content" label="Blog Content" :min-height="200" outlined required />
      
      <!-- Image upload field -->
      <q-file 
        v-model="image" 
        label="Upload Image" 
        filled 
        accept="image/*" 
        outlined 
        @change="onFileChange" 
      />

      <q-btn label="Submit Blog" color="primary" type="submit" />
      <q-btn label="Cancel" color="negative" @click="cancel" flat />
    </q-form>
  </q-page>
</template>

<script>

import { useBlogStore } from 'src/stores/blog-store';

export default {
  data() {
    return {
      title: "",
      content: "",
      image: null,
    };
  },
  setup() {
    const blogStore = useBlogStore(); // Initialize the store here for reactivity
    return { blogStore };
  },
  methods: {
    async submitBlog() {
      try {
        const newBlog = {
          id: Date.now(),
          title: this.title,
          content: this.content,
          image: this.image ? URL.createObjectURL(this.image) : "",
          date: new Date().toISOString(),
        };

        // Add the new blog to the store
        this.blogStore.addBlog(newBlog);

        alert("Blog successfully created!");
        this.$router.push({ name: "home" });
      } catch (error) {
        console.error("Error saving blog:", error);
        alert("Failed to create blog. Please try again.");
      }
    },
    onFileChange(file) {
      this.image = file[0];
    },
    cancel() {
      this.$router.push({ name: "home" });
    },
  },
};




</script>