import styled from 'styled-components';

export const DashboardCard = styled.div`
  background: ${({color}) => color};
  border-radius: 12px;
  position: relative;
`

export const DashboardCardTitle = styled.h2`
  background-color: #f7f1ee;
  font-size: 14px;
  font-weight: 600;
  padding: 6px 16px 8px;
  border-radius: 12px 12px 0 0;
  margin: 0;
  border: ${({color}) => `3px solid ${color}`};
`

export const DashboardCardCall = styled.button`
  display: pointer;
  position: absolute;
  background-color: black;
  border: none;
  color: white;
  text-transform: uppercase;
  border-radius: 20px 20px 0 0;
  padding: 16px 16px 14px;
  font-size: 10px;
  top: -8px;
  right: 0;
  display: flex;
  cursor: pointer;
  border: none;
  outline:none;

  &:after {
    content: '';
    display: block;
    border-top: ${({color}) => `2px solid ${color}`};
    border-right: ${({color}) => `2px solid ${color}`};
    transform: rotate(45deg);
    width: 10px;
    height: 10px;
    margin-left: 4px;
  }
`

export const DashboardCardUnits = styled.p`
  margin: 0;
  color: white;
  text-transform: uppercase;
  font-size: 14px;
  padding: 4px 16px 0;
  font-weight: 300;
`

export const DashboardCardUnitsValue = styled.p`
  margin: 0;
  color: white;
  text-transform: uppercase;
  font-size: 32px;
  padding: 0 16px 8px;
  font-weight: 300;
`

export const DashboardCardIcon = styled.div`
  position: absolute;
  bottom: 10px;
  right: 0;

  svg {
    height: 40px;
    width: 120px;
  }
`
