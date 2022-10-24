<template>
  <GamesHeaderContainer>
    <PageTitle title="New and trending"/>
    <GamesHeaderSubtitle>Based on player counts and release date</GamesHeaderSubtitle>
  </GamesHeaderContainer>
</template>

<script>
import {GamesHeaderContainer, GamesHeaderSubtitle} from "@/components/GamesContent/styled";
import PageTitle from "@/components/PageTitle/PageTitle";

export default {
  name: "GamesContentHeader",
  components: {
    PageTitle,
    GamesHeaderContainer,
    GamesHeaderSubtitle
  }
}
</script>
