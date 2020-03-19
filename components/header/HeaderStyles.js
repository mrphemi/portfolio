import styled, { keyframes } from "styled-components";

import breakpoints from "../shared/breakpoints";

import Twitter from "../../svgs/twitter.svg";
import Linkedin from "../../svgs/Linkedin.svg";
import Github from "../../svgs/github.svg";

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
  a {
    margin-left: 2.5rem;
    color: inherit;
  }
`;

export const TwitterIcon = styled(Twitter)`
  &:hover {
    transform: scale(1.09);
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const GithubIcon = styled(Github)`
  &:hover {
    transform: scale(1.09);
    color: ${({ theme }) => theme.colors.primary};
  }
`;

export const LinkedInIcon = styled(Linkedin)`
  &:hover {
    transform: scale(1.09);
    color: ${({ theme }) => theme.colors.primary};
  }
`;

const headerAnimation = keyframes`
from {
    background-position: 0 0;
}

to {
    background-position: 0 -300px;
}
`;

export const Title = styled.h1`
  font-size: 3rem;
  font-weight: 900;
  color: ${({ theme }) => theme.colors.text_dark};
  text-transform: capitalize;
  line-height: 4.5rem;
  /* background-image: url("/assets/double_quotes.svg");
  background-position: 0 4rem;
  background-repeat: no-repeat; */
  padding: 6rem 0 10rem;
  background: url(https://res.cloudinary.com/mrphemi/image/upload/v1584628727/bubble_zlir7w.png)
    repeat;
  background-size: 300px auto;
  -webkit-text-fill-color: transparent;
  -webkit-background-clip: text;
  background-clip: text;
  animation: ${headerAnimation} 12s infinite linear;

  ${breakpoints.tabMd} {
    font-size: 5rem;
    line-height: 7rem;
  }
`;

export const ColoredText = styled.span`
  color: ${({ theme }) => theme.colors.primary};
  font-size: inherit;
`;
