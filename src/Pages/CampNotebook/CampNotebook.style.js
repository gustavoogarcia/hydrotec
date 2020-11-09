import styled from 'styled-components';
import { darken } from 'polished';
export const CampNotebook = styled.div`
  background: white;
  min-height: 100%;
`

export const ItemPageTitle = styled.h2`
  padding: 4px 20px;
  font-size: 18px;
  font-weight: lighter;
  background: ${({ addField, theme: { color: { brand, warning, danger } }}) => {
    switch (addField) {
      case 'deficiency':
      case 'pest': return danger;
      case 'maintenance': return warning;
      default: return brand;
    }
  }};
  color: ${({ addField, theme: { color: { white, black } }}) => {
    switch (addField) {
      case 'maintenance': return black;
      default: return white;
    }
  }};
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

export const ItemPageForm = styled.section`
  ${({ gridTemplate }) => gridTemplate};
  position: relative;
  border: 2px solid ${({ addField, theme: { color: { brand, warning, danger } }}) => {
    switch (addField) {
      case 'deficiency':
      case 'pest': return danger;
      case 'maintenance': return warning;
      default: return brand;
    }
  }};
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
    background: ${({ addField, theme: { color: { brand, warning, danger } }}) => {
      switch (addField) {
        case 'deficiency':
        case 'pest': return danger;
        case 'maintenance': return warning;
        default: return brand;
      }
    }};
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
    color: ${({ addField, theme: { color: { brand, warning, danger } }}) => {
      switch (addField) {
        case 'deficiency':
        case 'pest': return danger;
        case 'maintenance': return warning;
        default: return brand;
      }
    }};
    background: ${({ theme: { color: { white } } }) => white };
    border: 2px solid ${({ addField, theme: { color: { brand, warning, danger } }}) => {
      switch (addField) {
        case 'deficiency':
        case 'pest': return danger;
        case 'maintenance': return warning;
        default: return brand;
      }
    }};    
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

export const CampNotebookAnnotationsTitle = styled.div`
  padding: 4px 20px;
  font-size: 18px;
  font-weight: lighter;
  background: ${({ addField, theme: { color: { brand, warning, danger } }}) => {
    switch (addField) {
      case 'deficiency':
      case 'pest': return danger;
      case 'maintenance': return warning;
      default: return brand;
    }
  }};
  color: ${({ addField, theme: { color: { white, black } }}) => {
    switch (addField) {
      case 'maintenance': return black;
      default: return white;
    }
  }};
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

export const CampNotebookAnnotations = styled.div`
  display: flex;
  margin: 0 20px;
  align-items: center;

  @media screen {
    @media (min-width: ${({ theme: { screen: { screenMD} }}) => screenMD}) {
      margin: 0 60px;
    }
  }
`

export const CampNotebookAnnotationsFields = styled.div`
  ${({ gridTemplate }) => gridTemplate};
  position: relative;
  flex: 1;
  background: ${({ addField, theme: { color: { brand, warning, danger } }}) => {
    switch (addField) {
      case 'deficiency':
      case 'pest': return danger;
      case 'maintenance': return warning;
      default: return brand;
    }
  }};
  border-radius: 0 0 20px 20px;
  padding: 30px 20px 20px;
  margin-right: 20px;
  gap: 16px;
  display: grid;
  max-width: 800px;

  input {
    background: ${({ theme: { color: { cream }}}) => cream };
  }

  label: {
    background: ${({ theme: { color: { white }}}) => white };
  }

  .inputSelect__control {
    background: ${({ theme: { color: { cream }}}) => cream };
  }

  .react-date-picker {
    background: ${({ theme: { color: { cream }}}) => cream };
  }
`;

export const CampNotebookAnnotationsIcon = styled.button`
  grid-area: ${({ name }) => name };
  position: relative;
  display: flex;
  justify-self: center;
  top: calc(50% - 10px);
  flex-direction: column;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  justify-content: center;
  background: ${({ theme: { color: { danger }}}) => danger };
  cursor: pointer;

  svg {
    path {
      stroke: white;
    }
  }

  &:hover {
    background: ${({ theme: { color: { danger }}}) => darken(.2, danger) };

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
      z-index: 10;
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
`