<!-- Depois de criar uma nova view, NÃO esquecer de adicionar a rota.-->
<template>
  <v-container>
    <h2 class="text-h5 text-center mb-3 mt-5">
      Lista de Pokemons
    </h2>

    <v-simple-table>
      <template v-slot:default>
        <thead>
          <tr>
            <th class="text-center"></th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="pokemon of pokemonList" :key="pokemon.id">
            <td></td>
            <td>
              <!-- avatar transformar imagem em tamanho pequeno. -->
              <v-avatar size="24px">
                <img :src="pokemon.url" :alt="pokemon.nome" />
              </v-avatar>
              <!--Class pl-2 é padding-left pra afastar o nome da imagem-->
              <span class="pl-12">{{ pokemon.nome }}</span>
            </td>
            <td></td>
          </tr>
        </tbody>
      </template>
    </v-simple-table>
  </v-container>
</template>

<script>
export default {
  name: "PokemonLista",
  /*Criando array pra consumir a API*/
  data() {
    return {
      pokemonList: [
        {
          id: 1,
          nome: "Pikachu",
          url:
            "https://1.bp.blogspot.com/-jCXo1Ac5f70/V60Speia5xI/AAAAAAAABHA/Q6PDNdhPV48xDqMxiwYWRhyn7YP0RUXeACLcB/s1600/025pikachu_xy_anime_3.png",
        },
        {
          id: 2,
          nome: "Bulbassauro",
          url:
            "https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png",
        },
        {
          id: 3,
          nome: "Squirtle",
          url:
            "https://i.pinimg.com/736x/82/b6/fe/82b6fe8813cc7f1965e8a5456e91fc96.jpg",
        },
        {
          id: 4,
          nome: "Charmeleon",
          url:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQqF6EMHkVjjZY9f1tNzyZIeCVgVNM0vdntA&usqp=CAU",
        },
      ],
    };
  },

  /*Consumindo a API
  created() {
    fetch("https://pokeapi.co/api/v2/pokemon/1")
      .then((resposta) => resposta.json())
      .then((json) => {
        this.pokemonList = json;
        console.log(json);
      });
  },*/
};
</script>

<style scoped></style>
