import React from "react";
import ListPageCard from './ListPageCard';
import * as S from './ListPageCards.style';

export default function ListPageCards({list, ...listPageProps}) {
  return (
    <S.ListPageCards>
      { !!list?.length && list?.map((card, index) => <ListPageCard key={card.id} {...card} {...listPageProps} index={index} />) }
    </S.ListPageCards>
  );
}
