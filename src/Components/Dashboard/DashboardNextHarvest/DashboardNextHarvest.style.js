import styled from 'styled-components';
import harvest from '../../../images/harvest.svg';

export const DashboardNextHarvest = styled.div`
  grid-area: nextHarvest;
  background: ${({ theme: { color: { cream }}}) => cream };

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
      top: 35px;
      right: 30px;
      background: url(${harvest});
      background-size: contain;
      background-repeat: no-repeat;
      margin-left: 30px;
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
      background: ${({ theme: { color: { white } }}) => white };
      
      >h1 {
        padding: 60px 60px 0px;

        &:after {
          top: 60px;
          right: 60px;
        }
      }

      >button {
        padding: 0 60px 32px;
      }
    }
  }
`

export const DashboardNextHarvestTab = styled.div`
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  @media screen {
    @media (min-width: ${({ theme: { screen: { screenLG } }}) => screenLG}) {
      padding: 32px 60px;
    }
  }
`

export const DashboardNextHarvestInfo = styled.span`
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 12px;
`

export const DashboardNextHarvestInfoLabel = styled.span`
  margin-bottom: 4px;
  font-size: 14px;
`

export const DashboardNextHarvestInfoValue = styled.span`
  min-width: 32px;
  margin-left: 8px;
  font-weight: bold;
`

export const DashboardNextHarvestInfoBar = styled.span`
  flex: 1;
  height: 30px;
  background: ${({ color }) => color }; 
`

export const DashboardNextHarvestInfoBarValue = styled.span`
  display: block;
  width: ${({ width }) => width }; 
  height: 30px;
  background: ${({ color }) => color }; 
`