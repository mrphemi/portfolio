import React from "react";

import {
  BannerWrapper,
  BannerImg,
  BannerOverlay,
  TextWrapper,
  Text,
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
          Hey there, I'm Kayode, a creative and detailed-oriented software
          developer with a passion for building state-of-the-art, user-friendly
          websites and applications. I consider myself a problem solver who
          loves taking on new and exciting challenges. I also consider myself
          flexible, as I am always open to learning new technologies and love
          learning from my colleagues and team mates.
        </Text>

        <Text>
          I am currently a student at the University of Northampton on a journey
          to acquire a masters degree in Computing. During my spare time, I've
          been studying embedded and mobile technologies (Arduino, React Native
          and Android) and I hope to incorporate any of these skills and
          knowledge in my future projects.
        </Text>
      </TextWrapper>
    </>
  );
};

export default Info;
