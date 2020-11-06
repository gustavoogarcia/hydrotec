import styled from "styled-components";
import Select from "react-select/async-creatable";
import Input from 'react-input-mask';

export const InputText = styled(Input)`
  border: none;
  background: ${({ theme: { color: { white }}}) => white };
  color: ${({ theme: { color: { mediumGray }}}) => mediumGray };
  width: 100%;
  border-radius: 4px;
  font-size: 12px;
  padding: 4px 8px;
  resize: none;

  &:-webkit-calendar-picker-indicator {
    color: ${({ theme: { color: { mediumGray }}}) => mediumGray };
  }

  &:focus {
    outline: none;
  }

  &:disabled {
    background: ${({ theme: { color: { lightGray }}}) => lightGray};
  }
`;

export const InputSelect = styled(Select)`
  width: 100%;
  font-size: 12px;

  .inputSelect__control {
    border: none;
    min-height: unset;
    height: calc(100% + 2px);
    padding: 4px 8px;
    margin: -1px;
  }

  .inputSelect__value-container {
    padding: 0;
  }
  
  .inputSelect__control {
    padding: 2px 8px;
  }

  .inputSelect__indicator {
    padding: 0;

    svg {
      fill: ${({ theme: { color: { black }}}) => black};
    }
  }

  &:focus {
    outline: none;
  }
`

export const InputTextarea = styled.textarea`
  border: none;
  background: ${({ theme: { color: { cream }}}) => cream };
  color: ${({ theme: { color: { mediumGray }}}) => mediumGray };
  width: 100%;
  border-radius: 4px;
  font-size: 12px;
  padding: 16px 8px;
  resize: none;
`;

