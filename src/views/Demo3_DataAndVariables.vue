<template>
  <div>
    <h1>Data, Variables, Dictionary(Opject), Array</h1>
    <button @click="count++; isLogged=true;">Count++</button>
    <div>{{count}}</div>
    <div>{{message}}</div>
    <div>{{isLogged}}</div>
    <input type="text" placeholder="Enter your message" v-model="message" />
    <h2 v-if="isLogged">Whooo</h2>
    <div>{{account}} {{account.username}} {{account.password}}</div>
    <div>{{courses[0]}}</div>
    <ul>
      <li class="content" v-for="(item, index) in courses" :key="index">{{index+1}}.{{item}}</li>
    </ul>

    <span class="title">อิอิ</span>
  </div>
</template>

<script>
export default {
  name: "Demo3",
  mounted() {
    this.message = "Welcome";
  },
  data() {
    return {
      count: 0,
      message: "",
      isLogged: false,
      account: {
        username: "admin",
        password: "1234"
      },
      courses: ["Angular", "VueJS", "React", "UXUI"]
    };
  }
};
</script>

<style scoped>
.title {
  color: red;
}
</style>

