<template>
  <div class="d-flex justify-center mb-5" id="Pokemon">
    <v-card elevation="2" width="300">
      <v-card-title>{{pokemon.name}}</v-card-title>
      <div v-for="item in pokemon.abilities" :key="item.ability">
        {{item.ability.name}}
      </div>
    </v-card>
  </div>
</template>

<style>
</style>

<script>
import PokemonDataService from "../services/PokemonDataService";
export default {
  name: "Pokemon",

  data: () => ({
    pokemon: {
      name: "",
      abilities: [],
    },
  }),

  methods: {
    getPokemonByName(name) {
      PokemonDataService.getByName(name)
        .then((response) => {
          this.pokemon.name = response.data.name;
          this.pokemon.abilities = response.data.abilities;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },

  mounted() {
    this.getPokemonByName("torterra");
  }
};
</script>
