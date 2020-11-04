<template>
    <div class="add-entity-container">
        <p>New Entity</p>
        <span class="input">
            <label for="name">Name:</label>
            <input type="text" name="name" v-on:change="(e)=> newEntity.name= e.target.value">
            <label for="initiative">Initiative:</label>
            <input type="text" name="initiative" v-on:change="(e) => newEntity.initiative = e.target.value">
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
            const d20 = Math.floor(Math.random() * 20 + 1);

            let passingEntity = {name: this.newEntity.name, initiative: (Number(this.newEntity.initiative) + d20)};
            this.$emit("sendEntity", passingEntity);
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