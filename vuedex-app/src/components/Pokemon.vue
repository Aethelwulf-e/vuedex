<template>
  <div id="Pokemon">
    <v-card
      class="mx-auto"
      :color="this.getCardColor(this.pokemon.types[0].type.name)"
    >
      <v-list-item>
        <v-img max-height="200" max-width="200" :src="this.pokemon.imageUrl" />

        <v-list-item-content>
          <v-list-item-title class="white--text font-weight-bold"
            >{{ this.pokemon.dexId }} {{ this.pokemon.name }}</v-list-item-title
          >
          <v-list-item-title class="title mb-1"
            >Nike epic react</v-list-item-title
          >
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </div>
</template>

<style>
</style>

<script>
import PokemonDataService from "../services/PokemonDataService";
import ColorPicker from "../utils/ColorPicker";

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

          if (this.pokemon.dexId < 10) {
            this.pokemon.dexId = "#00" + response.data.id;
          } else if (this.pokemon.dexId < 100) {
            this.pokemon.dexId = "#0" + response.data.id;
          } else {
            this.pokemon.dexId = "#" + response.data.id;
          }
        })
        .catch((err) => {
          console.log(err);
        });
    },

    getCardColor(type) {
      return ColorPicker.getCardColorByType(type);
    },

    getChipColor(type) {
      return ColorPicker.getChipColorByType(type);
    }
  },

  mounted() {
    this.getPokemon();
  },
};
</script>
