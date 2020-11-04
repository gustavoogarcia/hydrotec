import React from 'react';
import Input from '../Input';
import * as S from './Field.style';

export default function Field({label, tip, error, errorMessage, ...props}) {
  const { name } = props;
  return (
    <S.Field name={name}>
      { label && <S.FieldLabel>{label}</S.FieldLabel> }
      <Input {...props} />
    </S.Field>
  );
}
