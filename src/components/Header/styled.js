import styled from "vue3-styled-components";
import { device, color } from "@/styles/custom.styled";

import SearchFocusIcon from "@/assets/icons/search-focus-icon.svg";
import SearchIcon from "@/assets/icons/search-icon.svg";

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: fit-content;
  box-sizing: border-box;
  @media ${device.tablet} {
    padding: 1.5rem 2.5rem;
  }
  @media ${device.mobileS} {
    padding: 0.5rem 0.5rem;
  }
`;

export const StyledSearchBarForm = styled.div`
  width: auto;
  padding-left: 10px;
  margin: 0 0.75rem 0 1rem;
`;

export const StyledSearchInput = styled.input`
  color: ${color.secondary};
  font-size: 0.875rem;
  height: 1.75rem;
  width: 100%;
  background-image: url(${SearchIcon});
  background-repeat: no-repeat;
  background-size: 1rem;
  background-position: 1rem;
  background-color: ${color.primaryBg};
  border-radius: 1rem;
  border: none;
  padding: 0 12px 0 38px;
  transition: background 300ms ease-out;
  &::placeholder {
    font-size: 0.875rem;
  }
  &:focus {
    background-image: url(${SearchFocusIcon});
    background-color: ${color.primary};
  }
  @media ${device.tablet} {
    font-size: 1.5rem;
    height: 2.75rem;
    background-size: 1.25rem;
    background-position: 0.5rem;
    &::placeholder {
      font-size: 1.5rem;
    }
  }
`;
