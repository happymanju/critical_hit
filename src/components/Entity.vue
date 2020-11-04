<template>
    <div class="entity">
        <span class="el">{{name}}</span>
        <span class="el">HP: {{currentHP}}</span>
        <span class="el">Initiative: {{initiative}}</span>
        <input type="text" id="entity" v-on:change="(e) => {this.damage=e.target.value; dealDamage();}" placeholder="damage">
        <input type="text" id="entity" v-on:change="(e) => {this.healing=e.target.value; restoreHP();}" placeholder="healing">

    </div>
</template>

<script>
export default {
    name: "Entity",
    props: ["name", "currentHP", "maxHP", "initiative"],
    data: () => ({
        damage: "",
        healing: "",
    }),
    methods: {
        dealDamage() {
            this.currentHP -= Number(this.damage)
        },
        restoreHP() {
            const healing = Number(this.healing)
            const limit = Number(this.maxHP);
            if(!(this.currentHP + healing) > limit){
                this.currentHP = limit;
            }
            this.currentHP += healing
        }
    }

}
</script>

<style>
.entity {
    border: 1px solid white;
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

 #entity {
    width: 50px;
    margin: 10px;
}
</style>