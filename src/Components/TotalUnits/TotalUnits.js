import React from 'react';
import * as S from './TotalUnits.style';

export default function TotalUnits ({ value, color }) {

  return (
    <S.TotalUnits color={color}>
      Quantidade total
      <S.TotalUnitsValue>{value}</S.TotalUnitsValue>
      unidades
    </S.TotalUnits>
  )
}