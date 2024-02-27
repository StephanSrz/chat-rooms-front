<template>
  <div class="navbar">
    <nav>
      <div class="logo-container">
        <img id="logo" src="../../assets/logo-white.svg" alt="Chat-rooms">
        <p><strong>Chat Rooms</strong></p>
      </div>
      <div>
        <template v-if="userLog">
          <AuthdComponent/>
        </template>
        <template v-else>
          <AuthComponent/>
        </template>
      </div>
    </nav>

  </div>
</template>

<script>
import AuthComponent from './auth/AuthComponent.vue'
import AuthdComponent from './auth/AuthdComponent.vue'


export default {
  name: "NavBar",
  components: {
    AuthComponent,
    AuthdComponent
  },
  props: {
    userLog: Boolean,
    hambuurgerMenu: Boolean
  },
  mounted() {
    
  }
}
</script>

<style scoped>

.navbar{
  margin: 0;
  padding: 15px;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
}
.logo-container{
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: center;
  height: 40px;
}

#logo {
  height: 100%;
}

.logo-container > p{
  padding-left: 5px;
  margin: auto;
  font-weight: 100;
  font-size: 30px;
}

nav{
  color: #fefefe;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

/* RESPONSIVE */
@media (max-width: 768px) {
  .logo-container {
    
    box-sizing: border-box;
    flex-direction: row;
    align-items: center;
  }

  #logo {
    max-width: 100%; 
  }

  .logo-container > p {
    font-size: 15px;
  }
}
</style>

