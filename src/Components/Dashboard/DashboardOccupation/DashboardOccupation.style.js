import styled from 'styled-components';
import occupation from '../../../images/occupation.svg';

export const DashboardOccupation = styled.div`
  grid-area: dashboardOccupation;

  >h1 {
    padding: 32px 120px 0 32px;
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
      background: url(${occupation});
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
      background: ${({ theme: { color: { cream } } }) => cream };
      padding: 12px 30px;
    }
  }
`

export const DashboardOccupationList = styled.div`
  padding: 32px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
export const DashboardOccupationTotalValue = styled.div`
  font-size: 36px;
  font-weight: bold;
  margin: 8px 30px;
  color: ${({ theme: { color: { brandComplementarDark } } }) => brandComplementarDark }
`

export const DashboardOccupationInfo = styled.span`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 12px;
  padding-bottom: 12px;
  border-bottom: ${({ theme: { color: { brandComplementarDark } } }) => `3px solid ${brandComplementarDark}` }

`

export const DashboardOccupationInfoLabel = styled.span`
  margin-bottom: 4px;
  font-size: 18px;
`

export const DashboardOccupationInfoValue = styled.span`
  min-width: 32px;
  margin-left: 8px;
  font-weight: bold;
  color: ${({ theme: { color: { brandComplementarDark } } }) => brandComplementarDark }
`

export const DashboardOccupationInfoBar = styled.span`
  flex: 1;
  height: 30px;
  background: ${({ color }) => color }; 
`

export const DashboardOccupationInfoBarValue = styled.span`
  display: block;
  width: ${({ width }) => width }; 
  height: 30px;
  background: ${({ color }) => color }; 
`