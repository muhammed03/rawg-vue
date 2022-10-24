import styled from "vue3-styled-components";
import { color } from "@/styles/custom.styled";
import DropDownIcon from "@/assets/icons/drop-down-icon.svg";

export const StyledCard = styled.div`
  transition: transform 0.3s ease-in-out;
  background-color: ${color.secondaryBg};
  box-sizing: border-box;
  border-radius: 0.75rem;
  min-width: 300px;
  &:hover {
    transform: scale(1.01);
  }
`;

export const StyledCardMedia = styled.div`
  width: 100%;
  overflow: hidden;
  border-top-left-radius: 0.75rem;
  border-top-right-radius: 0.75rem;
`;

export const CardMediaWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
  overflow: hidden;
`;

export const StyledCardGallery = styled.div`
  width: 100%;
  font-size: 0;
`;

export const CardImg = styled.img`
  height: 100%;
  width: 100%;
  left: 0;
  object-fit: cover;
  position: absolute;
  top: 0;
`;

export const StyledCardDescription = styled.div`
  position: relative;
  padding: 1rem 1rem;
  color: ${color.primary};
`;

export const CardTitle = styled.span`
  display: block;
  font-size: 1.5rem;
  margin: 0.5rem 0;
  overflow: hidden;
  padding-bottom: 0.125rem;
  cursor: pointer;
  color: ${color.primary};
  &:hover {
    color: ${color.tertiary};
  }
`;

export const StyledBtnsContainer = styled.div`
  display: flex;
  align-items: center;
`;

export const CardBtn = styled.button`
  cursor: pointer;
  display: flex;
  padding: 0.4rem;
  margin-right: 0.25rem;
  color: ${color.primary};
  font-size: 0.75rem;
  background-color: ${color.primaryBg};
  border: none;
  border-radius: 0.25rem;
  gap: 0.25rem;
  align-items: center;
  line-height: 0;
  height: 1.5rem;
`;

export const StyledCardAbout = styled.div`
  border-bottom-left-radius: 12px;
  border-bottom-right-radius: 12px;
`;

export const StyledAboutList = styled.ul`
  font-size: 0.875rem;
  font-weight: 400;
  margin: 0.25rem 0 0;
  padding: 1rem;
  list-style: none;
`;

export const CardAboutItem = styled.li`
  display: flex;
  align-items: baseline;
  padding: 0.75rem 0;
  justify-content: space-between;
  border-bottom: 1px solid ${color.tertiary};
`;

export const CardAboutItemCenter = styled.li`
  display: flex;
  align-items: baseline;
  padding-top: 0.75rem;
  justify-content: center;
  text-decoration: underline;
  line-height: 1;
  cursor: pointer;
`;

export const CardAboutTerm = styled.span`
  color: ${color.tertiary};
`;

export const CardAboutDetail = styled.span`
  color: ${color.primary};
  text-align: right;
`;

export const ShowMoreBtn = styled.a`
  position: relative;
  cursor: pointer;
  border-radius: 0.5rem;
  background-color: ${color.tertiaryBg};
  font-size: 0.876rem;
  font-weight: 400;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem 1rem;
`;

export const ShowMoreIcon = styled.div`
  display: block;
  width: 0.75rem;
  height: 1.125rem;
  margin-left: 0.375rem;
  background-size: contain;
  background-position: 50%;
  background-repeat: no-repeat;
  background-image: url(${DropDownIcon});
  opacity: 0.2;
`;
