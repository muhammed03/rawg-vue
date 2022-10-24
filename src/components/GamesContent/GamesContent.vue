<template>
  <GamesContentContainer>
    <GamesContentHeader />
    <GamesControls />
    <GamesList />
    <LoadMore />
  </GamesContentContainer>
</template>

<script>
import { GamesContentContainer } from "@/components/GamesContent/styled";
import GamesContentHeader from "@/components/GamesContent/GamesContentHeader";
import GamesList from "@/components/GamesContent/GamesList";
import GamesControls from "@/components/GamesContent/GamesControls";
import LoadMore from "@/components/GamesContent/LoadMore";

export default {
  name: "GamesContent",
  components: {
    GamesList,
    GamesContentContainer,
    GamesContentHeader,
    GamesControls,
    LoadMore
  }
}
</script>
