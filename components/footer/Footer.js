import React from "react";
import Link from "next/link";

import { Heading, Text, MailLink, Wrapper, FooterLogo } from "./FooterStyles";

const Footer = () => {
  return (
    <div>
      <Heading>let's create beauty together</Heading>
      <Text>
        Feel free to reach out if you're looking for a <br /> developer, have a
        question, or just want to connect.
      </Text>
      <MailLink href="mailto:fkayode94@gmail.com">Fkayode94@gmail.com</MailLink>
    </div>
  );
};

export default Footer;
