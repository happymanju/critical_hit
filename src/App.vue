<template>
  <div id="app">
    <AddEntity  v-on:sendEntity="updateEntities"/>
    <Encounter :list="entities"/>
  </div>
</template>

<script>
import Encounter from "./components/Encounter";
import AddEntity from "./components/AddEntity";

export default {
  name: 'App',
  data: () => ({
    entities: [],
  }),
  components: {
    Encounter,
    AddEntity,
  },
  methods: {
    updateEntities: function(entity){
      this.entities.push(entity);
    }
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
