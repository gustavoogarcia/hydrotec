import styled from 'styled-components';

export const DashboardIndicators = styled.div`
  grid-area: dashboardIndicators;
  background: ${({ theme: { color: { white } }}) => white };
  
  >h1 {
    padding: 12px 32px;
  }

  @media screen {
    @media (min-width: ${({ theme: { screen: { screenLG } }}) => screenLG}) {
      >h1 {
        padding: 60px 60px 20px;
      }
    }
  }
`

export const DashboardIndicatorsCards = styled.div`
  background: ${({ theme: { color: { cream } }}) => cream };
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 32px;
  padding: 32px;

  @media screen {
    @media (min-width: ${({ theme: { screen: { screenXS } }}) => screenXS}) {
      grid-template-columns: 1fr 1fr;
    }

    @media (min-width: ${({ theme: { screen: { screenLG } }}) => screenLG}) {
      background: initial;
      padding: 30px 60px;
      grid-gap: 60px;
      grid-template-columns: 1fr;
    }
  }
`