<template>
  <GamesContentContainer>
    <GamesContentHeader />
    <GamesControls />
    <GamesList :games-list="getGamesList"/>
    <LoadMore />
  </GamesContentContainer>
</template>

<script>
import { GamesContentContainer } from "@/components/GamesContent/styled";
import GamesContentHeader from "@/components/GamesContent/GamesContentHeader";
import GamesList from "@/components/GamesContent/GamesList";
import GamesControls from "@/components/GamesContent/GamesControls";
import LoadMore from "@/components/GamesContent/LoadMore";
import {mapGetters} from "vuex";

export default {
  name: "GamesContent",
  components: {
    GamesList,
    GamesContentContainer,
    GamesContentHeader,
    GamesControls,
    LoadMore,
  },
  computed: mapGetters(['getGamesList']),
  created () {
    this.$store.dispatch('fetchGames', mapGetters(['getGamesParams']))
  }
}
</script>
