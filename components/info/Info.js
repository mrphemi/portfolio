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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis harum
          vitae sequi soluta eos molestias id necessitatibus nemo ullam tempora
          laudantium voluptatum eum amet eveniet vero voluptate, a magni fugit,
          hic recusandae? Placeat, laborum officia.
          <br /> <br />
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur
          voluptatibus hic perspiciatis ex.
        </Text>

        <Text>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum in
          perferendis exercitationem laudantium. Ex vitae architecto similique
          culpa blanditiis.
        </Text>
      </TextWrapper>
    </>
  );
};

export default Info;
