import styled from "styled-components";

export const PageHeader = styled.header`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${({ color }) => color};

  >a {
    justify-self: flex-end;
    margin: 12px auto;
    max-width: 280px;
  }

  @media screen {
    @media (min-width: ${({ theme: { screen: { screenSM } }}) => screenSM}) {
      flex-direction: row;
      margin-left: 20px;
      margin-bottom: 50px;
      
      >a {
        margin: 8px 20px 8px auto;
      }
    }
  }
`;

export const PageHeaderTitle = styled.h1`
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
      padding: 8px 20px 8px 0;
      margin-right: 20px;

      >svg {
        height: 60px;
        width: 60px;
        padding: 6px;
        margin: -22px 0;
        background: ${({ color }) => color};
        margin-right: 20px;
        
        path {
          fill: ${({theme: { color: { white }}}) => white};
        }
      }
    }
  }
`