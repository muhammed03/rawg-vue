<template>
  <StyledCardGallery>
    <CardImg :src="gameImg" />
  </StyledCardGallery>
</template>

<script>
import {CardImg, StyledCardGallery} from "@/components/Card/styled";

export default {
  name: "CardGallery",
  props: ['gameImg'],
  components: {
    StyledCardGallery,
    CardImg
  }
}
</script>