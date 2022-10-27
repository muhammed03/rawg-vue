<template>
  <StyledLoadMore @click="loadMoreGames">
    <LoadMoreText>
      Load more...
    </LoadMoreText>
  </StyledLoadMore>
</template>

<script>
import { LoadMoreText, StyledLoadMore } from "@/components/GamesContent/styled";
import {mapGetters} from "vuex";

export default {
  name: "LoadMore",
  components: {
    StyledLoadMore,
    LoadMoreText
  },
  methods: {
    loadMoreGames(){
      const prevParams = mapGetters(['getGamesParams']);
      const updatedParams = {
        prevParams,
        parent_platforms: 50
      }
      this.$store.dispatch('mutateGamesParams', updatedParams);
      this.$store.dispatch('fetchGames', updatedParams);
    }
  }
}
</script>
