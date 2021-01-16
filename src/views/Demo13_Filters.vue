<template>
  <div id="demo13">
    <h2>{{ 1234 | currency("THB") }}</h2>
    <h2>{{ 2000000 | bytes }}</h2>
    <h2>{{ "codemobiles" | capitalize({ onlyFirstLetter: true }) }}</h2>
    <h2>{{ "codemobiles" | uppercase }}</h2>
    <h2>{{ [1, 2, 3] | reverseArray }}</h2>
  </div>
</template>

<script>
export default {
  name: "Demo13",
  filters : {
      reverseArray(value) {
          return value.slice().reverse();
      }
  }
};
</script>

<style>
</style>