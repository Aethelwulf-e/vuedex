<template>
  <v-app-bar app color="black" dark>
    <v-app-bar-nav-icon></v-app-bar-nav-icon>

    <v-app-bar-title class="nav-bar-title">{{ Title }}</v-app-bar-title>

    <v-spacer></v-spacer>

    <v-btn icon>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>
  </v-app-bar>
</template>

<style>
.nav-bar-title {
  font-size: 1.70rem !important;
  margin-left: 30px;
}
</style>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    Title: "Vuedex",
  }),
};
</script>
