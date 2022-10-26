import styled from "vue3-styled-components";
import { color, device } from "@/styles/custom.styled";

export const DetailContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding-top: 1rem;
  margin: 0 auto;
  @media ${device.tablet} {
    max-width: 720px;
  }
  @media ${device.laptop} {
    max-width: 980px;
  }
`;

export const DetailWrapper = styled.div`
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const LoaderWrapper = styled.div`
  position: absolute;
  width: 100px;
  top: 50vh;
  left: 50vw;
  transform: translate(-50%, -50%);
`;

export const NotFoundImage = styled.div`
  background-color: ${color.primaryBg};
  padding: 5rem 0;
  display: flex;
  justify-content: center;
  width: 100%;
  span {
    color: ${color.primary};
    font-size: 1.5rem;
    @media ${device.tablet} {
      font-size: 3rem;
    }
  }
`;

export const StyledDetailAbout = styled.div`
  margin-top: 1rem;
  margin-bottom: 1rem;
  width: 100%;
`;

export const DetailAboutTitle = styled.h2`
  color: ${color.primary};
  font-size: 1.25rem;
  font-weight: 400;
  line-height: 1.375rem;
  @media ${device.tablet} {
    font-size: 2rem;
  }
`;

export const DetailAboutParagraph = styled.p`
  color: ${color.primary};
  font-size: 0.75rem;
  font-weight: 400;
  line-height: 1rem;
  @media ${device.tablet} {
    font-size: 1.25rem;
    line-height: 1.375rem;
  }
`;

export const DetailImage = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
`;
