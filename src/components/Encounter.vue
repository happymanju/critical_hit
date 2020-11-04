<template>
    <div class="encounter-container">
        <div v-if="encounterStarted">
            <button type="button" name="next-turn">Next Turn</button>
        </div>
        <div v-for="(entity, index) of list" v-bind:key="index">
            <Entity :name="entity.name" :currentHP="entity.currentHP" :maxHP="entity.maxHP" :initiative="entity.initiative"/>
        </div>
    </div>
</template>

<script>
import Entity from "./Entity"
export default {
    name: "Encounter",
    props: ["list", "encounterStarted"],
    data: () => ({
        onTurn: 0,
    }),
    components: {
        Entity,
    },
    methods: {
        nextTurn() {
            this.onTurn = this.onTurn+1;
        }
    }
}
</script>

<style>
.encounter-container {
    max-width: 650px;
    border: 1px solid white;
}
</style>