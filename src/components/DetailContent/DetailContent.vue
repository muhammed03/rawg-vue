<template>
  <Header />
  <DetailContainer>
    <PageTitle title="CS GO"/>
    <DetailWrapper>
      <DetailImage src="https://media.rawg.io/media/crop/600/400/games/3e8/3e81585ecda204d4f4b80a041b069adb.jpg" />
    </DetailWrapper>
    <DetailAbout />
  </DetailContainer>
</template>

<script>
import Header from "@/components/Header/Header";
import {DetailContainer, DetailImage, DetailWrapper} from "@/components/DetailContent/styled";
import PageTitle from "@/components/PageTitle/PageTitle";
import DetailAbout from "@/components/DetailContent/DetailAbout";

export default {
  name: "DetailContent",
  components: {
    DetailImage,
    PageTitle,
    Header,
    DetailContainer,
    DetailWrapper,
    DetailAbout
  }
}
</script>
