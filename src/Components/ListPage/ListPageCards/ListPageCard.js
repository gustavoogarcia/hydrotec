import React from "react";
import ListPageCardInfo from './ListPageCardInfo';
import * as S from './ListPageCards.style';

export default function ListPageCard ({cardInfos, gridTemplate, ...listPageCardsProps}) {
  
  return (
    <S.ListPageCard gridTemplate={gridTemplate}>
      {Object.values(cardInfos).map((field) => (
        <ListPageCardInfo key={field.fieldValue} {...field} { ...listPageCardsProps} />
      ))}
    </S.ListPageCard>
  );
}
