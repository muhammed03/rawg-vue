<template>
  <StyledControlSelect v-model="selected">
    <option disabled value="">Filter by: </option>
    <option value="1">PC</option>
    <option value="2">PlayStation</option>
    <option value="3">Xbox</option>
    <option value="4">IOS</option>
    <option value="5">Android</option>
    <option value="6">Apple Macintosh</option>
    <option value="7">Linux</option>
    <option value="8">Nintendo</option>
    <option value="9">Web</option>
  </StyledControlSelect>
</template>

<script>
import { StyledControlSelect } from "@/components/GamesContent/styled";

export default {
  name: "GamesControlFilter",
  components: {
    StyledControlSelect
  },
}
</script>
