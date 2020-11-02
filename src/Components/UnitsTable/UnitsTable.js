import React from 'react';
import TotalUnits from '../TotalUnits'; 
import UnitsTableHeaderItem from './UnitsTableHeaderItem'; 
import UnitsTableItem from './UnitsTableItem'; 
import * as S from './UnitsTable.style';

export default function UnitsTable ({ data, color, tableItems }) {
  const totalItems = data.reduce((arr, { plantedUnits }) => arr + plantedUnits, 0)

  return (
    <>
      <TotalUnits value={totalItems} color={color} />
      <S.UnitsTable gridUnits={tableItems.length}>
        { tableItems.map((info) => <UnitsTableHeaderItem { ...info } color={color} />) }
        { data.map((item) => tableItems.map((info) => <UnitsTableItem {...info} { ...item } />)) }
      </S.UnitsTable>
    </>
  )
}