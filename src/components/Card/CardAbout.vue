<template>
  <StyledCardAbout>
    <StyledAboutList>
      <CardAboutItem>
        <CardAboutTerm>Release date:</CardAboutTerm>
        <CardAboutDetail>Dec 31, 2022</CardAboutDetail>
      </CardAboutItem>
      <CardAboutItem>
        <CardAboutTerm>Genres:</CardAboutTerm>
        <CardAboutDetail>Action, RPG</CardAboutDetail>
      </CardAboutItem>
      <CardAboutItem>
        <CardAboutTerm>Rating:</CardAboutTerm>
        <CardAboutDetail>#1</CardAboutDetail>
      </CardAboutItem>
    </StyledAboutList>
    <ShowMoreBtn>
      Show more like this
      <ShowMoreIcon />
    </ShowMoreBtn>
  </StyledCardAbout>
</template>

<script>
import {
  CardAboutDetail,
  CardAboutItem,
  CardAboutTerm, ShowMoreBtn, ShowMoreIcon,
  StyledAboutList,
  StyledCardAbout
} from "@/components/Card/styled";

export default {
  name: "CardAbout",
  components: {
    StyledCardAbout,
    StyledAboutList,
    CardAboutItem,
    CardAboutTerm,
    CardAboutDetail,
    ShowMoreBtn,
    ShowMoreIcon
  }
}
</script>
