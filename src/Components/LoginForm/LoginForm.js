import React from 'react';
import Field from "../Field";
import * as S from './LoginForm.style';

export default function LoginForm({ title, gridTemplate, fields, setFields }) {

  return (
    <S.LoginForm gridTemplate={gridTemplate} title={title}>
      { Object.values(fields).map((field) => <Field key={field.name} {...field} setFields={setFields} />)}
    </S.LoginForm>
  )
}
