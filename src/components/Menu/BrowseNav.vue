<template>
  <StyledBrowseNav>
    <BrowseItem href="#">Browse</BrowseItem>
    <BrowseItem href="#">Reviews</BrowseItem>
    <BrowseItem href="#">Collections</BrowseItem>
    <BrowseItem href="#">Platforms</BrowseItem>
    <BrowseItem href="#">Stores</BrowseItem>
    <BrowseItem href="#">Genres</BrowseItem>
    <BrowseItem href="#">Creators</BrowseItem>
    <BrowseItem href="#">Tags</BrowseItem>
    <BrowseItem href="#">Developers</BrowseItem>
    <BrowseItem href="#">Publishers</BrowseItem>
  </StyledBrowseNav>
</template>

<script>
import { StyledBrowseNav, BrowseItem} from "@/components/Menu/styled";

export default {
  name: 'BrowseNav',
  components: {
    StyledBrowseNav,
    BrowseItem
  }
}
</script>