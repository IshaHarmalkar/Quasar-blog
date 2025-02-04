<template>
  <div class="blog-list-item">
    <div class="row justify-between">
      <div class="blog-list-admin">
        <q-card flat bordered>
          <q-card-section>
            <div class="text-h5">Manage Blogs</div>
          </q-card-section>
          <q-separator />

          <!-- Dynamic Blog List -->
          <q-list bordered separator>
            <!-- Iterate through blogs from the store -->
            <q-item v-for="blog in blogs" :key="blog.id" clickable v-ripple class="q-mb-md">
              <!-- Blog Image on the Left -->
              <q-item-section avatar>
              <q-img :src="blog.image_url" class="blog-image" fit="cover" />

              </q-item-section>

              <!-- Blog Content -->
              <q-item-section>
                <q-item-label class="text-h6">{{ blog.title }}</q-item-label>
                <q-item-label caption class="text-grey">
                  {{ blog.content.slice(0, 100) }}...
                  <!-- Show a portion of the content -->
                </q-item-label>
                <div class="q-mt-sm row items-center text-grey">
                  <div class="col-auto">
                    <q-icon name="person" size="18px" color="blue" />
                    {{ blog.author }}
                  </div>
                  <div class="col-auto q-ml-md">
                    <q-icon name="event" size="18px" color="grey" />
                    {{ new Date(blog.created_at).toLocaleDateString() }}
                  </div>
                </div>
              </q-item-section>

              <!-- Buttons on the Right -->
              <q-item-section side>
                <div class="row justify-end">
                  <q-btn
                    label="Edit"
                    color="primary"
                    size="sm"
                    icon="edit"
                    flat
                    @click="editBlog(blog.id)"
                  />
                  <q-btn
                    label="Delete"
                    color="negative"
                    size="sm"
                    icon="delete"
                    flat
                    class="q-ml-sm"
                    @click="deleteBlog(blog.id)"
                  />
                </div>
              </q-item-section>
            </q-item>
          </q-list>
        </q-card>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      blogs: [], // Array to store the fetched blogs
    }
  },
  methods: {
    async fetchBlogs() {
      try {
        const response = await this.$api.get('/blogs') // Make API request to fetch blogs
        this.blogs = response.data // Store the blogs in the component's data
      } catch (error) {
        console.error('Error fetching blogs:', error)
      }
    },
    async deleteBlog(id) {
      try {
        // Make the DELETE request to the backend
        await this.$api.delete(`/blogs/${id}`)

        // Filter out the deleted blog from the blogs array
        this.blogs = this.blogs.filter((blog) => blog.id !== id)

        this.$q.notify({
          type: 'positive',
          message: 'Blog deleted successfully!',
        })
      } catch (error) {
        console.error('Error deleting blog:', error)
        this.$q.notify({
          type: 'negative',
          message: 'Failed to delete the blog.',
        })
      }
    },
    editBlog(id) {
      // Navigate to the editor page with the selected blogId
      this.$router.push({ name: 'edit', params: { blogId: id } })
    },
  },
  mounted() {
    this.fetchBlogs() // Fetch blogs when the component is mounted
  },
}
</script>

<style scoped>
.blog-image {
  width: 100px;
  height: 100px;
  object-fit: cover;
}

.blog-list-admin {
  /* border: 1px solid red; */
}
</style>
