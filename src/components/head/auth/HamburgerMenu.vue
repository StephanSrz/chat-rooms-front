<template>
  <div class="menu-container">
    <div class="burger-menu" @click="toggleMenu">
      <div class="bar"></div>
      <div class="bar"></div>
      <div class="bar"></div>
    </div>
    <div v-if="showMenu" class="item-container" :class="{ 'showMenu': showMenu}">
      <div v-for="item in dataMenu" :key="item">
        <a href="" v-if="item !== 'search'">{{ item }}</a>
        <div v-else>
          <div class="cont-item" @click="toggleInput">
            <img src="../../../assets/search.svg" alt="search">
            <input :class="{ 'show': showSearchInput }" type="text" placeholder="search room" @click.stop="handleInputClick">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HamburgerMenu",
  data() {
    return {
      showMenu: false,
      showSearchInput: false
    };
  },
  props: {
    dataMenu: Array
  },
  methods: {
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
    toggleInput() {
      this.showSearchInput = !this.showSearchInput;
    },
    handleInputClick(event) {
      if (this.showSearchInput) {
        event.stopPropagation();
      }
  },
  }
};
</script>

<style scoped>

.menu-container {
  margin-top: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.burger-menu {
  margin-right: 0;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  width: 30px;
  height: 20px;
  justify-content: space-between;
  margin-right: 20px;
}
.showMenu{
  
}

.bar {
  width: 100%;
  height: 3px;
  background-color: #fefefe;
}
.item-container{
  margin: 15px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 20px;
}

a{
  color: #fefefe;
  text-decoration: none;
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

@media (min-width: 768px) {
  .menu-container{
    display: none;
  }
}
@media (max-width: 768px) {

}
</style>
