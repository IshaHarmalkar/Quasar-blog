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
      {
        id: 8,
        title: 'How to Disconnect from Social Media',
        summary:
          'Social media can be draining. Here’s how to take a break and reconnect with yourself.',
        content:
          'Explore strategies to reduce social media use and create space for real-world connections.',
        likes: 45,
        views: 210,
        date: '2024-12-22',
        image: '/home-page.jpg',
      },
      {
        id: 9,
        title: 'Building a Sustainable Slow Living Routine',
        summary:
          'Sustainable living aligns well with slow living principles. Here’s how to make it work.',
        content:
          'Learn how to adopt eco-friendly practices that support a slower, more intentional lifestyle.',
        likes: 80,
        views: 300,
        date: '2024-12-24',
        image: '/home-page.jpg',
      },
      {
        id: 10,
        title: 'Embracing the Art of Doing Nothing',
        summary: 'Sometimes, the best way to slow down is to do absolutely nothing.',
        content:
          'Discover the benefits of resting and how doing nothing can rejuvenate both body and mind.',
        likes: 90,
        views: 350,
        date: '2024-12-26',
        image: '/home-page.jpg',
      },
      {
        id: 11,
        title: 'The Joy of Simple Hobbies',
        summary:
          'Rediscover the pleasure of simple activities like knitting, reading, or gardening.',
        content: 'Learn how slow hobbies can bring joy and mindfulness into your daily routine.',
        likes: 65,
        views: 220,
        date: '2024-12-28',
        image: '/home-page.jpg',
      },
    ],
  }),
  actions: {
    // Add a new blog
    addBlog(newBlog) {
      this.blogs.push(newBlog)
      console.log('Blog added:', newBlog) // Debugging line
    },

    // Edit an existing blog
    editBlog(id, updatedBlog) {
      const index = this.blogs.findIndex((blog) => blog.id === id)
      if (index !== -1) {
        this.blogs[index] = { ...this.blogs[index], ...updatedBlog }
      }
    },

    // Delete a blog by ID
    deleteBlog(id) {
      this.blogs = this.blogs.filter((blog) => blog.id !== id)
    },
  },
})