import styled from 'styled-components';

export const Routes = styled.section`
  grid-area: routes;
  margin-top: 68px;

  @media screen {
    @media (min-width: ${({ theme: { screen: { screenSM } }}) => screenSM}) {
      margin-left: 300px;
    }
  }
`