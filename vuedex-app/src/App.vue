<template>
  <div id="app">
    <v-app id="inspire" class="d-flex justify-center mb-5">
      <v-app-bar dark top fixed>
        <v-app-bar-nav-icon @click.stop="lateralMenu = !lateralMenu" />

        <v-app-bar-title>{{ Title }}</v-app-bar-title>

        <v-spacer></v-spacer>

        <v-text-field
          v-model="searchString"
          label="Ex: Bulbasaur"
          solo
          class="text-field-pos"
          @keydown.enter="searchPokemon"
        />

        <v-btn icon class="search-button" @click="searchPokemon">
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
                    Filter by region
                  </v-list-item-subtitle>
                </v-list-item-content>
              </v-list-item>

              <v-divider class="mb-3" />

              <v-list-item @click="getFirstGenPokemon()">
                <v-list-item-icon>
                  <v-img
                    max-width="20"
                    max-height="20"
                    alt
                    class="icon mt-1"
                    :src="require(`@/assets/icons/pokeballs/pokeball.png`)"
                  />
                </v-list-item-icon>
                <v-list-item-title>Kanto</v-list-item-title>
              </v-list-item>

              <v-list-item @click="getSecondGenPokemon()">
                <v-list-item-icon>
                  <v-img
                    max-width="20"
                    max-height="20"
                    alt
                    class="icon mt-1"
                    :src="require(`@/assets/icons/pokeballs/greatball.png`)"
                  />
                </v-list-item-icon>
                <v-list-item-title>Johto</v-list-item-title>
              </v-list-item>

              <v-list-item @click="getThirdGenPokemon()">
                <v-list-item-icon>
                  <v-img
                    max-width="20"
                    max-height="20"
                    alt
                    class="icon mt-1"
                    :src="require(`@/assets/icons/pokeballs/ultraball.png`)"
                  />
                </v-list-item-icon>
                <v-list-item-title>Hoenn</v-list-item-title>
              </v-list-item>

              <v-list-item @click="getFourthGenPokemon()">
                <v-list-item-icon>
                  <v-img
                    max-width="20"
                    max-height="20"
                    alt
                    class="icon mt-1"
                    :src="require(`@/assets/icons/pokeballs/masterball.png`)"
                  />
                </v-list-item-icon>
                <v-list-item-title>Sinnoh</v-list-item-title>
              </v-list-item>

              <v-list-item @click="getFifthGenPokemon()">
                <v-list-item-icon>
                  <v-img
                    max-width="20"
                    max-height="20"
                    alt
                    class="icon mt-1"
                    :src="require(`@/assets/icons/pokeballs/premierball.png`)"
                  />
                </v-list-item-icon>
                <v-list-item-title>Unova</v-list-item-title>
              </v-list-item>

              <v-list-item @click="getSixthGenPokemon()">
                <v-list-item-icon>
                  <v-img
                    max-width="20"
                    max-height="20"
                    alt
                    class="icon mt-1"
                    :src="require(`@/assets/icons/pokeballs/safariball.png`)"
                  />
                </v-list-item-icon>
                <v-list-item-title>Kalos</v-list-item-title>
              </v-list-item>

              <v-list-item @click="getSeventhGenPokemon()">
                <v-list-item-icon>
                  <v-img
                    max-width="20"
                    max-height="20"
                    alt
                    class="icon mt-1"
                    :src="require(`@/assets/icons/pokeballs/quickball.png`)"
                  />
                </v-list-item-icon>
                <v-list-item-title>Alola</v-list-item-title>
              </v-list-item>

              <v-list-item @click="getEighthGenPokemon()">
                <v-list-item-icon>
                  <v-img
                    max-width="20"
                    max-height="20"
                    alt
                    class="icon mt-1"
                    :src="require(`@/assets/icons/pokeballs/levelball.png`)"
                  />
                </v-list-item-icon>
                <v-list-item-title>Galar</v-list-item-title>
              </v-list-item>
            </template>
          </v-list-item-group>
        </v-list>
      </v-navigation-drawer>

      <v-overlay :absolute="absolute" :value="overlay">
        <v-progress-circular indeterminate size="64" />
      </v-overlay>

      <v-container grid-list-md text-xs-center class="mt-15">
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
  margin-right: 5px !important;
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
    overlay: false,
    searchString: "",
    pokemonList: [],
  }),

  methods: {
    searchPokemon() {
      if (this.searchString != "") {
        this.overlay = true;

        PokemonDataService.getByName(this.searchString)
          .then((response) => {
            var pName = response.data.name;
            var pUrl = "https://pokeapi.co/api/v2/pokemon/" + this.searchString;
            this.pokemonList = [{ name: pName, url: pUrl }];
          })
          .catch((err) => {
            console.log(err);
          });

        this.overlay = false;
      } else {
        this.getFirstGenPokemon();
      }
    },

    getFirstGenPokemon() {
      PokemonDataService.getKantoPokemon()
        .then((response) => {
          this.pokemonList = response.data.results;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    getSecondGenPokemon() {
      PokemonDataService.getJohtoPokemon()
        .then((response) => {
          this.pokemonList = response.data.results;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    getThirdGenPokemon() {
      PokemonDataService.getHoennPokemon()
        .then((response) => {
          this.pokemonList = response.data.results;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    getFourthGenPokemon() {
      PokemonDataService.getSinnohPokemon()
        .then((response) => {
          this.pokemonList = response.data.results;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    getFifthGenPokemon() {
      PokemonDataService.getUnovaPokemon()
        .then((response) => {
          this.pokemonList = response.data.results;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    getSixthGenPokemon() {
      PokemonDataService.getKalosPokemon()
        .then((response) => {
          this.pokemonList = response.data.results;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    getSeventhGenPokemon() {
      PokemonDataService.getAlolaPokemon()
        .then((response) => {
          this.pokemonList = response.data.results;
        })
        .catch((err) => {
          console.log(err);
        });
    },

    getEighthGenPokemon() {
      PokemonDataService.getGalarPokemon()
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
