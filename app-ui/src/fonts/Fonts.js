import React from "react";
import { createGlobalStyle } from "styled-components";
import { Helmet } from "react-helmet";

const Fonts = createGlobalStyle`
  body {
    font-family: 'Quicksand', sans-serif;
  }
`;

const FontLoader = () => (
  <Helmet>
    <link
      href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css2?family=Libre+Barcode+128+Text&display=swap"
      rel="stylesheet"
    />
  </Helmet>
);

export { Fonts, FontLoader };
