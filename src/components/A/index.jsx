import styled from 'styled-components';

const A = styled.a`
  &,
  &:hover,
  &:focus,
  &:visited {
    color: ${props => props.theme.primaryColor};
    background: inherit;
    box-shadow: inherit;
  }
`;

export default A;
