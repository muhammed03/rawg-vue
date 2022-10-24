<template>
  <Header />
  <GamesContent />
</template>

<script>
import Header from "@/components/Header/Header";
import GamesContent from "@/components/GamesContent/GamesContent";

export default {
  name: "GamesView",
  components: {
    Header,
    GamesContent
  },
};
</script>
