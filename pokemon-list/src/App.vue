<template>
  <v-app>
    <AppTopBar />

    <v-main><Inicio /> </v-main>
  </v-app>
</template>

<script>
import AppTopBar from "./components/shared/AppTopBar";
import Inicio from "./components/shared/Inicio";
export default {
  name: "App",

  components: {
    AppTopBar,
    Inicio,
  },

  data: () => ({
    //
  }),
};
</script>
