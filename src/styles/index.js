import React from 'react';
import PropTypes from 'prop-types';
import { createGlobalStyle, ThemeProvider } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    color: ${props => props.theme.primaryColor};
    background: ${props => props.theme.backgroundColor};
    overflow: hidden;
    height: 100%;
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
