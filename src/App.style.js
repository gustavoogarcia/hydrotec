import styled from 'styled-components';

export const App = styled.div`
  display: grid;
  grid-template-areas: 
    "header"
    "routes";

  @media screen {
    @media (min-width: ${({ theme: { screen: { screenSM } }}) => screenSM}) {
      grid-template-areas: 
        "header header"
        "headerNav routes";
      grid-template-columns: min-content 1fr;
    }
  }
`