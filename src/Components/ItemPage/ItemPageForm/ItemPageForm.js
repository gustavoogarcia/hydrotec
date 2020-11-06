import React from 'react';
import Field from "../../Field";
import * as S from './ItemPageForm.style';

export default function ItemPageForm({ title, gridTemplate, fields, setFields }) {

  return (
    <S.ItemPageForm gridTemplate={gridTemplate} title={title}>
      { Object.values(fields).map((field) => <Field key={field.name} {...field} setFields={setFields} />)}
    </S.ItemPageForm>
  )
}
