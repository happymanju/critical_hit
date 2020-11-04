<template>
    <div class="entity">
        <span class="el">{{name}}</span>
        <span class="el">HP: {{hp}}</span>
        <span class="el">Initiative: {{initiative}}</span>
        <input type="text" v-on:change="(e) => {this.damage=e.target.value; dealDamage() }" placeholder="damage">

    </div>
</template>

<script>
export default {
    name: "Entity",
    props: ["name", "hp", "initiative"],
    data: () => ({
        damage: "",
        healing: "",
    }),
    methods: {
        dealDamage() {
            this.hp -= Number(this.damage)
        }
    }

}
</script>

<style>
.entity {
    border: 1px solid #4444;
    margin: 20px;
    max-width: 650px;
    padding: 10px;
}

.on-turn {
    border: 3px solid red;
}

.el {
    margin: 15px;
}
</style>