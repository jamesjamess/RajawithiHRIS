<template>
  <div id="demo12">
      <h1>Ref</h1>
      <h3 ref="title">Waiting for change by Ref</h3>
      <input 
        ref="input1" 
        type="text" 
        placeholder="This will be focused automatically">
  </div>
</template>

<script>
export default {
    name: "Demo12",
    mounted() {
        this.$refs["title"].textContent = "Change Ref";
        this.$refs["input1"].focus();
        this.$refs["input1"].value = "1234";
    },
}
</script>

<style>

</style>