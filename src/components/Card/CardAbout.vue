<template>
  <StyledCardAbout>
    <StyledAboutList>
      <CardAboutItem>
        <CardAboutTerm>Release date:</CardAboutTerm>
        <CardAboutDetail>{{ releaseDate }}</CardAboutDetail>
      </CardAboutItem>
      <CardAboutItem>
        <CardAboutTerm>Genres:</CardAboutTerm>
        <CardAboutDetail>{{ genres }}</CardAboutDetail>
      </CardAboutItem>
      <CardAboutItem>
        <CardAboutTerm>Rating:</CardAboutTerm>
        <CardAboutDetail>#{{rating}}</CardAboutDetail>
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
import {convertDateString, mapGenres} from "@/helpers/utils";

export default {
  name: "CardAbout",
  props: ['gameInfo'],
  data () {
    return {
      releaseDate: convertDateString(this.gameInfo.released),
      genres: mapGenres(this.gameInfo.genres),
      rating: this.gameInfo.rating
    }
  },
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
