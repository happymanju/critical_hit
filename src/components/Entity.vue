<template>
    <div class="entity">
        <span class="el">{{name}}</span>
        <span class="el">{{initiative}}</span>
    </div>
</template>

<script>
export default {
    name: "Entity",
    props: ["name", "initiative"]

}
</script>

<style>
.entity {
    border: 1px solid #4444;
    margin: 20px;
    max-width: 650px;
    padding: 10px;
}

#on-turn {
    border: 3px solid red;
}

.el {
    margin: 15px;
}
</style>