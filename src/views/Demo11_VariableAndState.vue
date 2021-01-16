<template>
  <div id="demo11">
      <h1>Variable and State</h1>
      <div>{{ count }}</div>
      <div>{{ Math.random() }}</div>
      <div>Timestamp : {{ timestamp }}</div>
 
      <button @click="timestamp = Date.now()"> Update Timestamp </button>
      <button @click="count++"> Update count </button>
  </div>
</template>

<script>
export default {
    name:"Demo11",
    created() {
        this.timestamp = 0
    },
    mounted() {
        setInterval(() => {
            // this.count++;
            // console.log("Timestamp: " + this.timestamp);
        }, 1000);
    },
    data() {
        return {
            count:0 //local state
        }
    },
}
</script>

<style>

</style>