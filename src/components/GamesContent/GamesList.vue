<template>
  <StyledGamesList>
    <Card />
  </StyledGamesList>
</template>

<script>
import { StyledGamesList} from "@/components/GamesContent/styled";
import Card from "@/components/Card/Card";

export default {
  name: "GamesList",
  components: {
    StyledGamesList,
    Card
  },
   created () {
      this.$store.dispatch('fetchGames', {
        page_size: 15
      })
  },
}
</script>