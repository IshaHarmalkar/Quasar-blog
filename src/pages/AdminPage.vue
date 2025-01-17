<template>
  <div class="admin-page">
    <h2>Admin Blog Management</h2>
    
    <!-- Add Post Form -->
    <div class="form-container">
      <h3>Add New Blog Post</h3>
      <form @submit.prevent="addPost">
        <input v-model="newPost.title" type="text" placeholder="Title" required />
        <textarea v-model="newPost.description" placeholder="Description" required></textarea>
        <input v-model="newPost.image" type="text" placeholder="Image URL" />
        <button type="submit">Add Post</button>
      </form>
    </div>

    <!-- Update Post Form -->
    <div v-if="selectedPost" class="form-container">
      <h3>Update Blog Post</h3>
      <form @submit.prevent="updatePost">
        <input v-model="selectedPost.title" type="text" placeholder="Title" required />
        <textarea v-model="selectedPost.description" placeholder="Description" required></textarea>
        <input v-model="selectedPost.image" type="text" placeholder="Image URL" />
        <button type="submit">Update Post</button>
      </form>
    </div>

    <!-- Blog List -->
    <div class="blog-list">
      <div v-for="post in posts" :key="post.id" class="blog-card">
        <h4>{{ post.title }}</h4>
        <p>{{ post.description }}</p>
        <button @click="selectPost(post)">Edit</button>
        <button @click="deletePost(post.id)">Delete</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      posts: [
        {
          id: 1,
          title: 'Sample Blog Post 1',
          description: 'Description for blog post 1',
          image: 'https://via.placeholder.com/400x200?text=Blog+1'
        },
        {
          id: 2,
          title: 'Sample Blog Post 2',
          description: 'Description for blog post 2',
          image: 'https://via.placeholder.com/400x200?text=Blog+2'
        },
        // Add more posts here
      ],
      newPost: {
        title: '',
        description: '',
        image: ''
      },
      selectedPost: null
    };
  },
  methods: {
    addPost() {
      const newPost = { ...this.newPost, id: Date.now() };
      this.posts.push(newPost);
      this.newPost = { title: '', description: '', image: '' }; // Reset the form
    },
    updatePost() {
      const index = this.posts.findIndex(post => post.id === this.selectedPost.id);
      if (index !== -1) {
        this.posts[index] = { ...this.selectedPost };
        this.selectedPost = null; // Reset the form
      }
    },
    deletePost(id) {
      this.posts = this.posts.filter(post => post.id !== id);
    },
    selectPost(post) {
      this.selectedPost = { ...post };
    }
  }
};
</script>

<style scoped>
.admin-page {
  padding: 20px;
}

.form-container {
  margin-bottom: 20px;
}

form input,
form textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
}

form button {
  background-color: #007bff;
  color: white;
  padding: 10px 20px;
  border: none;
  cursor: pointer;
}

form button:hover {
  background-color: #0056b3;
}

.blog-list {
  margin-top: 30px;
}

.blog-card {
  border: 1px solid #ccc;
  padding: 16px;
  border-radius: 8px;
  background-color: #fff;
  margin-bottom: 10px;
}

button {
  background-color: #ff4d4d;
  color: white;
  border: none;
  padding: 5px 10px;
  cursor: pointer;
}

button:hover {
  background-color: #e60000;
}

button + button {
  margin-left: 10px;
}
</style>
