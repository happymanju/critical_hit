<template>
  <div id="app">
    <AddEntity />
    <Encounter />
  </div>
</template>

<script>
import Encounter from "./components/Encounter";
import AddEntity from "./components/AddEntity";

export default {
  name: 'App',
  components: {
    Encounter,
    AddEntity,
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
