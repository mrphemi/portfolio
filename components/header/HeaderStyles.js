import styled from "styled-components";
import Link from "next/link";

import breakpoints from "../shared/breakpoints";

export const Logo = styled(Link)`
  font-size: 1.6rem;
  font-weight: 900;
  text-transform: uppercase;
`;

export const LogoImg = styled.img`
  width: 6rem;
  height: 6rem;
  border-radius: 50%;
  border: 2px solid ${({ theme }) => theme.colors.primary};
  display: block;
`;

export const Wrapper = styled.div`
  margin-top: 6rem;
`;

export const HorizontalLine = styled.span`
  background: ${({ theme }) => theme.colors.text_dark};
  height: 0.2rem;
  width: 35%;
  display: block;
  align-self: center;

  ${breakpoints.desktop} {
    width: 25%;
  }
`;

export const SocialWrapper = styled.div`
  display: flex;
`;

export const IconsWrapper = styled.div`
  margin-left: 4rem;
  img {
    margin-left: 2.5rem;
  }
`;

export const SocialIcon = styled.img`
  &:hover {
    transform: scale(1.09);
    background: ${({ theme }) => theme.colors.primary};
    opacity: 0.3;
  }
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.text_dark};
  text-transform: capitalize;
  line-height: 4.5rem;
  background-image: url("/assets/double_quotes.svg");
  background-position: 0 4rem;
  background-repeat: no-repeat;
  padding: 6rem 0 10rem;

  ${breakpoints.tabMd} {
    font-size: 5rem;
    line-height: 7rem;
  }
`;

export const ColoredText = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-size: inherit;
`;
