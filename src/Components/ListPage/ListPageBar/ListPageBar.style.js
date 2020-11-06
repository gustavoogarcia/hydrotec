import styled from "styled-components";
import { desaturate, lighten } from 'polished';

export const ListPageBar = styled.header`
  background: ${({ theme: { color: { brand } }}) => desaturate('.1',lighten('.4', brand))};
  padding: 10px 20px;
  position: sticky;
  z-index: 10;
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

export const ListPageBarButtons = styled.div`
  display: flex;
  width: 280px;
  justify-content: space-between;
`;