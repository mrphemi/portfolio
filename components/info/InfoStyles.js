import styled from "styled-components";

import breakpoints from "../shared/breakpoints";

export const BannerWrapper = styled.div`
  position: relative;
`;

export const BannerImg = styled.img`
  width: 100%;
  display: block;
`;

export const BannerOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${({ theme }) => theme.colors.primary};
  opacity: 0.2;
`;

export const TextWrapper = styled.div`
  display: grid;
  margin-top: 4rem;
  grid-gap: 3.5rem;
  ${breakpoints.tabMd} {
    grid-template-columns: 1fr 1fr;
  }
`;

export const Text = styled.p`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.text};
  line-height: 2.8rem;
  word-spacing: 0.3rem;
  letter-spacing: 0.03rem;
`;
