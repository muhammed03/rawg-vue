<template>
  <StyledCard>
    <CardMedia :gameImg="gameInfo.background_image"/>
    <CardDescription :gameInfo="gameInfo"/>
  </StyledCard>
</template>

<script>
import { StyledCard } from "@/components/Card/styled";
import CardMedia from "@/components/Card/CardMedia";
import CardDescription from "@/components/Card/CardDescription";

export default {
  name: "Card",
  props: ['gameInfo'],
  components: {
    StyledCard,
    CardMedia,
    CardDescription
  }
}
</script>