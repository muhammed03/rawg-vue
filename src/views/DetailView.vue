<template>
  <DetailContent />
</template>

<script>
import DetailContent from "@/components/DetailContent/DetailContent";

export default {
  name: 'DetailView',
  components: {
    DetailContent
  },
  data(){
    return {
      id: this.$route.params.id,
    }
  },
}
</script>