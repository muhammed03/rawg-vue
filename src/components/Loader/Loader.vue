<template>
  <StyledLoader>
    <LoaderInner>
      <div />
    </LoaderInner>
  </StyledLoader>
</template>

<script>
import {LoaderInner, StyledLoader} from "@/components/Loader/styled";

export default {
  name: "Loader",
  components: {
    StyledLoader,
    LoaderInner
  }
}
</script>
