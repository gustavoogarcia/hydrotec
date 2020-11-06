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

