<template>
  <div class="chat-box">
   <div class="chat-box-right">
     <div class="user-info">
       <span class="user-name">{{ userName }}</span>
     </div>
     <div class="message">
       <p> {{ userMessage }} </p>
     </div>
   </div>
  </div>
</template>

<script>
 export default {
   name: "ChatBoxRight",
   props: {
     userName: String, 
     userMessage: String
   }
 }
</script>

<style scoped>
  .chat-box{
    width: 100%;
    display: flex;
    justify-content: flex-start;
  }
  .chat-box-right {
    text-align: left;
    background-color: #344955;
    padding: 10px;
    margin: 20px;
    border-radius: 8px;
  }

  .user-info {
    color: #78A083;
    font-weight: bold;
  }

  .message {
    text-align: start;
    margin-top: 5px;
    color: #fefefe;
  }
</style>