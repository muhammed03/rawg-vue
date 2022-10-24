import styled from "vue3-styled-components";
import { color, device } from "@/styles/custom.styled";

export const GamesContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100%;
`;

export const GamesHeaderContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
`;

export const GamesHeaderSubtitle = styled.h2`
  color: ${color.primary};
  font-size: 1rem;
  margin: 0.5rem 0 0;
  @media ${device.tablet} {
    font-size: 1.5rem;
  }
  @media ${device.laptop} {
    font-size: 2rem;
  }
`;

export const StyledGamesControls = styled.div`
  align-self: start;
  display: flex;
  overflow-x: scroll;
  padding-bottom: 0.625rem;
  gap: 1rem;
  margin-bottom: 1rem;
  width: 100%;
`;

export const StyledControlSelect = styled.select`
  color: ${color.primary};
  font-size: 0.875rem;
  width: auto;
  padding: 0.625rem 1.5rem 0.625rem 1rem;
  border-radius: 0.5rem;
  background-color: ${color.secondaryBg};
  border: none;
`;

export const StyledGamesList = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1.5rem;
`;

export const StyledLoadMore = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 5rem;
  width: 12.5rem;
  background-color: ${color.primaryBg};
  border-radius: 0.5rem;
  margin: 2rem auto;
  border: none;
`;

export const LoadMoreText = styled.span`
  font-size: 1.2rem;
  color: ${color.primary};
`;
