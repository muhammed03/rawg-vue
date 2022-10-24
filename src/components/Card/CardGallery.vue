<template>
  <StyledCardGallery>
    <CardImg src="https://media.rawg.io/media/crop/600/400/games/3e8/3e81585ecda204d4f4b80a041b069adb.jpg" />
  </StyledCardGallery>
</template>

<script>
import { CardImg, StyledCardGallery } from "@/components/Card/styled";

export default {
  name: "CardGallery",
  components: {
    StyledCardGallery,
    CardImg
  }
}
</script>