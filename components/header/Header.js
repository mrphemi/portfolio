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
  TwitterIcon,
  InstagramIcon,
  GithubIcon,
  Wrapper
} from "./HeaderStyles";

const Home = () => {
  return (
    <>
      <Link href="/">
        <a>
          <LogoImg src="/assets/self_img.jpg" alt="my picture" />
        </a>
      </Link>
      <Wrapper>
        <SocialWrapper>
          <HorizontalLine />
          <IconsWrapper>
            <Link href="//github.com/mrphemi">
              <a>
                <GithubIcon />
              </a>
            </Link>
            <Link href="//twitter.com/mrphemi">
              <a>
                <TwitterIcon />
              </a>
            </Link>
            <Link href="//www.instagram.com/mr_phemi/">
              <a>
                <InstagramIcon />
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
