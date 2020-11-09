import React from 'react';
import { inputChange } from '../../helpers/fieldFunctions';
import * as S from './Input.style';

export default function InputText({ onChange, setFields, type, ...props }) {
  const { name, value: oldValue } = props;
  return (
    <S.InputNumber
      {...props}
      onValueChange={({value}) => {
        return (onChange
          ? onChange({ target: { value, name }, setFields })
          : inputChange({ target: { value, name }, setFields })
        )
    }}
      maskChar=""
    />
  );
}
