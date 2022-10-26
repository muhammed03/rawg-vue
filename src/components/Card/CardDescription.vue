<template>
  <StyledCardDescription>
    <router-link :to="`games/${1}`">
      <CardTitle>{{gameInfo.name}}</CardTitle>
    </router-link>
    <CardButtonsContainer />
    <CardAbout :gameInfo="gameInfo"/>
  </StyledCardDescription>
</template>

<script>
import {CardTitle, StyledCardDescription} from "@/components/Card/styled";
import CardButtonsContainer from "@/components/Card/CardButtonsContainer";
import CardAbout from "@/components/Card/CardAbout";

export default {
  name: "CardDescription",
  props: ['gameInfo'],
  components: {
    CardButtonsContainer,
    StyledCardDescription,
    CardTitle,
    CardAbout
  }
}
</script>

<style scoped>

</style>