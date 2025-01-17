<template>
  <div class="FeaturedBlog">
    <div class="row">
      <div class="col-md-6">
        <div class="hero-text">
          <h3>Slow Living - Finding Joy in mundane things</h3>
        </div>
        <div class="row justify-start">
          <button class="button primary-button">Sign Up Now →</button>
          <button class="button secondary-button">Learn More →</button>
        </div>
      </div>

      <div class="col-md-6 q-ml img-container">
        <img src="/home-page.jpg" class="featured-image" alt="featured-image" />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.FeaturedBlog {
  padding: 0;
  margin: 0;
  border: 0;
  background: #ce5d25;
  border-radius: 12px;
  padding: 0 20px;
  margin: 0 20px;
}

.img-comtainer {
  margin: 50px;
}
.featured-image {
  width: 100%;
  height: auto;
  border-radius: 12px;
}

button {
  padding: 20px 32px;
  margin: 8px;
  border-radius: 55px;
}
.primary-button {
  color: #ce5d25;
  background: white;
  border: #ce5d25 solid;
}
.secondary-button {
  color: white;
  background: #ce5d25;
  border: white solid 1px;
}

h3 {
  color: white;
  font-family: Raleway, sans-serif;
}
</style>
