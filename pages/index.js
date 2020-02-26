import React from "react";
import styled from "styled-components";

import Header from "../components/header/Header";
import Info from "../components/info/Info";
import Skills from "../components/skills/Skills";
import Projects from "../components/projects/Projects";
import Footer from "../components/footer/Footer";

import ContentContainer from "../components/layouts/Container";

export const Container = styled(ContentContainer)`
  padding: 8rem 0;
`;

export const ContainerGray = styled.div`
  background-color: rgb(252, 252, 252);
`;

export default () => (
  <>
    <Container>
      <Header />
      <Info />
      <Skills />
      <Projects />
    </Container>
    <ContainerGray>
      <Container>
        <Footer />
      </Container>
    </ContainerGray>
  </>
);
