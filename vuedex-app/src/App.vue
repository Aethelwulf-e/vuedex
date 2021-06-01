<template>
  <v-app id="app" class="d-flex justify-center mb-5">
    <v-app-bar dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-app-bar-title>{{ Title }}</v-app-bar-title>

      <v-spacer></v-spacer>

      <v-text-field
        label="Ex: Pokémon, Abilities, Types"
        solo
        class="text-field-pos"
      />

      <v-btn icon class="search-button">
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>

    <v-container grid-list-md text-xs-center>
      <v-layout row wrap>
        <v-flex
          md4
          style="width: 1000px"
          v-for="pokemon in pokemonList"
          :key="pokemon.name"
        >
          <Pokemon :pokeInfoUrl="pokemon.url" />
        </v-flex>
      </v-layout>
    </v-container>
  </v-app>
</template>

<style>
.text-field-pos {
  margin-top: 25px !important;
}

.search-button {
  margin-left: 10px !important;
}
</style>

<script>
import Pokemon from "./components/Pokemon";
import PokemonDataService from "./services/PokemonDataService";

export default {
  name: "App",

  components: {
    Pokemon,
  },

  data: () => ({
    Title: "Vuedex",
    pokemonList: [],
  }),

  methods: {
    getFirstGenPokemon() {
      PokemonDataService.getKantoPokemon()
        .then((response) => {
          this.pokemonList = response.data.results;
        })
        .catch((err) => {
          console.log(err);
        });
    },
  },

  mounted() {
    this.getFirstGenPokemon();
  },
};
</script>
