<template>
  <div id="app">
    <v-app id="inspire" class="d-flex justify-center mb-5">
      <v-app-bar dark>
        <v-app-bar-nav-icon @click="lateralMenu = true" />

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

      <v-navigation-drawer v-model="lateralMenu" absolute temporary>
        <v-list nav dense>
          <v-list-item-group
            v-model="lateralMenuGroup"
            active-class="light-blue--text text--accent-4"
            mandatory
          >
            <template>
              <v-list-item disabled>
                <v-img
                  max-width="50"
                  max-height="50"
                  alt
                  class="mr-4 icon"
                  :src="require(`@/assets/icons/pokeballs/pokeballs.svg`)"
                />
                <v-list-item-content>
                  <v-list-item-title
                    class="title font-weight-medium black--text pb-2"
                  >
                    Regions
                  </v-list-item-title>
                  <v-list-item-subtitle>
                    Filter by regions
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-divider class="mb-3" />

              <v-list-item>
                <v-list-item-icon>
                  <v-img
                    max-width="25"
                    max-height="25"
                    alt
                    class="icon"
                    :src="require(`@/assets/icons/pokeballs/pokeball.svg`)"
                  />
                </v-list-item-icon>
                <v-list-item-title>Kanto</v-list-item-title>
              </v-list-item>

              <v-list-item>
                <v-list-item-icon>
                  <v-img
                    max-width="25"
                    max-height="25"
                    alt
                    class="icon"
                    :src="require(`@/assets/icons/pokeballs/greatball.svg`)"
                  />
                </v-list-item-icon>
                <v-list-item-title>Johto</v-list-item-title>
              </v-list-item>

              <v-list-item>
                <v-list-item-icon>
                  <v-img
                    max-width="25"
                    max-height="25"
                    alt
                    class="icon"
                    :src="require(`@/assets/icons/pokeballs/ultraball.svg`)"
                  />
                </v-list-item-icon>
                <v-list-item-title>Hoenn</v-list-item-title>
              </v-list-item>

              <v-list-item>
                <v-list-item-icon>
                  <v-img
                    max-width="25"
                    max-height="25"
                    alt
                    class="icon"
                    :src="require(`@/assets/icons/pokeballs/masterball.svg`)"
                  />
                </v-list-item-icon>
                <v-list-item-title>Sinnoh</v-list-item-title>
              </v-list-item>
            </template>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>

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
  </div>
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
    lateralMenu: false,
    lateralMenuGroup: null,
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
