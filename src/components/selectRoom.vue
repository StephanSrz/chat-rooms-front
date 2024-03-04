<template>
  <div class="select-room-container">
    <div class="createroom">
      <button class="create">CREATE ROOM</button>
    </div>
    <div class="input-container" style="display: flex; flex-direction: column;">
      <p class="create">SELECT ROOM</p>
      <div>
        <input type="text" class="go-into" placeholder="GO TO ROOM | CODE">
        <button class="btn-select-room">Go In</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "selectRoom",
};
</script>

<style scoped>
.select-room-container {
  width: 450px;
  color: #fefefe;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}

.create {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
}

.input-container {
  display: flex;
  gap: 10px;
}

.go-into {
  flex: 1;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

.btn-select-room, button {
  background-color: #485a64;
  color: white;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

.btn-select-room:hover {
  background-color: rgba(83, 106, 119, 0.37);
}

@media (max-width: 1000px) {
  .select-room-container{
    width: 320px;
  }
  .auth{
    width: 320px;
  }
}
</style>
