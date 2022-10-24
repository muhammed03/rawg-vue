<template>
  <StyledBtnsContainer>
    <CardBtn>
      <span>
        <PlusIcon />
      </span>
      <span>321</span>
    </CardBtn>
    <CardBtn>
      <span>
        <GiftIcon />
      </span>
    </CardBtn>
    <CardBtn>
      <span>
        <DotsIcon />
      </span>
    </CardBtn>
  </StyledBtnsContainer>
</template>

<script>
import {CardBtn, StyledBtnsContainer} from "@/components/Card/styled";
import PlusIcon from "@/assets/icons/PlusIcon";
import GiftIcon from "@/assets/icons/GiftIcon";
import DotsIcon from "@/assets/icons/DotsIcon";

export default {
  name: "CardButtonsContainer",
  components: {
    StyledBtnsContainer,
    CardBtn,
    PlusIcon,
    GiftIcon,
    DotsIcon,
  }
}
</script>
