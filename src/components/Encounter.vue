<template>
    <div class="encounter-container">
        <div v-for="{name, initiative, index} of list" v-bind:key="index">
            <Entity :name="name" :initiative="initiative"/>
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