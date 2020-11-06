import React from 'react';
import { inputChange } from '../../helpers/fieldFunctions';
import * as S from './Input.style';

export default function InputTextArea({ setFields, onChange,...props}) {

  return (
    <S.InputTextarea
      {...props}
      rows={4}
      onChange={({ target }) => (onChange ? onChange({ target, setFields }) : inputChange({ target, setFields }))}
      maskChar=""
    />
  );
}
