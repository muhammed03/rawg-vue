<template>
  <StyledHeader>
    <Logo />
    <SearchBar />
    <Menu />
  </StyledHeader>
</template>

<script>
import Logo from "@/components/Header/Logo";
import SearchBar from "@/components/Header/SearchBar";
import Menu from '@/components/Menu/Menu'
import { StyledHeader } from "@/components/Header/styled";

export default {
  name: 'Header',
  components: {
    StyledHeader,
    Logo,
    SearchBar,
    Menu
  }
}
</script>
