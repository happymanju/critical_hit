<template>
    <div class="add-entity-container">
        <p>New Entity</p>
        <span class="input">
            <label for="name">Name:</label>
            <input type="text" name="name" v-model="newEntity.name">
            <label for="hp">HP:</label>
            <input type="text" name="hp" v-model="newEntity.maxHP">
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
            newEntity: {name: "", maxHP: 1, currentHP:1, initiative:1}
        }),
    
    methods: {
        sendEntity() {
            console.log(this.newEntity);


            const d20 = Math.floor(Math.random() * 20 + 1);

            let passingEntity = {name: this.newEntity.name, maxHP: this.newEntity.maxHP, currentHP: this.newEntity.maxHP, initiative: (Number(this.newEntity.initiative) + d20)};

            this.$emit("sendEntity", passingEntity);
        }
    },

}
</script>

<style>
.add-entity-container {
    border: 1px solid white;
    margin: 10px;
    padding: 10px;
}

</style>