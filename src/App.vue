<template>
  <div id="app">
    <AddEntity  v-on:sendEntity="updateEntities"/>
    <div class="start-encounter-button">
      <button v-if="!encounterStarted && canStartEncounter" type="button" name="start-encounter" v-on:click="encounterStarted=true">Start Encounter</button>
    </div>
    <Encounter :list="sortedEntities" :encounterStarted="encounterStarted"/>
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
    encounterStarted: false,
  }),
  computed: {
    sortedEntities() {
      let origArr = this.currentEntities;
      return origArr.sort(function(a,b){
        return b.initiative-a.initiative;
      })
    },
    canStartEncounter() {
      if(this.currentEntities.length >= 2){
        return true;
      }
      return false;
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

.start-encounter-button {
  margin: 15px;
}
</style>
