<template>
  <StyledControlSelect v-model="selected">
    <option disabled value="">Order by: </option>
    <option value="released">Order by: Lately released</option>
    <option value="-released">Order by: Upcoming releases</option>
    <option value="-rating">Order by: Top rating</option>
    <option value="rating">Order by: Lowly rating</option>
  </StyledControlSelect>
</template>

<script>
import { StyledControlSelect } from "@/components/GamesContent/styled";

export default {
  name: "GamesControlSort",
  components: {
    StyledControlSelect
  }
}
</script>
