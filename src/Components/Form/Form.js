import React from 'react';
import Field from "../Field";
import * as S from './Form.style';

export default function Form({ title, gridTemplate, fields, setFields }) {

  return (
    <S.Form gridTemplate={gridTemplate} title={title}>
      { Object.values(fields).map((field) => <Field key={field.name} {...field} setFields={setFields} />)}
    </S.Form>
  )
}
