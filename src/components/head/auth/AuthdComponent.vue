<template>
  <div class="items">
    <div class="cont-item" @click="toggleInput">
      <img src="../../../assets/search.svg" alt="search">
      <input :class="{ 'show': showSearchInput }" type="text" placeholder="search room" @click.stop="handleInputClick">
    </div>
    <a href="#" class="item">Create Room</a>
    <a href="#" class="item">Log out</a>
  </div>
  <HamburgerMenu :dataMenu="dataMenu"/>
</template>

<script>
import HamburgerMenu from './HamburgerMenu.vue';

export default {
  name: "AuthdComponent",
  data() {
    return {
      showSearchInput: false,
      dataMenu: []
    }
  },
  methods: {
    toggleInput() {
      this.showSearchInput = !this.showSearchInput;
    },
    handleInputClick(event) {
      if (this.showSearchInput) {
        event.stopPropagation();
      }
    }
  },
  mounted() {
    const elementos = document.querySelectorAll('.item');
    this.dataMenu.push("search")

    elementos.forEach(element => {
      this.dataMenu.push(element.innerHTML)
    });
  },
  components: {
    HamburgerMenu
  }
}
</script>

<style scoped>
.items {
  display: flex;
  flex-direction: row;
  gap: 20px;
}

.cont-item {
  position: relative;
  display: flex;
  align-items: center;
}

.cont-item img {
  cursor: pointer;
}

.cont-item > input {
  background-color: #35374B;
  color: #fefefe;
  border: none;
  margin-right: 5px;
  border-bottom: 1px solid #fefefe;
  transition: all 0.3s ease;
  position: absolute;
  top: 0;
  right: 100%;
  transform: translateX(-100%);
  width: 0;
  box-sizing: border-box;
}

.cont-item > input.show {
  transform: translateX(0);
  width: 150px;
}
a{
  color: #fefefe;
  text-decoration: none;
}

/* RESPONSIVE */
@media (max-width: 768px){
  .items{
    display: none;
  }
}
</style>

