import styled from 'styled-components';

export const DashboardTabs = styled.div`

`

export const DashboardTabsHeader = styled.ul`
  display: flex;
  padding: 10px 32px;

  @media screen {
    @media (min-width: ${({ theme: { screen: { screenLG } }}) => screenLG}) {
      padding: 10px 60px;
    }
  }
`

export const DashboardTabsHeaderItem = styled.li`
  border: ${({ color }) => `1px solid ${color}` };
  color: ${({ color, isActive, theme: { color: { white } } }) => isActive ? white : color };
  background: ${({ color, isActive, theme: { color: { white } } }) => isActive ? color : 'transparent' };
  width: 68px;
  font-weight: bold;
  text-align: center;
  border-radius: 20px;
  padding: 4px 10px;
  font-size: 12px;
  margin-right: 10px;
  cursor: pointer;

  &:hover {
    background: ${({ color }) => color };
    color: ${({ theme: { color: { white } }}) => white };
  }
`

export const DashboardTabsComponent = styled.div`

`