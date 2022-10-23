<template>
  <StyledSearchBarForm>
    <StyledSearchInput />
  </StyledSearchBarForm>
</template>


<script>
import { StyledSearchBarForm, StyledSearchInput } from "@/components/Header/styled";

export default {
  name: "SearchBar",
  components: {
    StyledSearchBarForm,
    StyledSearchInput
  }
}
</script>
