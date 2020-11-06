import React from 'react';
import Field from "../../Field";
import * as S from './ListPageForm.style';

export default function Form({ title, gridTemplate, fields, setFields }) {

  return (
    <S.ListPageForm gridTemplate={gridTemplate} title={title}>
      { Object.values(fields).map((field) => <Field key={field.name} {...field} setFields={setFields} />)}
    </S.ListPageForm>
  )
}
