import React from "react";
import styled from "styled-components";
import Head from "next/head";

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
    <Head>
      <title>Kayode Oluwafemi</title>
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link rel="manifest" href="/site.webmanifest" />
    </Head>
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
