<template>
  <StyledDetailAbout>
    <DetailAboutTitle>
      About
    </DetailAboutTitle>
    <DetailAboutParagraph>
      Sired in an act of vampire insurrection, your existence ignites the war for Seattle's blood trade. Enter uneasy alliances with the creatures who control the city and uncover the sprawling conspiracy which plunged Seattle into a bloody civil war between powerful vampire factions. ♞Become the Ultimate Vampire Immerse yourself in the World of Darkness and live out your vampire fantasy in a city filled with intriguing characters that react to your choices. You and your unique disciplines are a weapon in our forward-driving, fast-moving, melee-focussed
    </DetailAboutParagraph>
  </StyledDetailAbout>
</template>

<script>
import {DetailAboutParagraph, DetailAboutTitle, StyledDetailAbout} from "@/components/DetailContent/styled";

export default {
  name: 'DetailAbout',
  components: {
    StyledDetailAbout,
    DetailAboutTitle,
    DetailAboutParagraph
  }
}
</script>