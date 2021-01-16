<template>
  <div id="demo5">
    <img v-bind:src="imageUrl" v-bind:height="height" />
    <img :src="imageUrl3" :height="height" />
    <img :src="imageUrl2" :height="height" />
    

    <div :class="[false ? error : '',important]">CodeMobiles</div>
    <div :style="{color:font_color}">BindingStyle</div>
    <div :style="{color,fontSize}">Binding Style(Shortform)</div>
    <div :style="{fontSize}">Binding Style(Shortform)</div>
    <div :style="styleObj">Binding Style Object</div>
    <span :style="isActive ? styleObj : ''">Binding Style Object</span>
    <button @click="isActive = !isActive">ToggleActive</button>
  </div>
</template>

<script>
export default {
  name: "Demo5",
  data() {
    return {
      imageUrl:
        "https://gdb.voanews.com/24A4525A-A09E-42FF-A1CE-B0C291CE5325_cx0_cy11_cw0_w408_r1_s.jpg",
      imageUrl2:
        "https://sites.google.com/site/funnycatmeawww/_/rsrc/1422326075261/home/6997052-funny-cat.jpg?height=675&width=1200",
      imageUrl3:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSGkhcRG9lKK5UiKwayTsswAULkqpxiig7qdA&usqp=CAU",
      height: "300",
      error: "error_class",
      important: "important",
      font_color: "red",
      color: "green",
      fontSize: "30px",
      styleObj: {
        backgroundColor: "yellow",
        color: "green"
      },
      isActive: false
    };
  }
};
</script>

<style scoped>
img {
  display: inline; 
  margin: auto;
  margin-top: 20px;
  margin-left: 35px;
  
}
.error_class {
  background-color: red;
  color: white;
}
.important {
  font-weight: 900;
}
button {
  margin-left: 10px;
}
</style>   