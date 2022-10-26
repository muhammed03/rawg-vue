<template>
  <StyledSearchBarForm>
    <StyledSearchInput v-model="searchTerm" @change="changeSearchTerm" />
  </StyledSearchBarForm>
</template>


<script>
import { StyledSearchBarForm, StyledSearchInput } from "@/components/Header/styled";
import {mapGetters} from "vuex";

export default {
  name: "SearchBar",
  components: {
    StyledSearchBarForm,
    StyledSearchInput
  },
  data() {
    return {
      searchTerm: ''
    }
  },
  methods: {
    changeSearchTerm() {
      const prevParams = mapGetters(['getGamesParams']);
      const updatedParams = {
        prevParams,
        search: this.searchTerm
      }
      this.$store.dispatch('mutateGamesParams', updatedParams);
      this.$store.dispatch('fetchGames', updatedParams);
    },
  }
}
</script>
