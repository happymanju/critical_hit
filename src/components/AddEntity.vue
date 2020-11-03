<template>
    <div class="add-entity-container">
        <p>New Entity</p>
        <span class="input">
            <label for="name">Name:</label>
            <input type="text" name="name" v-model="newEntity.name">
            <label for="initiative">Initiative:</label>
            <input type="text" name="initiative" v-model="newEntity.initiative">
            <button type="button" id="submit" v-on:click="sendEntity">Add</button>
        </span>
    </div>
</template>

<script>
export default {
    name: "AddEntity",
    data: () => ({
            newEntity: {name: "", initiative:1}
        }),
    
    methods: {
        sendEntity() {
            console.log(this.newEntity);
            this.$emit("sendEntity", this.newEntity);
        }
    },

}
</script>

<style>
.add-entity-container {
    border: 1px solid #4444;
    margin: 10px;
    padding: 10px;
}

.input {
    margin: 10px;
}
</style>