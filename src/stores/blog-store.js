// stores/blog.js
import { defineStore } from 'pinia'


export const useBlogStore = defineStore('blog', {
  state: () => ({
    blogs: [
      {
        id: 1,
        title: 'How to do a digital detox',
        summary: 'Do you feel overwhelmed with all the files lying on your desktop?',
        content:
          'We will walk you through how to clean your desktop and declutter your digital life.',
        likes: 25,
        views: 100,
        date: '2024-12-08',
        image: '/home-page.jpg',
      },
      {
        id: 2,
        title: 'The Art of Slow Mornings',
        summary: 'Start your day without rushing—embrace slow mornings and calm routines.',
        content:
          'Learn how to create a peaceful morning ritual that sets the tone for a productive day.',
        likes: 30,
        views: 150,
        date: '2024-12-10',
        image: '/home-page.jpg',
      },
      {
        id: 3,
        title: 'Simplifying Your Home for a Peaceful Life',
        summary:
          'A clutter-free home leads to a clutter-free mind. Here’s how to simplify your space.',
        content: 'Explore tips on decluttering your home and creating serene, minimalist spaces.',
        likes: 50,
        views: 200,
        date: '2024-12-12',
        image: '/home-page.jpg',
      },
      {
        id: 4,
        title: 'Mindful Eating: Savor Every Bite',
        summary: 'Slow down and enjoy your food with mindfulness and intention.',
        content:
          'Learn how to practice mindful eating and connect with your meals on a deeper level.',
        likes: 40,
        views: 180,
        date: '2024-12-14',
        image: '/home-page.jpg',
      },
      {
        id: 5,
        title: 'The Importance of Taking Nature Walks',
        summary: 'Spending time in nature can slow down your thoughts and refresh your mind.',
        content:
          'Discover the benefits of taking daily walks in nature and how it nurtures your well-being.',
        likes: 60,
        views: 250,
        date: '2024-12-16',
        image: '/home-page.jpg',
      },
      {
        id: 6,
        title: 'Creating a Slow Living Journal',
        summary: 'Journaling is a great way to slow down and reflect on your day.',
        content:
          'Learn how to create a slow living journal that helps you stay grounded and mindful.',
        likes: 55,
        views: 230,
        date: '2024-12-18',
        image: '/home-page.jpg',
      },
      {
        id: 7,
        title: 'Practicing Gratitude in the Slow Life',
        summary: 'Gratitude is a key practice in slow living that brings peace and contentment.',
        content:
          'Find out how to incorporate gratitude into your daily routine and embrace the present moment.',
        likes: 70,
        views: 280,
        date: '2024-12-20',
        image: '/home-page.jpg',
      },
    
    ],
  }),

  getters: {
    // Get a blog by its ID
    getBlogById: (state) => (id) => {
      return state.blogs.find((blog) => blog.id === id)
    },

    // Get blogs sorted by likes
    blogsByLikes: (state) => {
      return [...state.blogs].sort((a, b) => b.likes - a.likes)
    },

    // Get blogs sorted by views
    blogsByViews: (state) => {
      return [...state.blogs].sort((a, b) => b.views - a.views)
    },

    // Get the total count of blogs
    totalBlogs: (state) => {
      return state.blogs.length
    },

    // Get blogs published after a given date
    blogsAfterDate: (state) => (date) => {
      return state.blogs.filter((blog) => new Date(blog.date) > new Date(date))
    },
  },

  actions: {
    // Add a new blog
    addBlog(newBlog) {
      // Ensure the blog ID is unique
      if (this.blogs.some((blog) => blog.id === newBlog.id)) {
        console.warn(`Blog with id ${newBlog.id} already exists`)
        return
      }
      this.blogs.push(newBlog)
    },

    // Update an existing blog
    updateBlog(id, updatedData) {
      const blog = this.blogs.find((blog) => blog.id === id)
      if (blog) {
        Object.assign(blog, updatedData)
      } else {
        console.warn(`Blog with id ${id} not found`)
      }
    },

    // Delete a blog by ID
    deleteBlog(id) {
      this.blogs = this.blogs.filter((blog) => blog.id !== id)
    },

    // Increment likes for a blog
    incrementLikes(id) {
      const blog = this.blogs.find((blog) => blog.id === id)
      if (blog) {
        blog.likes += 1
      } else {
        console.warn(`Blog with id ${id} not found`)
      }
    },

    // Increment views for a blog
    incrementViews(id) {
      const blog = this.blogs.find((blog) => blog.id === id)
      if (blog) {
        blog.views += 1
      } else {
        console.warn(`Blog with id ${id} not found`)
      }
    },
  },
})