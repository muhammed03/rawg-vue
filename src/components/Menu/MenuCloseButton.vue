<template>
  <StyledMenuCloseButton>
    <span>
      <MenuCloseIcon />
    </span>
  </StyledMenuCloseButton>
</template>

<script>
import { StyledMenuCloseButton } from "@/components/Menu/styled";
import MenuCloseIcon from "@/assets/icons/MenuCloseIcon";

export default {
  name: 'MenuCloseButton',
  components:{
    StyledMenuCloseButton,
    MenuCloseIcon
  }
}
</script>