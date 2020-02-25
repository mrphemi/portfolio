import React from "react";
import Link from "next/link";

import {
  ColoredText,
  Logo,
  LogoImg,
  IconsWrapper,
  Title,
  HorizontalLine,
  SocialWrapper,
  SocialIcon,
  Wrapper
} from "./HeaderStyles";

const Home = () => {
  return (
    <>
      <Logo href="/">
        <a>
          <LogoImg src="/assets/self_img.jpg" alt="my picture" />
        </a>
      </Logo>
      <Wrapper>
        <SocialWrapper>
          <HorizontalLine />
          <IconsWrapper>
            <Link href="/">
              <a>
                <SocialIcon src="/assets/github.svg" alt="github logo" />
              </a>
            </Link>
            <Link href="/">
              <a>
                <SocialIcon src="/assets/twitter.svg" alt="twitter logo" />
              </a>
            </Link>
            <Link href="/">
              <a>
                <SocialIcon src="/assets/instagram.svg" alt="instagram logo" />
              </a>
            </Link>
          </IconsWrapper>
        </SocialWrapper>
        <Title>
          hello i'm kayode <br />
          front end <ColoredText>developer</ColoredText>,
          <br />
          creator and tech enthusiast
        </Title>
      </Wrapper>
    </>
  );
};

export default Home;
