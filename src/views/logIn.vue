<template>
  <div class="login-container">
    <!-- <div class="welcome">
      <h2>WELCOME</h2>
    </div> -->
    <div class="auth">
      <div class="login-form">
        <h2>Log In</h2>
        <form action="">
          <label for="username">Username</label>
          <input type="text" id="username" placeholder="Enter your username">
          <label for="password">Password</label>
          <input type="password" id="password" placeholder="Enter your password">
          <button type="submit">Log In</button>
        </form>
      </div>
      <div class="or">
        <div class="line"></div>
        <p>OR</p>
        <div class="line"></div>
      </div>
      <div class="nav-auth">
        <router-link :to="{ name: 'signup' }">SIGN UP</router-link>
        <router-link :to="{ name: 'anonymous' }">ANONYMOUS</router-link>
      </div>
    </div>
    <div class="line-mobile"></div>
    <div>
      <selectRoom/>
    </div>
  </div>
</template>

<script>
import selectRoom from '@/components/selectRoom.vue';

export default {
  name: 'logIn',
  components: {
    selectRoom
  }
}
</script>

<style scoped>
.login-container {
  display: flex;
  justify-content: center;
  gap: 30px;
  align-items: center;
  height: 80vh;
}

.auth {
  width: 380px;
  background-color: #344955;
  color: #fefefe;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.welcome {
  text-align: center;
  margin-bottom: 20px;
}

.or {
  display: flex;
  align-items: center;
  color: #485a64;
}

.line {
  flex: 1;
  height: 1px;
  background-color: #8c9ca5;
  margin: 0 10px;
}

.nav-auth > a{
  margin: 20px;
  color: #78A083;
  text-decoration: none;
}

.nav-auth{
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
}

.login-form {
  max-width: 300px;
  margin: 0 auto;
}

.login-form > h2 {
  margin-bottom: 25px ;
}

form {
  display: flex;
  flex-direction: column;
  text-align: start;
}

label {
  margin-bottom: 5px;
}

.line-mobile {
  width: 100%;
  height: 1px;
  background-color: #8c9ca5;
  margin: 20px 0;
  display: none;
}

input {
  padding: 8px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  background-color: #485a64;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-bottom: 25px;
}

button:hover {
  background-color: rgba(83, 106, 119, 0.37)
}

@media (max-width: 1000px) {
  .login-container{
    gap: 20px;
  }

  .login-form{
    max-width: 250px;
  }
  .auth{
    width: 320px;
  }
}

@media (max-width: 720px) {
  .login-container {
    margin-top: 100px;
    flex-direction: column;
  }

  .line-mobile{
    display: block;
  }
}
</style>  
