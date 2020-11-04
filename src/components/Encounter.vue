<template>
    <div class="encounter-container">
        <div v-for="(entity, index) of list" v-bind:key="index">
            <Entity :name="entity.name" :initiative="entity.initiative"/>
        </div>
    </div>
</template>

<script>
import Entity from "./Entity"
export default {
    name: "Encounter",
    props: ["list"],
    components: {
        Entity,
    }
}
</script>

<style>
.encounter-container {
    max-width: 650px;
}
</style>