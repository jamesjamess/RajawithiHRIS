<template>
  <div app="demo2">
    <h1>EventMethod</h1>
    <button v-on:click="clickMe">ClickMe</button>
    <button v-on:click="clickMe2('Welcome to VueJS')">ClickMe2</button>
    <button @click="clickMe3('Welcome to KSY')">ClickMe3</button>
    <h3>{{getTimestamp()}}</h3>
  </div>
</template>

<script>
export default {
  name: "Demo2",
  mounted(){
    this.initial()

  },
  methods: {
    initial(){
      console.log("Initialization")
    },
    clickMe() {
      alert("Hi");
    },
    clickMe2(message) {
      alert(message);
    },
    clickMe3(message) {
      alert(message);
    },
    getTimestamp(){
      return Date()
    }
  }
};
</script>

<style scoped>
  button{
    margin-right: 8px

  }

</style>