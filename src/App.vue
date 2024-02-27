<template>
  <NavBar :userLog="true" />
  <ChatBoxRight userName="stephan" userMessage="Welcome to Your Vue.js App"/>
  <ChatBoxLeft userName="Flojan" userMessage="Shut up mother f**ker"/>
</template>

<script>
import ChatBoxRight from './components/chatboxes/ChatBoxRight.vue';
import ChatBoxLeft from './components/chatboxes/ChatBoxLeft.vue';
import NavBar from './components/head/NavBar.vue';

export default {
  name: 'App',
  components: {
    NavBar,
    ChatBoxRight,
    ChatBoxLeft
  }
}
</script>

<style>
#app {
  background-color: #35374B;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}
</style>
