<template>
  <div id="app">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/>? -->
    <ReSize />
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import ReSize from './components/ReSize.vue'
import 'vue-advanced-cropper/dist/style.css';

export default {
  name: 'App',
  components: {
    ReSize
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
