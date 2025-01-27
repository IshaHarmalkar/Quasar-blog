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
import { useBlogStore } from "src/stores/blog-store"; // Import the blog store

export default {
  data() {
    return {
      title: "",
      content: "",
      image: null,
    };
  },
  setup() {
    const blogStore = useBlogStore(); // Initialize the store for reactivity
    return { blogStore };
  },
  methods: {
    async submitBlog() {
      try {
        const newBlog = {
          id: Date.now(),
          title: this.title,
          summary: this.content.slice(0, 50) + "...", // Generate a basic summary
          content: this.content,
          image: this.image ? URL.createObjectURL(this.image) : "/default-image.jpg",
          likes: 0,
          views: 0,
          date: new Date().toISOString().split("T")[0], // Format the date as YYYY-MM-DD
        };

        // Add the new blog to the store
        this.blogStore.addBlog(newBlog);

        alert("Blog successfully created!");

        // Reset the form
        this.resetForm();

        this.$router.push({ name: "home" }); // Navigate back to the home page
      } catch (error) {
        console.error("Error saving blog:", error);
        alert("Failed to create blog. Please try again.");
      }
    },
    onFileChange(file) {
      this.image = file[0];
    },
    cancel() {
      this.$router.push({ name: "home" }); // Navigate back to the home page
    },
    resetForm() {
      this.title = "";
      this.content = "";
      this.image = null;
    },
  },
};
</script>
