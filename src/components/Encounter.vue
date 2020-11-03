<template>
    <div class="encounter-container">
        <div v-for="{name, initiative, index} of list" v-bind:key="index">
            <span>{{index}}</span>
            <Entity :name="name" :initiative="initiative"/>
        </div>
    </div>
</template>

<script>
import Entity from "./Entity"
export default {
    name: "Encounter",
    props: ["list"],
    computed: {

    },
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