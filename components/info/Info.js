import React from "react";

import {
  BannerWrapper,
  BannerImg,
  BannerOverlay,
  TextWrapper,
  Text
} from "./InfoStyles";

const Info = () => {
  return (
    <>
      <BannerWrapper>
        <BannerImg src="/assets/coding.jpg" alt="picture of code screen" />
        <BannerOverlay></BannerOverlay>
      </BannerWrapper>
      <TextWrapper>
        <Text>
          Hey, I'm Kayode, a creative and detailed-oriented front end developer
          with passion for building state-of-the-art, user-friendly websites and
          applications.
        </Text>

        <Text>
          I love learning new and exciting things and improving my craft but
          most of all, I'm a person who likes to have fun. I also enjoy watching
          football and listening to good music. I also love watching anime and
          playing video games.
        </Text>
      </TextWrapper>
    </>
  );
};

export default Info;
