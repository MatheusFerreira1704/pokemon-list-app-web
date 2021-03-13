<template>
  <v-container>
    <h2 class="text-h5 text-center mb-3 mt-5">Lista de Pokemons</h2>

    <v-img
      class="inicio-imagem mb-4"
      src="https://i2.wp.com/gamelogia.com.br/wp-content/uploads/2016/12/pokemon-segunda-gerac%CC%A7a%CC%83o.jpg?fit=1280%2C854&ssl=1"
    >
    </v-img>
    <p class="text-justify">
      Aqui nesse WEB-APP você encontrar informações sobre todos os Pokemons.
      Fique a vontade para conhecer um pouco mais sobres os Pokemons.
    </p>
  </v-container>
</template>

<script>
export default {
  name: "Inicio",
};
</script>

<style scoped>
.inicio-imagem {
  border-radius: 15px;
}
</style>
