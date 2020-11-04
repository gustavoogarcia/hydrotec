import styled from 'styled-components';

export const App = styled.div`
  display: grid;
  min-height: 100vh;
  grid-template-rows: 68px auto;
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