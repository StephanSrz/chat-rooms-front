<template>
  <div class="chat-container">
    <ChatBoxRight userName="stephan" userMessage="Welcome to Your Vue.js App"/>
    <ChatBoxLeft userName="Flojan" userMessage="Shut up mother f**ker"/>
  </div>
</template>

<script>
import ChatBoxRight from '../components/chatboxes/ChatBoxRight.vue';
import ChatBoxLeft from '../components/chatboxes/ChatBoxLeft.vue';

export default {
  name: 'chatRoom',
  components: {
    ChatBoxRight,
    ChatBoxLeft
  }
}

</script>

<style scoped>
.chat-container{
  margin: auto;
  border: 1px solid #fefefe34;
  max-width: 2800px;
}
</style>