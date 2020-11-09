import styled from "styled-components";

export const ItemPageForm = styled.section`
  ${({ gridTemplate }) => gridTemplate};
  position: relative;
  border: 2px solid ${({ theme: { color: { brandDark } } }) => brandDark };
  border-radius: 0 0 20px 20px;
  padding: 30px 20px 20px;
  margin: 0 20px;
  gap: 16px;
  display: grid;
  max-width: 800px;

  >div {
    border-color: ${({ theme: { color: { cream }}}) => cream };
  }

  input {
    background: ${({ theme: { color: { cream }}}) => cream };
  }

  label {
    background: ${({ theme: { color: { white }}}) => white };
  }

  .inputSelect__control {
    background: ${({ theme: { color: { cream }}}) => cream };
  }

  .react-date-picker {
    background: ${({ theme: { color: { cream }}}) => cream };
  }

  &:before {
    content: '';
    display: block;
    position: absolute;
    width: 12px;
    height: 12px;
    background: ${({ theme: { color: { brandDark } } }) => brandDark };
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
    color: ${({ theme: { color: { brandDark } } }) => brandDark };
    background: ${({ theme: { color: { white } } }) => white };
    border: 2px solid ${({ theme: { color: { brandDark } } }) => brandDark };
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

