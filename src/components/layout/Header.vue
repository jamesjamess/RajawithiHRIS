<template>
  <div id="header">
    <ul>
      <li>
        <router-link to="/"><button>Home</button></router-link>
      </li>
      <li>
        <router-link to="demo1"><button>Demo1</button></router-link>
      </li>
      <li>
        <router-link to="demo2"><button>Demo2</button></router-link>
      </li>
      <li>
        <router-link to="demo3"><button>Demo3</button></router-link>
      </li>
      <li>
        <router-link to="demo5"><button>Demo5</button></router-link>
      </li>
      <li>
        <router-link to="demo6"><button>Demo6</button></router-link>
      </li>
      <li>
        <router-link to="demo7"><button>Demo7</button></router-link>
      </li>
      <li>
        <router-link to="demo8"><button>Demo8</button></router-link>
      </li>
      <li>
        <router-link to="demo9"><button>Demo9</button></router-link>
      </li>
      <li>
        <router-link to="demo10"><button>Demo10</button></router-link>
      </li>
      <li>
        <router-link to="demo11"><button>demo11</button></router-link>
      </li>
      <li>
        <router-link to="demo12"><button>demo12</button></router-link>
      </li>
      <li>
        <router-link to="demo13"><button>demo13</button></router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    name: "Header"

}
</script>

<style scoped> 
  ul{
    margin: 0;
    padding: 0;
  }
  li{
    display: inline;
    margin-right: 10px;
  }
  .title{
    font-size: 30px;
    color: green;
  }

</style>