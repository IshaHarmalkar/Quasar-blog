<template>
  <q-layout>
    <div>
      <!-- Header -->
      <q-header elevated>
        <q-toolbar>
          <q-toolbar-title>
            <!-- Logo, you can replace this with an image -->
            <div class="logo" @click="goHome" style="cursor: pointer;">
              <img src="cv-logo.jpg" alt="Logo" class="logo-img" />
            </div>
          </q-toolbar-title>

          <div>
            <!-- Sign In and Sign Up buttons -->
            <q-btn flat label="Sign In" @click="goToSignIn" class="btn primary-btn" />
            <q-btn flat label="Sign Up" @click="goToSignUp" class="btn secondary-btn" />
          </div>
        </q-toolbar>
      </q-header>

      <!-- Main Content Area -->
      <q-page-container>
        <router-view />
      </q-page-container>
    </div>
  </q-layout>
</template>

<script>
export default {
  methods: {
      goHome() {
      this.$router.push({ name: 'home' }) // Navigate to the home page
    },
    goToSignIn() {
      this.$router.push({ name: 'login' }) // Navigate to the login page
    },
    goToSignUp() {
      this.$router.push({ name: 'sign-up' }) // You can define this route separately
    },

  },
}
</script>

<style scoped>
.q-header,
q-toolbar {
  background-color: white;
}

.btn {
  font-family: sans-serif;
  font-size: 12px;
}
.logo {
  color: black;
  font-size: thin;
}
.primary-btn {
  background: #035198;
  color: white;
  margin: 10px;
  box-shadow: 5px 2px 12px #035198;
}

.secondary-btn {
  color: black;
  background: white;
  border: #035198;
  margin: 10px;
  border:
    #035198,
    solid 2px;
  box-shadow: 5px 2px 12px #035198;
}

.primary-btn:hover {
  background: white;
  color: #035198;
  border: solid 2px #035198; /* Add border on hover */
  box-shadow: 5px 2px 12px #035198;
}

.secondary-btn:hover {
  background: #035198;
  color: white;
  border: solid 2px #035198; /* Keep border, change color on hover */
  box-shadow: 5px 2px 12px #035198;
}

.logo-img {
  width: auto; /* Adjust size as needed */
  height: 40px;
  margin: 0;
  padding: 2px;
}
</style>
