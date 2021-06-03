<template>
  <div id="Pokemon">
    <v-card
      outlined
      style="height: 200px"
      :color="this.getCardColor(this.pokemon.types[0].type.name)"
    >
      <v-list-item>
        <div >
          <v-img min-height="150" min-width="150" :src="this.pokemon.imageUrl" />
        </div>

        <v-list-item-content class="pt-4">
          <v-list-item-title class="white--text font-weight-bold title m0"
            >{{ this.pokemon.dexId }} {{ this.pokemon.name }}</v-list-item-title
          >
          <v-list-item-group>
            <div>
              <v-chip
                v-for="(item, index) in this.pokemon.types"
                :key="index"
                :color="getChipColor(item.type.name)"
                class="mt-3 mr-2"
                text-color="white"
                small
              >
                <v-avatar left>
                  <v-img
                    max-width="15"
                    max-height="15"
                    alt
                    class="icon"
                    :src="require(`@/assets/icons/${item.type.name}.svg`)"
                  />
                </v-avatar>
                {{ item.type.name }}
              </v-chip>
            </div>
          </v-list-item-group>

          <v-list-item-group>
            <div>
              <v-list-item-title
                class="white--text font-weight-medium subtitle-2 mt-4"
              >
                <span id="abilities">abilities</span>
              </v-list-item-title>

              <v-chip
                v-for="(item, index) in this.pokemon.abilities"
                :key="index"
                class="mr-2 mt-3"
                text-color="white"
                small
                >{{ item.ability.name }}</v-chip
              >
            </div>
          </v-list-item-group>
        </v-list-item-content>
      </v-list-item>
    </v-card>
  </div>
</template>

<style>
span#abilities {
  display: flex;
}
span#abilities:before,
span#abilities:after {
  color: white;
  content: "";
  flex: 1;
  border-bottom: groove 2px;
  margin: auto 0.25em;
}
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
    },
  },

  mounted() {
    this.getPokemon();
  },
};
</script>
