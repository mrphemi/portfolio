import React from "react";

import { BannerWrapper, BannerImg, BannerOverlay, TextWrapper, Text } from "./InfoStyles";

const Info = () => {
	return (
		<>
			<BannerWrapper>
				<BannerImg src="/assets/coding.jpg" alt="picture of code screen" />
				<BannerOverlay></BannerOverlay>
			</BannerWrapper>
			<TextWrapper>
				<Text>
					Hey there, I'm Kayode, a creative and detailed-oriented software developer with
					a passion for building state-of-the-art, user-friendly websites and
					applications. I consider myself a problem solver who loves taking on new and
					exciting challenges.
				</Text>

				<Text>
					I've worked on a wide range of web development projects and I'm confident in my
					ability to build clean, efficient code that fulfils project specifications. As a
					software developer, I am committed to continuous learning and development.
				</Text>
			</TextWrapper>
		</>
	);
};

export default Info;
