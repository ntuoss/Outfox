import React from 'react';
import * as PropTypes from 'prop-types';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    color: ${props => props.theme.primaryColor};
    background: ${props => props.theme.backgroundColor};
  }
  html, body {
    height: 100%;
    margin:0;
    overflow: hidden;
  }
  a {
    text-decoration: none;
    &,
    &:hover,
    &:focus,
    &:visited {
      color: ${props => props.theme.primaryColor};
      background: inherit;
      box-shadow: inherit;
    }
  }
  /* only apply in webkit */
  @media screen and (-webkit-min-device-pixel-ratio:0) { 
    .iceberx-app-container {
        color: rgba(0,0,0,0);
        text-shadow: 0 0 black;
        box-shadow: 0 1px 6px black;
        transition: color .8s;
    }
    .iceberx-app-container:hover {
       color: rgba(0,0,0,0.3);  
    }
    *::-webkit-scrollbar {
        width: 6px;
        height: 8px;
    }
    *::-webkit-scrollbar-track {
        display: none;
    }
    *::-webkit-scrollbar-thumb {
        border-radius: 3px;
        box-shadow: inset 0 0 0 3px;
        background-color: inherit;
    }
  }
`;

const theme = {
  backgroundColor: '#f2f2f2',
  primaryColor: '#3a3a3a',
  secondaryColor: '#fffe',
  highlightColor: 'DeepSkyBlue',
  hintColor: '#777',
};

const StyledTheme = ({ children }) => (
  <ThemeProvider theme={theme}>
    <>
      <GlobalStyle />
      {children}
    </>
  </ThemeProvider>
);

StyledTheme.propTypes = {
  children: PropTypes.node.isRequired,
};
export default StyledTheme;
