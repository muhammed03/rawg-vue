<template>
  <StyledGamesList>
    <Card v-for="game in getGamesList" :key="game.id" :gameInfo="game"/>
  </StyledGamesList>
</template>

<script>
import { StyledGamesList} from "@/components/GamesContent/styled";
import Card from "@/components/Card/Card";
import { mapGetters } from 'vuex';

export default {
  name: "GamesList",
  components: {
    StyledGamesList,
    Card
  },
  computed: mapGetters(['getGamesList']),
   created () {
      this.$store.dispatch('fetchGames', {
        page_size: 15
      })
  },
}
</script>