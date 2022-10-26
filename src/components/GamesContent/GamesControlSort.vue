<template>
  <StyledControlSelect v-model="selectedOrder" @change="changeOrder">
    <option disabled value="">Order by: </option>
    <option value="released">Order by: Lately released</option>
    <option value="-released">Order by: Upcoming releases</option>
    <option value="-rating">Order by: Top rating</option>
    <option value="rating">Order by: Lowly rating</option>
  </StyledControlSelect>
</template>

<script>
import { StyledControlSelect } from "@/components/GamesContent/styled";
import {mapGetters} from "vuex";

export default {
  name: "GamesControlSort",
  components: {
    StyledControlSelect
  },
  data() {
    return {
      selectedOrder : '-rating'
    }
  },
  methods: {
    changeOrder(){
      const prevParams = mapGetters(['getGamesParams']);
      const updatedParams = {
        prevParams,
        ordering: this.selectedOrder
      }
      this.$store.dispatch('mutateGamesParams', updatedParams);
      this.$store.dispatch('fetchGames', updatedParams);
    }
  }
}
</script>
