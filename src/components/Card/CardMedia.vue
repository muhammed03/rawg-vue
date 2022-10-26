<template>
  <StyledCardMedia>
    <CardMediaWrapper>
      <CardGallery :gameImg="gameImg"/>
    </CardMediaWrapper>
  </StyledCardMedia>
</template>

<script>
import {CardMediaWrapper, StyledCardMedia} from "@/components/Card/styled";
import CardGallery from "@/components/Card/CardGallery";

export default {
  name: "CardMedia",
  props: ['gameImg'],
  components: {
    StyledCardMedia,
    CardMediaWrapper,
    CardGallery
  }
}
</script>