<template>
  <div id="app">
    <ul>
      <li v-for="(item, key) of todos" :key="key">{{item.text}} {{key}}</li>
    </ul>

    <ul>
      <li v-for="(item, key) of dones" :key="key">{{item.text}} {{key}}</li>
    </ul>
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import HelloWorld from "./components/HelloWorld.vue";
import { State, Getter } from "vuex-class";
import { Todo } from "./types";

@Component({
  components: {
    HelloWorld
  }
})
export default class App extends Vue {
  // @State todos!: Todo[]
  @Getter todos!: Todo[]
   @Getter dones!: Todo[]
}
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
