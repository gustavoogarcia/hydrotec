import styled from "styled-components";
import Select from "react-select/async-creatable";
import Input from 'react-input-mask';
import DatePicker from 'react-date-picker';
import NumberFormat from 'react-number-format';

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
`;

export const InputNumber = styled(NumberFormat)`
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

  .inputSelect__menu {
    z-index: 20;
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

export const InputDate = styled(DatePicker)`
  background: ${({ theme: { color: { white }}}) => white };
  color: ${({ theme: { color: { mediumGray }}}) => mediumGray };
  width: 100%;
  border-radius: 4px;
  font-size: 12px;
  padding: 0px 8px;
  resize: none;

  .react-date-picker__wrapper {
    border: none;
  }

  .react-date-picker__calendar-button {
    padding: 0;

    svg {
      height: 15px;
    }
  }
`;

