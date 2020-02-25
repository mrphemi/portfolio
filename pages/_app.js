import App from "next/app";
import React from "react";
import { ThemeProvider } from "styled-components";

import "../styles.css";

const theme = {
  colors: {
    primary: "#81e6d9",
    text: "#718096",
    text_dark: "#2d3748"
  }
};

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    );
  }
}
