import styled from "vue3-styled-components";
import { color } from "@/styles/custom.styled";

export const StyledMenuContainer = styled.div`
  width: auto;
  padding-left: 10px;
  display: flex;
  flex: 0 1 auto;
  align-items: center;
  padding-right: 1rem;
`;

export const StyledMenuButton = styled.button`
  position: relative;
  cursor: pointer;
  overflow-y: hidden;
  line-height: 0;
  background-color: transparent;
  border: none;
`;

const MenuProps = {
  show: Boolean,
};

export const MenuOverlay = styled("div", MenuProps)`
  position: fixed;
  background-color: rgba(0, 0, 0, 0.9);
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
  content: "";
  transition: opacity 0.3s ease-out;
  z-index: 15;
  opacity: ${(props) => (props.show ? 1 : 0)};
  pointer-events: ${(props) => (props.show ? "auto" : "none")};
`;

export const DropDownContainer = styled("div", MenuProps)`
  position: fixed;
  height: calc(100% - 32px);
  max-height: 708px;
  min-width: 310px;
  top: 12px !important;
  right: 5px !important;
  overflow-y: scroll;
  transition: opacity 0.3s linear;
  z-index: 15;
  opacity: ${(props) => (props.show ? 1 : 0)};
  pointer-events: ${(props) => (props.show ? "auto" : "none")};
`;

export const DropDownWrapper = styled.div`
  position: relative;
  display: block;
  background-color: ${color.primary};
  height: 100%;
  overflow-y: auto;
  border-radius: 1.5rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const DropDown = styled.div`
  display: flex;
  flex-direction: column;
  //flex-wrap: wrap;
  color: ${color.secondary};
`;

export const MenuNavContainer = styled.div`
  width: 75%;
  margin-bottom: 1.25rem;
`;

export const StyledMenuNav = styled.nav`
  padding: 0;
  color: ${color.secondary};
`;

export const MenuNavItem = styled.a`
  padding: 0.375rem 0.5rem;
  font-size: 1.5rem;
  font-weight: 700;
  font-family: "Blink-bold", sans-serif;
  text-transform: none;
  color: ${color.secondary};
  letter-spacing: 1px;
  display: block;
`;

export const StyledMenuCloseButton = styled.div`
  position: absolute;
  width: 25%;
  top: 1rem;
  right: 1.125rem;
  cursor: pointer;
  width: 1.5rem;
  height: 1.5rem;
  margin: 1rem auto;
  line-height: 1;
`;

export const StyledBrowseNav = styled.nav`
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
`;

export const BrowseItem = styled.a`
  font-size: 1.125rem;
  padding: 0.375rem 0;
  color: ${color.secondary};
  font-weight: 500;
  &:first-child {
    font-size: 1.5rem;
    font-family: "Blink-bold", sans-serif;
    padding: 0.375rem 0 0.5rem;
  }
`;

export const StyledTopLinks = styled.nav`
  display: flex;
  flex-direction: column;
`;

export const TopLink = styled.a`
  padding: 0.375rem 0 0.5rem;
  color: ${color.secondary};
  font-size: 1.5rem;
  font-weight: 700;
  font-family: "Blink-bold", sans-serif;
  text-transform: none;
  letter-spacing: 1px;
`;
