<template>
  <q-layout view="lHh Lpr lFf">
    <div class="page-wrapper">
      <!-- Header -->
      <q-header elevated class="PageHeader">
        <q-toolbar class="row items-center">
          <div>
            <q-avatar square @click="$router.push('/')">
              <img src="../assets/blog-logo.png" />
            </q-avatar>
          </div>
          <div class="q-ml-auto row items-center">
            <q-btn flat round dense icon="search" />
            <q-btn flat round dense icon="menu" @click="toggleLeftDrawer" />
          </div>
        </q-toolbar>
      </q-header>

      <!-- Sidebar Drawer -->
      <q-drawer v-model="leftDrawerOpen" side="right" show-if-above bordered>
        <q-list>
          <q-item-label header> Navigation </q-item-label>

          <!-- Drawer Links -->
          <q-item clickable v-ripple @click="$router.push('/')">
            <q-item-section avatar>
              <q-icon name="home" />
            </q-item-section>
            <q-item-section> Home </q-item-section>
          </q-item>

          <q-item clickable v-ripple @click="$router.push('/create')">
            <q-item-section avatar>
              <q-icon name="edit" />
            </q-item-section>
            <q-item-section> Create Post </q-item-section>
          </q-item>

          <q-item clickable v-ripple @click="$router.push('/about')">
            <q-item-section avatar>
              <q-icon name="info" />
            </q-item-section>
            <q-item-section> About </q-item-section>
          </q-item>
        </q-list>
      </q-drawer>

      <!-- Main Content -->
      <q-page-container>
        <router-view />
      </q-page-container>
    </div>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {
      leftDrawerOpen: false,
    }
  },
  methods: {
    toggleLeftDrawer() {
      this.leftDrawerOpen = !this.leftDrawerOpen
    },
  },
}
</script>

<style scoped>
.PageHeader {
  background-color: #ce5d25;
  color: white;
  border-radius: 12px; /* Match the border-radius of the wrapper */
  padding: 20px;       /* Adjust spacing as needed */
  margin: 20px 40px;
}

.page-wrapper {
  margin: 0 20px 0 20px; /* Adds white space around the entire page */
  background-color: white;
  border-radius: 12px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden; /* Ensures content respects the border-radius */
  
}
</style>
