<template>
  <div id="app">
    <Header />

    <Content />
    <span class="title">1234</span>
    <br />

    <Footer @onClock="onClock" title="Copyright 2020 by Teerawut Ltd." color="gray" />
    <div class="clock">{{time}}</div>
  </div>
</template>

<script>
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";
import Content from "@/components/layout/Content.vue";
import moment from "moment";

export default {
  name: "app",
  methods: {
    onClock(value) {
      this.time = moment(value).format("MM/DD/YYYY hh:mm:ss");
    }
  },
  data() {
    return {
      time: ""
    };
  },
  components: {
    Header,
    Content,
    Footer
  }
};
</script>

<style>
.content {
  color: pink;
}
.clock {
  font-size: 12px;
}
</style>