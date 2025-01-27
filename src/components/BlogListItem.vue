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
            <q-item
              v-for="blog in blogStore.blogs"
              :key="blog.id"
              clickable
              v-ripple
              class="q-mb-md"
            >
              <!-- Blog Cover Image on the Left -->
              <q-item-section avatar>
                <q-img
                  :src="blog.image"
                  :alt="blog.title"
                  style="width: 100px; height: 100px; object-fit: cover"
                />
              </q-item-section>

              <!-- Blog Content -->
              <q-item-section>
                <q-item-label class="text-h6">{{ blog.title }}</q-item-label>
                <q-item-label caption class="text-grey">
                  {{ blog.summary }}
                </q-item-label>
                <div class="q-mt-sm row items-center text-grey">
                  <div class="col-auto">
                    <q-icon name="favorite" size="18px" color="red" /> {{ blog.likes }} Likes
                  </div>
                  <div class="col-auto q-ml-md">
                    <q-icon name="visibility" size="18px" color="blue" /> {{ blog.views }} Views
                  </div>
                  <div class="col-auto q-ml-md">
                    <q-icon name="event" size="18px" color="grey" />
                    {{ new Date(blog.date).toLocaleDateString() }}
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
import { useBlogStore } from 'src/stores/blog-store';

export default {
  name: 'BlogListItem',
  setup() {
    const blogStore = useBlogStore()

    const editBlog = (id) => {
      console.log(`Edit blog with ID: ${id}`)
      // Add navigation or edit functionality here
    }

    const deleteBlog = (id) => {
      console.log(`Delete blog with ID: ${id}`)
      blogStore.deleteBlog(id) // Calls the delete action from the store
    }

    return { blogStore, editBlog, deleteBlog }
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
  border: 1px solid red;
}
</style>
