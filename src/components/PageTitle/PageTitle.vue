<template>
  <StyledTitle>{{title}}</StyledTitle>
</template>

<script>
import { StyledTitle } from "@/components/PageTitle/styled";

export default {
  name: "PageTitle",
  components: {
    StyledTitle
  },
  props: {
    title: String
  }
}
</script>