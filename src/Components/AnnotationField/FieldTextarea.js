import React from 'react';
import InputTextarea from '../Input/InputTextArea';
import * as S from './Field.style';

export default function FieldTextArea({label, tip, error, errorMessage, ...props}) {
  const { name } = props;
  return (
    <S.FieldTextArea name={name}>
      { label && <S.FieldTextAreaLabel>{label}</S.FieldTextAreaLabel> }
      <InputTextarea {...props} />
    </S.FieldTextArea>
  );
}
