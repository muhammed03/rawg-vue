<template>
  <StyledCardMedia>
    <CardMediaWrapper>
      <CardGallery/>
    </CardMediaWrapper>
  </StyledCardMedia>
</template>

<script>
import {CardMediaWrapper, StyledCardMedia} from "@/components/Card/styled";
import CardGallery from "@/components/Card/CardGallery";

export default {
  name: "CardMedia",
  components: {
    StyledCardMedia,
    CardMediaWrapper,
    CardGallery
  }
}
</script>