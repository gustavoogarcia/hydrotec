import React from 'react';
import * as S from './UnitsTable.style';

export default function UnitsTableHeaderItem (props) {
  const { name } = props;

  switch (name) {
    case 'label':
      return <S.UnitsTableItemLabel>{props[name]}</S.UnitsTableItemLabel>
    case 'occupationPercentage':
      return <S.UnitsTableItem>{props[name]}%</S.UnitsTableItem>
    default:
      return <S.UnitsTableItem>{props[name] ? props[name] : '-'}</S.UnitsTableItem>
  }
}