import styled from "styled-components";

export const ItemPageHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;

  @media screen {
    @media (min-width: ${({ theme: { screen: { screenSM } }}) => screenSM}) {
      margin-bottom: 50px;
      padding: 10px 30px;
    }

    @media (min-width: ${({ theme: { screen: { screenMD } }}) => screenMD}) {
      margin-bottom: 20px;
      padding: 10px 50px;
    }
  }
`;

export const ItemPageHeaderTitle = styled.h1`
  background: white;
  text-transform: capitalize;
  font-size: 20px;
  display: flex;
  align-items: center;

  >svg {
    height: 40px;
    width: 40px;
    padding: 6px;
    background: ${({theme: { color: { white }}}) => white};
    
    path {
      fill: ${({ color }) => color};
    }
  }
  
  @media screen {
    @media (min-width: ${({ theme: { screen: { screenSM } }}) => screenSM}) {
      
      >svg {
        height: 60px;
        width: 60px;
        margin-right: 10px;
      }
    }
  }
`