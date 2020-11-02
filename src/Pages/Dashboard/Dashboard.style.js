import styled from 'styled-components';

export const Dashboard = styled.div`
  @media screen {
    @media (min-width: ${({ theme: { screen: { screenLG } }}) => screenLG}) {
      display: grid;
      grid-template-areas: 
        "dashboardIndicators nextActivities dashboardWeather"
        "dashboardIndicators nextActivities dashboardOccupation"
        "dashboardIndicators nextHarvest dashboardOccupation"
        ;
      grid-template-columns: 1fr 1.4fr 1fr;
    }
  }
`
