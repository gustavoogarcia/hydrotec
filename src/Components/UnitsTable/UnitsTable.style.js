import styled from 'styled-components';
import {lighten} from 'polished'

export const UnitsTable = styled.div`
  display: grid;
  grid-template-columns: ${({ gridUnits }) => `repeat(${gridUnits}, auto)`};
  max-width: 780px;
`

export const UnitsTableHeaderItem = styled.div`
  font-size: 10px;
  text-transform: uppercase;
  font-weight: bold;
  padding: 0 4px;
  display: flex;
  flex-direction: column;
  border-left: 1px solid ${({ theme: { color: { mediumGray } } }) => lighten('.4', mediumGray)};

  @media screen {
    @media (min-width: ${({ theme: { screen: { screenXS } }}) => screenXS}) {
      padding: 0 16px;
      font-size: 12px;
    }
  }
`

export const UnitsTableHeaderItemUnits = styled.div`
  text-transform: initial;  
  font-weight: lighter;
  margin-bottom: 4px;

  @media screen {
    @media (min-width: ${({ theme: { screen: { screenXS } }}) => screenXS}) {
      margin-top: 4px;
      margin-bottom: 16px;
    }
  }
`

export const UnitsTableHeaderItemLabel = styled.p`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 10px;
  font-weight: bold;
  padding: 0 0 0 8px;
  border-radius: 50px;
  background: ${({ theme: { color: { gray } } }) => gray};
  color: ${({ theme: { color: { white } } }) => white};
  height: 18px;
  
  &:after {
    content: '';
    display: block;
    width: 100%;
    min-width: 18px;
    max-width: 30px;
    height: 18px;
    background: ${({ color }) => color};
    border-radius: 50px;
    margin-left: 10px;
  }

  @media screen {
    @media (min-width: ${({ theme: { screen: { screenXS } }}) => screenXS}) {
      font-size: 16px;
      padding: 0 0 0 12px;
      height: 28px;

      &:after {
        min-width: 28px;
        height: 28px;
      }
    }
  }
`

export const UnitsTableItem = styled.div`
  font-size: 10px;
  font-weight: bold;
  padding: 4px;
  text-align: center;
  border-top: 1px solid ${({ theme: { color: { mediumGray } } }) => lighten('.4', mediumGray)};
  border-left: 1px solid ${({ theme: { color: { mediumGray } } }) => lighten('.4', mediumGray)};

  @media screen {
    @media (min-width: ${({ theme: { screen: { screenXS } }}) => screenXS}) {
      padding: 12px;
      font-size: 12px;
    }
  }
`

export const UnitsTableItemLabel = styled.div`
  font-size: 10px;
  font-weight: ligher;
  padding: 4px;
  border-top: 1px solid ${({ theme: { color: { mediumGray } } }) => lighten('.4', mediumGray)};

  @media screen {
    @media (min-width: ${({ theme: { screen: { screenXS } }}) => screenXS}) {
      padding: 12px;
      font-size: 12px;

    }
  }
`