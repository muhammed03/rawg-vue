<template>
  <StyledMenuButton @click="$emit('toggle-menu-show')">
    <span>
      <MenuIcon />
    </span>
  </StyledMenuButton>
</template>

<script>
import { StyledMenuButton } from "@/components/Menu/styled";
import MenuIcon from '@/assets/icons/MenuIcon'

export default {
  name: 'MenuOpenButton',
  components: {
    StyledMenuButton,
    MenuIcon
  }
}
</script>

