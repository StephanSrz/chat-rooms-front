<template>
  <div class="items">
    <div class="item-container">
      <a href="#" class="item">Log In</a>
      <a href="#" class="item">Sign Up</a>
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
