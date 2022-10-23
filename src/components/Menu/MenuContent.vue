<template>
  <MenuOverlay :show="menuVisible"/>
  <DropDownContainer :show="menuVisible">
    <DropDownWrapper>
      <DropDown>
        <MenuNav />
        <MenuCloseButton @click="$emit('toggle-menu-show')"/>
        <BrowseNav />
        <TopLinks />
      </DropDown>
    </DropDownWrapper>
  </DropDownContainer>
</template>

<script>
import {MenuOverlay, DropDownWrapper, DropDownContainer, DropDown} from "@/components/Menu/styled";
import MenuNav from "@/components/Menu/MenuNav";
import MenuCloseButton from "@/components/Menu/MenuCloseButton";
import BrowseNav from "@/components/Menu/BrowseNav";
import TopLinks from "@/components/Menu/TopLinks";

export default {
  name: 'MenuContent',
  components:{
    MenuOverlay,
    DropDownContainer,
    DropDownWrapper,
    DropDown,
    MenuNav,
    MenuCloseButton,
    BrowseNav,
    TopLinks
  },
  props: {
    menuVisible: Boolean
  }
}
</script>