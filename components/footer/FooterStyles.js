import styled from "styled-components";

import breakpoints from "../shared/breakpoints";

export const Heading = styled.h2`
  font-size: 3.3rem;
  font-weight: 900;
  line-height: 4.3rem;
  text-transform: capitalize;
  margin-bottom: 4rem;

  ${breakpoints.tabMd} {
    font-size: 4rem;
  }
`;

export const Text = styled.p`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.text};
  line-height: 2.8rem;
  word-spacing: 0.3rem;
  letter-spacing: 0.03rem;
  margin-bottom: 4rem;
  ${breakpoints.tabLg} {
    width: 80%;
  }
  ${breakpoints.desktop} {
    width: 50%;
  }
`;

export const MailLink = styled.a`
  font-size: 1.6rem;
  color: ${({ theme }) => theme.colors.text_dark};
  line-height: 2.8rem;
  word-spacing: 0.3rem;
  letter-spacing: 0.03rem;
  padding-bottom: 0.3rem;
  font-weight: 700;
  text-decoration: none;
  border-bottom: 1px solid ${({ theme }) => theme.colors.text_dark};

  &:hover {
    border: 0;
  }
`;
