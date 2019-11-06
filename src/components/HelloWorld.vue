<template>
  <div class="hello">
{{message}}
    <button @click='clicked'>Test</button>
    <button @click='parentClicked'>Parentclick</button>
  </div>
</template>

<script lang="ts">
import Parent from './Parent'
import { Component, Prop, Vue } from 'vue-property-decorator';

@Component
export default class HelloWorld extends Parent {
  @Prop() private msg!: string;
  test: string = 'test string'

  get message() {
    return `abc - ${this.test}`
  }

  clicked(ev: any) {
    console.log(ev.target);
    console.log('Clicked')
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
