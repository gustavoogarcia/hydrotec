import styled from 'styled-components';
import activities from '../../../images/activities.svg';

export const DashboardNextActivities = styled.div`
  grid-area: nextActivities;
  background: ${({ theme: { color: { white } }}) => white };

  >h1 {
    padding: 32px 100px 0 32px;
    display: flex;
    position: relative;

    &:after {
      content: '';
      display: block;
      height: 40px;
      width: 60px;
      position: absolute;
      top: 32px;
      right: 10px;
      background: url(${activities});
      background-size: contain;
      background-repeat: no-repeat;
    }
  }

  >button {
    padding: 0 32px 32px;
    display: flex;

    &:after {
      content: '';
      display: block;
      position: relative;
      top: 2px;
      border-top: ${({ isOpen, theme: { color: { black, danger } }}) => `1px solid ${isOpen ? danger : black}` };
      border-right: ${({ isOpen, theme: { color: { black, danger } }}) => `1px solid ${isOpen ? danger : black}` };
      transform: rotate(45deg);
      width: 12px;
      height: 12px;
      margin-left: 2px;
    }
  }

  @media screen {
    @media (min-width: ${({ theme: { screen: { screenLG } }}) => screenLG}) {
      >h1 {
        padding: 60px 60px 0px;

        &:after {
          top: 60px;
          right: 44px;
        }
      }

      >button {
        padding: 0 60px 32px;
      }
    }
  }
`

export const DashboardNextActivitiesTitle = styled.h2`

`

export const DashboardNextActivitiesValue = styled.span`
  color: ${({ theme: { color: { white }}}) => white};
  position: absolute;
  text-align: center;
  font-size: 12px;
  width: 24px;
  right: 25px;
  top: 45px;
  z-index: 2;

  @media screen {
    @media (min-width: ${({ theme: { screen: { screenLG } }}) => screenLG}) {
      right: 60px;
      top: 73px;
    }
  }
`

export const DashboardNextActivitiesTab = styled.div`
  display: grid;
  grid-gap: 32px;
  padding: 32px;

  @media screen {
    @media (min-width: ${({ theme: { screen: { screenXS } }}) => screenXS}) {
      grid-template-columns: 1fr 1fr;
    }

    @media (min-width: ${({ theme: { screen: { screenLG } }}) => screenLG}) {
      padding: 32px 60px;
    }
  }
`
export const DashboardNextActivitiesInfo = styled.div`
  display: flex;
  align-items: center;
`
export const DashboardNextActivitiesInfoLabel = styled.p`

`
export const DashboardNextActivitiesInfoValue = styled.p`
  width: 50px;
  height: 50px;
  border: ${({ color }) => `4px solid ${color}`};
  color: ${({ color }) => color };
  font-weight: bold;
  font-size: 20px;
  border-radius: 50%50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 12px;
`
