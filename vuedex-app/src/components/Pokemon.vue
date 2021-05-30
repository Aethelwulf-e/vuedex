<template>
  <div class="d-flex justify-center ml-5" id="Pokemon">
    <v-card elevation="2" width="300">
      <v-card-title>{{ pokemonName }}</v-card-title>
      <div v-for="slot in abilities" :key="slot.ability">
        {{ slot.ability.name }}
      </div>
    </v-card>
  </div>
</template>

<style>
</style>

<script>
export default {
  name: "Pokemon",

  props: {
    dexId: String,
    pokemonName: String,
    imageUrl: String,
    types: Array,
    abilities: Array,
  },
};
</script>
