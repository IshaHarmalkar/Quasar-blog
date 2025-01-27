<template>
  <q-page>
    <div class="login">
      <div class="row">
        <div class="col-md-6">
          <div class="hexagon-container login-form-container">
            <div>
              <div class="text-h6">WELCOME BACK!</div>
              <div>
                <p>
                  Hey, Enter your Details To Get Sign In <br />
                  To Your Account
                </p>
              </div>
              <div>
                <q-form>
                  <div>
                    <label>Email</label>
                    <q-input outlined dense v-model="text" bg-color="white" />
                  </div>
                  <div>
                    <label>Password</label>
                    <q-input outlined dense v-model="text" bg-color="white" />
                  </div>
                  <div class="q-mt-md">
                    <q-btn label="Sign in" class="full-width primary-btn" />
                  </div>
                  <div>
                    <div>Don't have an account? <a href="#">Sign Up</a></div>
                    <div>Forgot your password? <a href="#">Reset</a></div>
                  </div>
                </q-form>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-6">
          <div class="semicircle-container">
            <q-img src="/cv-2.jpg" class="semicircle-img"></q-img>
          </div>
        </div>
      </div>
    </div>
  </q-page>
</template>
<script>
export default {
  layout: 'empty', // Use the 'empty' layout to have no header, drawer, or other layout elements
  data() {
    return {
      username: '',
      password: '',
    }
  },
}
</script>

<style>
label {
  display: block;
  text-align: start; /* Align labels to the start (left) */
  margin-bottom: 8px;
  font-size: 14px;

  color: white;
}

a {
  color: skyblue;
}

.login {
  background: whitesmoke;
}
.login {
}
.login-form-container {
  padding: 50px;
  margin: 100px;
  border: 1px solid black;
  border-radius: 20px;
  text-align: center;
}

.hexagon-container {
  background: linear-gradient(90deg, #012f61, #044a85, #012f61);
  color: white;
}

.primary-btn {
  border: white solid 1px;
  background-color: linear-gradient(90deg, #044a85, #012f61, #044a85);
}

.semicircle-container {
  width: 100%; /* Full width of col-md-6 */
  height: 100vh; /* Height should be half of the width to make it a semicircle */
  box-sizing: border-box;
  background: linear-gradient(90deg, #012f61, #044a85, #012f61);
  border: solid #044a85 10px;
  clip-path: polygon(25% 0%, 100% 1%, 100% 100%, 25% 100%, 0% 50%); /* Your custom polygon shape */
}

.semicircle-img {
  width: 100%; /* Fill the width of the container */
  height: 100%; /* Fill the container height */
  object-fit: cover; /* Ensure the image covers the container without distortion */
  clip-path: polygon(25% 0%, 100% 1%, 100% 100%, 25% 100%, 0% 50%); /* Your custom polygon shape */
}
</style>
