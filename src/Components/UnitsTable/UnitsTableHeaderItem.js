import React from 'react';
import * as S from './UnitsTable.style';

export default function UnitsTableHeaderItem ({ label, name, color }) {
  switch (name) {
    case 'label':
      return <S.UnitsTableHeaderItemLabel color={color}>{label}</S.UnitsTableHeaderItemLabel>
    case 'occupationPercentage':
      return (
        <S.UnitsTableHeaderItem>
          {label}
          <S.UnitsTableHeaderItemUnits>porcentagem</S.UnitsTableHeaderItemUnits>
        </S.UnitsTableHeaderItem>
      )
    default:
      return (
        <S.UnitsTableHeaderItem>
          {label}
          <S.UnitsTableHeaderItemUnits>unidades</S.UnitsTableHeaderItemUnits>
        </S.UnitsTableHeaderItem>
      )
  }
}