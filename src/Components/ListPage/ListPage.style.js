import styled from "styled-components";
import { lighten, desaturate } from 'polished';

export const ListPage = styled.div`
  @media screen {
    @media (min-width: ${({ theme: { screen: { screenSM } }}) => screenSM}) {
      padding-top: 30px;
    }
  }
`;

export const ListPageSearchTitle = styled.h2`
  padding: 10px 20px;
  font-size: 18px;
  font-weight: lighter;

  @media screen {
    @media (min-width: ${({ theme: { screen: { screenMD} }}) => screenMD}) {
      padding-left: 60px;
    }
  }
`;

export const ListPageHeader = styled.h2`
  background: ${({ theme: { color: { brand } }}) => desaturate('.1',lighten('.4', brand))};
  padding: 10px 20px;
  position: sticky;
  top: 67px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 20px;
  align-items: center;

  @media screen {
    @media (min-width: ${({ theme: { screen: { screenMD} }}) => screenMD}) {
      margin: 60px 60px 20px;
    }
  }

  
`;

export const ListPageHeaderButtons = styled.h2`
  display: flex;
  gap: 16px;
`;
