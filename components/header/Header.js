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
	LinkedInIcon,
	GithubIcon,
	Wrapper,
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
							<a target="_blank" rel="noopener noreferrer">
								<GithubIcon />
							</a>
						</Link>
						<Link href="//linkedin.com/in/kayode-oluwafemi-b6918413b/">
							<a target="_blank" rel="noopener noreferrer">
								<LinkedInIcon />
							</a>
						</Link>
					</IconsWrapper>
				</SocialWrapper>
				<Title>
					hello, i'm Femi <br />
					software <ColoredText>developer</ColoredText>,
					<br />
					Frontend Developer.
				</Title>
			</Wrapper>
		</>
	);
};

export default Home;
