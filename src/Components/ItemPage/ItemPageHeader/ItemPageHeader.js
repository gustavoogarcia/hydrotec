import React from "react";
import * as S from './ItemPageHeader.style';

export default function ItemPageHeader({ pageLabel: { singular }, icon: Icon, pageColor }) {

  return (
    <S.ItemPageHeader color={pageColor}>
      <S.ItemPageHeaderTitle color={pageColor}>{ Icon && <Icon />}{singular}</S.ItemPageHeaderTitle>
    </S.ItemPageHeader>
  );
}
