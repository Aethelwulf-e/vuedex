<template>
  <div id="app" class="d-flex justify-center mb-5">
    <v-app-bar color="black" dark>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>

      <v-app-bar-title class="nav-bar-title">{{ Title }}</v-app-bar-title>

      <v-spacer></v-spacer>

      <v-text-field
        label="Ex: Pokémon, Abilities, Types"
        solo
        class="text-field-pos"
      />

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>

    <Pokemon />

  </div>
</template>

<style>
.nav-bar-title {
  font-size: 1.7rem !important;
  margin-left: 30px;
}

.text-field-pos {
  margin-top: 25px !important;
}
</style>

<script>
import Pokemon from "./components/Pokemon";

export default {
  name: "App",

  components: {
    Pokemon,
  },

  data: () => ({
    Title: "Vuedex",
  }),
};
</script>
