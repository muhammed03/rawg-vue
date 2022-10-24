import styled from "vue3-styled-components";
import { color, device } from "@/styles/custom.styled";

export const StyledTitle = styled.h1`
  color: ${color.primary};
  font-size: 2.25rem;
  margin: 0;
  @media ${device.tablet} {
    font-size: 3.5rem;
  }
  @media ${device.laptop} {
    font-size: 4.5rem;
  }
`;
