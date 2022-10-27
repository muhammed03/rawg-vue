<template>
  <Loader v-if="getLoaderState === true"/>
  <StyledGamesList v-else>
    <Card v-for="game in gamesList" :key="game.id" :gameInfo="game"/>
  </StyledGamesList>
</template>

<script>
import { StyledGamesList} from "@/components/GamesContent/styled";
import Card from "@/components/Card/Card";
import {mapGetters} from "vuex";
import Loader from "@/components/Loader/Loader";

export default {
  name: "GamesList",
  props: ['gamesList'],
  components: {
    Loader,
    StyledGamesList,
    Card,
  },
  computed: mapGetters(['getLoaderState']),
}
</script>