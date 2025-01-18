<template>
  <div class="blog-list-item">
    <div class="row justify-between">
      <div class="blog-list-admin">
        <q-card flat bordered>
          <q-card-section>
            <div class="text-h5">Manage Blogs</div>
          </q-card-section>
          <q-separator />

          <!-- Blog List -->
          <q-list bordered separator>
            <!-- Static Blog Entry -->
            <q-item clickable v-ripple class="q-mb-md">
              <!-- Blog Cover Image on the Left -->
              <q-item-section avatar>
                <q-img
                  src="/home-page.jpg"
                  alt="Blog Image"
                  style="width: 100px; height: 100px; object-fit: cover"
                />
              </q-item-section>

              <!-- Blog Content -->
              <q-item-section>
                <q-item-label class="text-h6">First Blog</q-item-label>
                <q-item-label caption class="text-grey">
                  This blog is about mundane things
                </q-item-label>
                <div class="q-mt-sm row items-center text-grey">
                  <div class="col-auto">
                    <q-icon name="favorite" size="18px" color="red" /> 25 Likes
                  </div>
                  <div class="col-auto q-ml-md">
                    <q-icon name="visibility" size="18px" color="blue" /> 100 Views
                  </div>
                  <div class="col-auto q-ml-md">
                    <q-icon name="event" size="18px" color="grey" /> 12/08/24
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
                    @click="editBlog"
                  />
                  <q-btn
                    label="Delete"
                    color="negative"
                    size="sm"
                    icon="delete"
                    flat
                    class="q-ml-sm"
                    @click="deleteBlog"
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
      blogs: [
        {
          id: 1,
          title: 'First Blog',
          excerpt: 'This is the first blog excerpt',
          clicks: 120,
          image: '/home-page.jpg',
        },
      ],
    }
  },
  methods: {
    editBlog() {
      console.log('Edit button clicked')
    },
    deleteBlog() {
      console.log('Delete button clicked')
    },
  },
}
</script>

<style scoped>
.blog-image {
  width: 100px;
  height: 100px;
  object-fit: cover;
}
</style>
