<template>
  <div id="Pokemon">
    <v-card color="red darken-1">
      <v-img class="ml-2" max-height="200" max-width="200" :src="this.pokemon.imageUrl" />
    </v-card>
  </div>
</template>

<style>
</style>

<script>
import PokemonDataService from "../services/PokemonDataService";

export default {
  name: "Pokemon",

  props: {
    pokeInfoUrl: String,
  },

  data: () => ({
    pokemon: {
      dexId: "",
      name: "",
      imageUrl: "",
      types: [],
      abilities: [],
    },
  }),

  methods: {
    getPokemon() {
      PokemonDataService.getPokemonContentByUrl(this.$props.pokeInfoUrl)
        .then((response) => {
          this.pokemon.dexId = response.data.id;
          this.pokemon.name = response.data.name;
          this.pokemon.imageUrl = response.data.sprites.front_default;
          this.pokemon.types = response.data.types;
          this.pokemon.abilities = response.data.abilities;

          if(this.pokemon.dexId < 10) {
            this.pokemon.dexId = "#00" + response.data.id;
          }
          else if(this.pokemon.dexId < 100) {
            this.pokemon.dexId = "#0" + response.data.id;
          }
          else {
            this.pokemon.dexId = "#" + response.data.id;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },

  mounted() {
    this.getPokemon();
  },
};
</script>
