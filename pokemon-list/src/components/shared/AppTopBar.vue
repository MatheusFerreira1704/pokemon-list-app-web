<template>
  <div class="app-to-bar">
    <v-app-bar
      absolute
      color="#fcb69f"
      dark
      shrink-on-scroll
      src="https://s2.glbimg.com/TEcaFoBv0L84h7OcIp8b4Nm3pa0=/0x600/s.glbimg.com/po/tt2/f/original/2014/09/11/0330d49e012d959f123139180a6d.jpeg"
      scroll-target="#scrolling-techniques-2"
    >
      <template> </template>
      <v-app-bar-nav-icon @click="drawer = true"> </v-app-bar-nav-icon>

      <v-spacer></v-spacer>

      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </v-app-bar>
    <!--Forme encontrada para baixar a imagem de inicio.-->
    <br />
    <br />
    <br />
    <br />
    <br />

    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="red darken-1
"
        >
          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-home</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Inicio</v-list-item-title>
          </v-list-item>

          <v-list-item>
            <v-list-item-icon>
              <v-icon>mdi-paw</v-icon>
            </v-list-item-icon>
            <v-list-item-title>Pokemons</v-list-item-title>
          </v-list-item>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "AppToBar",
  data: () => ({
    drawer: false,
    group: null,
  }),
};
</script>

<style scoped></style>>
