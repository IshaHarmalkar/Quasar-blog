<template>
  <q-card class="my-card">
    <q-img
      src="https://images.unsplash.com/photo-1616593918824-4fef16054381?q=80&w=2680&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    >
      <div class="blog-tag absolute-top text-subtitle2 text-center">Landscape Design</div>
    </q-img>
    <div class="card-content">
      <div class="post-details">
        <span>Gabriel Rivera /</span>
        <span>4 Dec 2023 /</span>
        <span>3 minutes read</span>
      </div>
      <div class="blog-title">
        <h5>Natural Landscape Design in Urban Spaces</h5>
      </div>
      <div class="blog-summary">
        <p>
          Explore how blending the concrete jungle with lush pockets of nature can unleash a more
          balanced & enjoyable urban experience.
        </p>
      </div>
    </div>
  </q-card>
</template>

<script>
export default {}
</script>

<style scoped>
.my-card {
  padding: 10px;
  margin: 10px;
  border-radius: 30px;
  box-shadow: none;
  display: flex;
  flex-direction: column; /* Stack content vertically */
  position: relative; /* Enables absolute positioning within the card */

}

.my-card:hover {
  animation: wobble 0.5s ease-in-out;
}

@keyframes wobble {
  0% {
    transform: translateY(0);
  }
  25% {
    transform: translateY(-5px); /* Move up */
  }
  50% {
    transform: translateY(3px); /* Move down slightly */
  }
  75% {
    transform: translateY(-2px); /* Move up again */
  }
  100% {
    transform: translateY(0); /* Back to original position */
  }
}


.card-content {
  padding: 10px;
  margin: 0;
  border: 0;
}

.post-details {
  color: #2f3543;
  font-weight: 500;
}

.q-img {
  width: 100%; /* Makes the image width responsive */
  height: 300px; /* Fixed height for a rectangular shape */
  object-fit: cover; /* Ensures the image covers the area without distortion */
  display: flex;
  justify-content: flex-end; /* Aligns content to the left */
  align-items: flex-end; /* Aligns content to the top */
  position: relative; /* Allows absolute positioning of the tag */
}

.blog-tag {
  position: absolute; /* Positions the tag relative to the image */
  top: 10px; /* Distance from the top */
  left: 280px; /* Distance from the right side */
  background-color: black; /* Gray background */
  color: white; /* White text */
  padding: 5px 10px; /* Padding inside the tag */
  border-radius: 15px; /* Rounded corners */
  font-weight: 400; /* Bold text */
  font-size: 14px; /* Adjust font size */
  width: 40%; /* Limits the width to 40% of the image */
  text-align: center; /* Centers the text inside the tag */
  opacity: 0.6; /* Reduced opacity */
}

h5 {
  padding: 0;
  margin: 0;
  border: 0;
}

p {
  font-weight: 500;
  color: #2f3543;
}
</style>
