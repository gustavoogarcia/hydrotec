import React from 'react';
import { inputChange } from '../../helpers/fieldFunctions';
import * as S from './Input.style';

export default function InputText({ onChange, setFields, ...props }) {
  return (
    <S.InputDate
    {...props}
    disableClock
    onChange={(value) => (onChange
        ? onChange({ target: { value, name: props.name }, setFields })
        : inputChange({ target: { value, name: props.name  }, setFields })
      )}
      maskChar=""
    />
  );
}
