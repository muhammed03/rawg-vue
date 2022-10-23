<template>
  <StyledTopLinks>
    <TopLink href="#">API</TopLink>
    <TopLink href="#">Get an API key</TopLink>
    <TopLink href="#">Sitemap</TopLink>
  </StyledTopLinks>
</template>

<script>
import { StyledTopLinks, TopLink } from "@/components/Menu/styled";

export default {
  name: 'TopLinks',
  components: {
    StyledTopLinks,
    TopLink
  }
}
</script>