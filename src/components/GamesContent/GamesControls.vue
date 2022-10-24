<template>
  <StyledGamesControls>
    <GamesControlSort />
    <GamesControlFilter />
  </StyledGamesControls>
</template>

<script>
import { StyledGamesControls } from "@/components/GamesContent/styled";
import GamesControlSort from "@/components/GamesContent/GamesControlSort";
import GamesControlFilter from "@/components/GamesContent/GamesControlFilter";

export default {
  name: "GamesControls",
  components: {
    StyledGamesControls,
    GamesControlSort,
    GamesControlFilter
  }
}
</script>
