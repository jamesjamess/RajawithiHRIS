<template>
  <div id="demo1">
    <h1>Demo1 : V-model</h1>
    <input v-model="message" type="text" placeholder="Enter your message" />
    <div>{{message}}</div>
    <button @click="message=''">Reset</button>
  </div>
</template>

<script>
export default {
  name: "demo1",
  data() {
    return {
      message: ""
    };
  }
};
</script>

<style scoped>
  button{
    margin-top: 8px

  }
</style>