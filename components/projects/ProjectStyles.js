import styled from "styled-components";

import breakpoints from "../shared/breakpoints";

import ExternalLink from "../../svgs/external-link.svg";

export const Wrapper = styled.div`
  padding: 8rem 0 0;
`;

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
  letter-spacing: 0.03rem;
  ${breakpoints.tabLg} {
    width: 80%;
  }
`;

export const ProjectsList = styled.div`
  margin-top: 4rem;
  display: grid;
  grid-row-gap: 8rem;

  ${breakpoints.tabLg} {
    grid-column-gap: 4rem;
    grid-row-gap: 6rem;
    grid-template-columns: repeat(2, 1fr);
  }
`;

export const ProjectItem = styled.div``;

export const ProjectImg = styled.img`
  border-top-left-radius: 1rem;
  border-top-right-radius: 1rem;
  width: 100%;
  box-shadow: 0 10px 15px -3px rgba(226, 232, 240, 1),
    0 4px 6px -2px rgba(226, 232, 240, 1);
`;

export const ProjectInfoWrapper = styled.div`
  padding: 2rem;
  box-shadow: 0 10px 15px -3px rgba(226, 232, 240, 1),
    0 4px 6px -2px rgba(226, 232, 240, 1);
  border-bottom-left-radius: 1rem;
  border-bottom-right-radius: 1rem;
`;

export const ProjectTitle = styled(Heading)`
  font-size: 2.5rem;
  margin-bottom: 2rem;
  ${breakpoints.tabMd} {
    font-size: 2.8rem;
  }
`;

export const ProjectDescription = styled(Text)`
  width: 100%;
  ${breakpoints.tabLg} {
    width: 80%;
  }
  ${breakpoints.tabLg} {
    width: 100%;
  }
`;

export const StackList = styled.div`
  margin-top: 2rem;
  display: flex;
  flex-wrap: wrap;
`;

export const StackItem = styled.div`
  display: flex;
  margin-right: 2rem;
`;

export const BlueCircle = styled.span`
  width: 0.8rem;
  height: 0.8rem;
  display: block;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: 50%;
  align-self: center;
`;

export const StackText = styled.span`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.text_dark};
  font-weight: 700;
  text-transform: capitalize;
  margin-left: 0.6rem;
  line-height: 2.8rem;
  letter-spacing: 0.03rem;
`;

export const ProjectCtas = styled.div`
  margin-top: 3rem;
  display: flex;
  gap: 5rem;
`;

export const Cta = styled.div`
  a {
    display: flex;
    color: inherit;
    text-decoration: none;
  }
  span {
    font-size: 1.6rem;
    text-transform: capitalize;
    font-weight: 700;
  }
`;

export const LinkIcon = styled(ExternalLink)`
  margin-left: 0.5rem;
  width: 1.4rem;
  height: 1.4rem;
  display: block;
  margin-top: 0.3rem;
`;
