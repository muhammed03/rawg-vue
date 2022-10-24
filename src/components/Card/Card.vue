<template>
  <StyledCard>
    <CardMedia />
    <CardDescription />
  </StyledCard>
</template>

<script>
import { StyledCard } from "@/components/Card/styled";
import CardMedia from "@/components/Card/CardMedia";
import CardDescription from "@/components/Card/CardDescription";

export default {
  name: "Card",
  components: {
    StyledCard,
    CardMedia,
    CardDescription
  }
}
</script>