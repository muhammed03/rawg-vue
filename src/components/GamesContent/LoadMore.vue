<template>
  <StyledLoadMore>
    <LoadMoreText>
      Load more...
    </LoadMoreText>
  </StyledLoadMore>
</template>

<script>
import { LoadMoreText, StyledLoadMore } from "@/components/GamesContent/styled";

export default {
  name: "LoadMore",
  components: {
    StyledLoadMore,
    LoadMoreText
  }
}
</script>
