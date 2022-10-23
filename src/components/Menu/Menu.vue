<template>
  <StyledMenuContainer>
    <MenuOpenButton @toggle-menu-show="toggleMenuShow"/>
    <MenuContent @toggle-menu-show="toggleMenuShow" :menu-visible="menuVisible" />
  </StyledMenuContainer>
</template>

<script>
import { StyledMenuContainer } from "@/components/Menu/styled";
import MenuOpenButton from "@/components/Menu/MenuOpenButton";
import MenuContent from "@/components/Menu/MenuContent";

export default {
  name: 'Menu',
  components: {
    StyledMenuContainer,
    MenuOpenButton,
    MenuContent
  },
  data() {
    return {
      menuVisible: false,
    }
  },
  methods:{
    toggleMenuShow () {
      this.menuVisible = !this.menuVisible;
    }
  }
}
</script>