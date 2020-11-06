import styled from "styled-components";

export const ListPageForm = styled.section`
  ${({ gridTemplate }) => gridTemplate};
  background-color: ${({ theme: { color: { cream } } }) => cream };
  padding: 20px;
  gap: 16px;
  display: grid;
  
  @media (min-width: ${({ theme: { screen: { screenMD} }}) => screenMD}) {
      margin-left: 60px;
      padding-right: 60px;
      border-radius: 20px 0 0 20px;
    }
  }
`;

