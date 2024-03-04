<template>
  <div class="items">
    <div class="item-container">
      <router-link :to="{ name: 'login' }" class="item">Log In</router-link>
      <router-link :to="{ name: 'signup' }" class="item">Sign Up</router-link>
    </div>
    <HamburgerMenu :dataMenu="dataMenu"/>
  </div>
</template>

<script>
import HamburgerMenu from './HamburgerMenu.vue';

export default {
  name: "AuthComponent",
  data() {
    return {
      dataMenu: []
    };
  },
  mounted() {
    const elementos = document.querySelectorAll('.item');

    elementos.forEach(element => {
      this.dataMenu.push(element.innerHTML)
    });
  },
  components: {
    HamburgerMenu,
  }
}
</script>

<style scoped>
.items {
  display: flex;
  flex-direction: row;
  gap: 20px;
}
.item-container{
  display: flex;
  flex-direction: row;
  gap: 20px;
}
a{
  color: #fefefe;
  text-decoration: none;
}

/* RESPONSIVE */
@media (max-width: 768px){
  .item-container {
    display: none;
  }
}

</style>
