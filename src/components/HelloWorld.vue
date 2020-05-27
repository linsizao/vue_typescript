<template>
  <div class="hello">
    <input type="text" @keyup.enter="keyupEnter" />
    <div v-for="item in features" :key="item">
      {{ item }}
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class HelloWorld extends Vue {
  // 属性相当于data选项
  features: string[] = ["阿萨德", "大打算"];

  keyupEnter(e) {
    this.features.push(e.target.value);
    e.target.value = "";
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
