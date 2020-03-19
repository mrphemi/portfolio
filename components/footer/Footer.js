import React from "react";
import Link from "next/link";

import Twitter from "../../svgs/twitter.svg";
import Linkedin from "../../svgs/Linkedin.svg";

import {
  Heading,
  Text,
  MailLink,
  Wrapper,
  SocialIconsWrapper
} from "./FooterStyles";

const Footer = () => {
  return (
    <div>
      <Heading>let's create beauty together</Heading>
      <Text>
        Feel free to reach out if you're looking for a <br /> developer, have a
        question, or just want to connect.
      </Text>
      <Wrapper>
        <MailLink href="mailto:fkayode94@gmail.com">
          Fkayode94@gmail.com
        </MailLink>
        <SocialIconsWrapper>
          <Link href="//twitter.com/mrphemi">
            <a target="_blank" rel="noopener noreferrer">
              <Twitter />
            </a>
          </Link>
          <Link href="//linkedin.com/in/kayode-oluwafemi-b6918413b/">
            <a target="_blank" rel="noopener noreferrer">
              <Linkedin />
            </a>
          </Link>
        </SocialIconsWrapper>
      </Wrapper>
    </div>
  );
};

export default Footer;
