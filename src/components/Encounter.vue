<template>
    <div class="encounter-container">
        <Entity/>

    </div>
</template>

<script>
import Entity from "./Entity"
export default {
    name: "Encounter",
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