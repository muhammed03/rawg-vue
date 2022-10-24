<template>
  <Header />
  <PageTitle :title="id"/>
</template>

<script>
import Header from "@/components/Header/Header";
import PageTitle from "@/components/PageTitle/PageTitle";

export default {
  name: 'GameDetailView',
  components: {
    Header,
    PageTitle
  },
  data(){
    return {
      id: this.$route.params.id,
    }
  },
}
</script>