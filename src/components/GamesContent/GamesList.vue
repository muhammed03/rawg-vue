<template>
  <StyledGamesList>
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
    <Card />
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
  }
}
</script>