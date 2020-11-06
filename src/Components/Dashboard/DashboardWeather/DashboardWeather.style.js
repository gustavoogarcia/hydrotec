import styled from 'styled-components';
import worldIcon from '../../../images/world.svg';
import meter from '../../../images/meter.svg';
import partlyCloud from '../../../images/partlyCloud.svg';

export const DashboardWeather = styled.div`
  background-color: ${({ theme: { color: { lightGray } } }) => lightGray };
  display: grid;
  grid-template-columns: 50% 50%;
  grid-area: dashboardWeather;

  @media screen {
    @media (min-width: ${({ theme: { screen: { screenLG } }}) => screenLG}) {
      grid-template-columns: 100%;
      background-color: ${({ theme: { color: { cream } } }) => cream };
    }
  }
`

export const DashboardWeatherTitle = styled.h1`
  display: flex;
  align-items: center;
  text-transform: uppercase;
  font-size: 16px;
  padding: 16px 32px;
  color: ${({ theme: { color: { brandComplementar } } }) => brandComplementar };

  @media screen {
    @media (min-width: ${({ theme: { screen: { screenLG } }}) => screenLG}) {
      display: none;
    }
  }
`

export const DashboardWeatherInfo = styled.div`
  margin-bottom: 8px;
`

export const DashboardWeatherInfoCity = styled.p`
  background-color: ${({ theme: { color: { brandComplementar } } }) => brandComplementar };
  text-transform: uppercase;
  font-size: 14px;
  font-weight: 700;
  color: ${({ theme: { color: { white } } }) => white };
  padding: 4px 16px;
  margin-bottom: 8px;
  display: flex;

  &:before {
    content: '';
    display: block;
    height: 14px;
    width: 14px;
    background: url(${worldIcon});
    background-size: cover;
    margin-right: 12px;
  }

  @media screen {
    @media (min-width: ${({ theme: { screen: { screenLG } }}) => screenLG}) {
      padding: 12px 60px;
      font-size: 18px;
      justify-content: center;

      &:before {
        height: 24px;
        width: 24px;
      }
    }
  }
`

export const DashboardWeatherInfoTemperature = styled.p`
  font-size: 12px;
  padding: 0 36px;
  display: flex;

  &:before {
    content: '';
    display: block;
    height: 14px;
    width: 14px;
    background: url(${meter});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: right;
    margin-right: 4px;
  }

  @media screen {
    @media (min-width: ${({ theme: { screen: { screenLG } }}) => screenLG}) {
      font-size: 16px;
      padding: 0 60px;
      justify-content: center;

      &:before {
        height: 20px;
        width: 20px;
      }
    }
  }
`

export const DashboardWeatherInfoLabel = styled.p`
  font-size: 12px;
  padding: 0 36px;
  display: flex;

  &:before {
    content: '';
    display: block;
    height: 14px;
    min-width: 12px;
    background: url(${partlyCloud});
    background-size: cover;
    background-repeat: no-repeat;
    transform: scale(1.4);
    margin-right: 6px;
  }

  @media screen {
    @media (min-width: ${({ theme: { screen: { screenLG } }}) => screenLG}) {
      font-size: 16px;
      padding: 0 60px;
      justify-content: center;

      &:before {
        height: 20px;
        width: 20px;
      }
    }
  }
`

