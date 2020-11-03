<template>
    <div class="add-entity-container">
        <p>New Entity</p>
        <span class="input">
            <label for="name">Name:</label>
            <input type="text" name="name">
            <label for="initiative">Initiative:</label>
            <input type="text" name="initiative">
            <button type="button" id="submit">Add</button>
        </span>
            
        

    </div>
</template>

<script>
export default {
    name: "AddEntity",

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