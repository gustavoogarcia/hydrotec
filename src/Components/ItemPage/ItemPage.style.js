import styled from "styled-components";
import { lighten, desaturate } from 'polished';

export const ItemPage = styled.div`

  @media screen {
    @media (min-width: ${({ theme: { screen: { screenSM } }}) => screenSM}) {
      padding-top: 30px;
    }
  }
`;

export const ItemPageTitle = styled.h2`
  padding: 4px 20px;
  font-size: 18px;
  font-weight: lighter;
  background: ${({ theme: { color: { brandComplementarGradient } }}) => brandComplementarGradient};
  color: ${({ theme: { color: { gray } } }) => gray };
  border-radius: 20px;
  position: relative;
  top: 15px;
  left: 45px;
  z-index: 10;
  display: inline-block;

  @media screen {
    @media (min-width: ${({ theme: { screen: { screenMD} }}) => screenMD}) {
      left: 85px;
    }
  }
`;

export const ItemPageHeader = styled.header`
  background: ${({ theme: { color: { brand } }}) => desaturate('.1',lighten('.4', brand))};
  padding: 10px 20px;
  position: sticky;
  top: 67px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 20px;
  align-items: center;
  font-size: 22px;

  @media screen {
    @media (min-width: ${({ theme: { screen: { screenMD} }}) => screenMD}) {
      margin: 60px 60px 20px;
    }
  }
`;

export const ItemPageHeaderButtons = styled.div`
  display: flex;
  gap: 16px;
`;

export const ItemPageButtons = styled.div`
  display: grid;
  grid-template-columns: 140px 140px;
  padding: 20px;
  gap: 20px;

  @media screen {
    @media (min-width: ${({ theme: { screen: { screenMD} }}) => screenMD}) {
      margin: 20px 40px;
    }
  }
`