<template>
  <div class="hello">
    <h2>{{ msg }}</h2>
    <input type="text" @keyup.enter="keyupEnter" />
    <div v-for="item in features" :key="item.id">
      {{ item.name }}
    </div>

    <div>新特新的总数： {{ count }}</div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue, Emit, Watch } from "vue-property-decorator";
import axios from "axios";
interface Feature {
  id: number;
  name: string;
}

interface Result<T> {
  data: T;
}

function getData<T>(): Promise<Result<T>> {
  const data: any = [{ id: 1, name: "123" }];
  return Promise.resolve<Result<T>>({ data });
}

@Component
export default class HelloWorld extends Vue {
  @Prop({ type: String, required: true })
  private msg!: string;

  // 属性相当于data选项
  private features: Feature[] = [];

  constructor() {
    super();
    // this.features = getData<Feature[]>().date;
  }

  async mounted() {
    console.log("hello 组件已被挂载！");
    // this.features = (await getData<Feature[]>()).data;
    const res = await axios.get<Feature[]>("/api/getFeature");
    this.features = res.data;
  }

  @Watch("mag")
  onMsgChange(val, oldVal) {
    console.log(oldVal);
    console.log(val);
  }

  @Emit()
  private keyupEnter(e) {
    const data = { id: this.features.length + 1, name: e.target.value }
    this.features.push(data);
    e.target.value = "";
    return data;
  }

  get count() {
    return this.features.length;
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
