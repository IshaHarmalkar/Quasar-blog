<template>
  <q-page padding>
    <q-form @submit.prevent="submitBlog">
      <q-input v-model="title" label="Blog Title" outlined required />
      <q-editor v-model="content" label="Blog Content" :min-height="200" outlined required />
      <q-input v-model="author" label="Author" outlined required />

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

    <!-- Success Dialog -->
    <q-dialog v-model="successDialog">
      <q-card>
        <q-card-section>
          <div class="text-h6">Success</div>
          <p>Your blog has been submitted successfully!</p>
        </q-card-section>
        <q-card-actions>
          <q-btn label="Close" color="primary" @click="successDialog = false" />
        </q-card-actions>
      </q-card>
    </q-dialog>

    <!-- Error Dialog -->
    <q-dialog v-model="errorDialog">
      <q-card>
        <q-card-section>
          <div class="text-h6">Error</div>
          <p>There was an issue submitting your blog. Please try again.</p>
        </q-card-section>
        <q-card-actions>
          <q-btn label="Close" color="negative" @click="errorDialog = false" />
        </q-card-actions>
      </q-card>
    </q-dialog>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      title: '',
      content: '',
      author: '',
      image: null,
      successDialog: false,
      errorDialog: false,
      blogId: this.$route.params.blogId || null, // Get the blogId from route params
    }
  },
  created() {
    if (this.blogId) {
      this.loadBlogData()
    }
  },
  methods: {
    resetForm() {
      this.title = ''
      this.content = ''
      this.author = ''
      this.image = null
    },

    async loadBlogData() {
      try {
        console.log('load BlogData Hit')
        const response = await this.$api.get(`/blogs/${this.blogId}`)
        const blog = response.data
        this.title = blog.title
        this.content = blog.content
        this.author = blog.author
        // If there’s an image, we can load it here if needed.
      } catch (error) {
        console.error('Error loading blog data:', error)
        this.errorDialog = true // Show error dialog
      }
    },

    async submitBlog() {
      console.log(`entered submit blog`)
      const formData = new FormData()
      formData.append('title', this.title)
      formData.append('content', this.content)
      formData.append('author', this.author)

      if (this.image) {
        formData.append('image', this.image)
      }
      console.log('form data contents:')
      for (let [key, value] of formData.entries()) {
        console.log(key, value)
      }

      try {
        const response = await this.$api.post(`/blogs`, formData, {
          headers: { 'Content-Type': 'multipart/form-data' },
        })
        console.log(response.data)
        this.successDialog = true;
        // Handle success
      } catch (error) {
        this.errorDialog = true;
        // Check if the error has a response object (for HTTP errors)
        if (error.response) {
          console.error('Error submitting blog:', error.response.data) // Log the error data
          console.error('Error status:', error.response.status) // Log the error status code
          console.error('Error headers:', error.response.headers) // Log the error headers
        } else if (error.request) {
          // If no response was received, log the request that was sent
          console.error('No response received:', error.request)
        } else {
          // If there is some other error (e.g., network issues or invalid configuration)
          console.error('Error:', error.message)
        }
      }
    },
    cancel() {
      this.resetForm()
      this.$router.push('/admin')
    },

    onFileChange(event) {
      this.image = event.target.files[0] // Get the selected file from the input
      console.log('Selected file:', this.image)
    },
  },
}
</script>
