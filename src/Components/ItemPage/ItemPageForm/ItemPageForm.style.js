import styled from "styled-components";

export const ItemPageForm = styled.section`
  ${({ gridTemplate }) => gridTemplate};
  position: relative;
  border: 2px solid ${({ theme: { color: { brand } } }) => brand };
  border-radius: 0 0 20px 20px;
  padding: 30px 20px 20px;
  margin: 0 20px;
  gap: 16px;
  display: grid;
  max-width: 800px;

  input {
    background: ${({ theme: { color: { cream }}}) => cream };
  }

  .inputSelect__control {
    background: ${({ theme: { color: { cream }}}) => cream };
  }

  &:before {
    content: '';
    display: block;
    position: absolute;
    width: 12px;
    height: 12px;
    background: ${({ theme: { color: { brand } } }) => brand };
    border-radius: 50%;
    top: -6px;
    left: -6px;
  }

  &:after {
    content: '>';
    display: block;
    text-align: center;
    position: absolute;
    width: 20px;
    height: 20px;
    font-weight: bolder;
    color: ${({ theme: { color: { brand } } }) => brand };
    background: ${({ theme: { color: { white } } }) => white };
    border: 2px solid ${({ theme: { color: { brand } } }) => brand };
    outline: 6px solid ${({ theme: { color: { white } } }) => white };
    transform: rotate(90deg);
    border-radius: 50%;
    top: -10px;
    right: -10px;
  }
  
  @media screen {
    @media (min-width: ${({ theme: { screen: { screenMD} }}) => screenMD}) {
      margin: 0 60px;
    }
  }
`;

