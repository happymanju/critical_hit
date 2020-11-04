<template>
  <div id="app">
    <AddEntity  v-on:sendEntity="updateEntities"/>
    <Encounter :list="sortedEntities"/>
  </div>
</template>

<script>
import Encounter from "./components/Encounter";
import AddEntity from "./components/AddEntity";

export default {
  name: 'App',
  data: () => ({
    entities: [],
    currentEntities: [],
  }),
  computed: {
    sortedEntities() {
      let origArr = this.currentEntities;
      return origArr.sort(function(a,b){
        return b.initiative-a.initiative;
      })
    }
  },
  components: {
    Encounter,
    AddEntity,
  },
  methods: {
    updateEntities: function(entity){
      this.currentEntities.push(entity);
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
