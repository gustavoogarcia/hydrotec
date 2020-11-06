import styled from "styled-components";
import { lighten } from 'polished';

export const ListPageCards = styled.div`
  padding: 0 20px 20px;
  display: grid;
  grid-template-columns: 1fr;
  gap: 12px;

  @media screen {
    @media (min-width: ${({ theme: { screen: { screenMD} }}) => screenMD}) {
      padding: 0 60px 60px;
    }
  }
`

export const ListPageCard = styled.div`
  ${({ gridTemplate }) => gridTemplate};
  display: grid;
  background: ${({ theme: { color: { lightGray }}}) => lightGray };
  border-radius: 12px;
  border: 1px solid ${({ theme: { color: { gray }}}) => lighten('.6', gray) };
  gap: 16px;
  padding: 8px 16px;
`

export const ListPageCardField = styled.div`
  grid-area: ${({ name }) => name };
`

export const ListPageCardFieldLabel = styled.div`
  margin-bottom: 4px;
  font-size: 12px;
  white-space: nowrap;
  color: ${({ theme: { color: { brandComplementarDark }}}) => brandComplementarDark };
`

export const ListPageCardFieldValue = styled.div`
`

export const ListPageCardFieldID = styled.div`
  grid-area: ${({ name }) => name };
  display: flex;
  align-items: flex-end;
  background: ${({ theme: { color: { brand }}}) => brand };
  border-radius: 12px 12px 0 0;
  margin: -8px -16px 0 -16px;
  padding: 8px;

  @media screen {
    @media (min-width: ${({ theme: { screen: { screenMD} }}) => screenMD}) {
      flex-direction: column;
      align-items: flex-start;
      border-radius: 12px;
      border-radius: 12px 0 0 12px;
      margin: -8px 0 -8px -16px;
    }
  }
`

export const ListPageCardFieldIDLabel = styled.p`
  margin-right: 8px;
  font-size: 12px;
  color: ${({ theme: { color: { white }}}) => white };
  font-weight: bold;
  white-space: nowrap;

  @media screen {
    @media (min-width: ${({ theme: { screen: { screenMD} }}) => screenMD}) {
      margin-bottom: 2px;
    }
  }
`

export const ListPageCardFieldIDValue = styled.p`
`

export const ListPageCardFieldIcon = styled.button`
  grid-area: ${({ name }) => name };
  display: flex;
  position: relative;
  justify-self: center;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;

  &:hover {
    &:after {
      content: "${({ tooltip }) => tooltip}";
      display: block;
      position: absolute;
      font-weight: bold;
      color: ${({ theme: { color: { white } }}) => white };
      top: calc(50% - 60px);
      border-radius: 4px;
      padding: 5px 8px 6px;
      background: ${({ theme: { color: { brand } }}) => brand };
    }

    &:before {
      content: "";
      display: block;
      position: absolute;
      top: calc(50% - 49px);
      height: 20px;
      width: 20px;
      background: ${({ theme: { color: { brand } }}) => brand };
      transform: rotate(45deg);
    }
  }

  @media screen {
    @media (min-width: ${({ theme: { screen: { screenMD} }}) => screenMD}) {
      
    }
  }
`