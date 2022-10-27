<template>
  <StyledSearchBarForm @submit.prevent="submitForm">
    <StyledSearchInput
        v-model.lazy="searchTerm"
        placeholder="Search something..."
        name="searchTerm"
    />
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
    submitForm (){
      const prevParams = mapGetters(['getGamesParams']);
      const updatedParams = {
        prevParams,
        search: this.searchTerm
      }
      this.$store.dispatch('mutateGamesParams', updatedParams);
      this.$store.dispatch('fetchGames', updatedParams);
    }
  }
}
</script>
