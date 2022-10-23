<template>
  <MenuNavContainer>
    <StyledMenuNav>
      <MenuNavItem href="https://rawg.io/">Home</MenuNavItem>
      <MenuNavItem href="https://rawg.io/reviews/popular">Reviews</MenuNavItem>
    </StyledMenuNav>
  </MenuNavContainer>
</template>

<script>
import { MenuNavContainer, StyledMenuNav, MenuNavItem } from "@/components/Menu/styled";

export default {
  name: 'MenuNav',
  components: {
    MenuNavContainer,
    StyledMenuNav,
    MenuNavItem
  }
}
</script>