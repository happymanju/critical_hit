<template>
    <div class="encounter-container">
        <div v-if="encounterStarted">
            <button type="button" name="next-turn">Next Turn</button>
        </div>
        <div v-for="(entity, index) of list" v-bind:key="index">
            <Entity :name="entity.name" :initiative="entity.initiative"/>
        </div>
    </div>
</template>

<script>
import Entity from "./Entity"
export default {
    name: "Encounter",
    props: ["list", "encounterStarted"],
    data: () => ({
        onTurn: false,
    }),
    components: {
        Entity,
    }
}
</script>

<style>
.encounter-container {
    max-width: 650px;
    border: 1px solid #4444;
}
</style>