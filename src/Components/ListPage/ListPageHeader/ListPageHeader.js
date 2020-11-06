import React from "react";
import { deburr } from "lodash";
import Button from "../../Button";
import * as S from './ListPageHeader.style';

export default function ListPageHeader({ pageLabel: { plural, singular }, type, icon: Icon, pageColor }) {
  const link = `/${deburr(plural).toLowerCase().replace(/\s/g, "-")}`;
  const button = { variation: "secondary", label: `Cadastrar ${singular}`, link: `${link}/novo`, type: 'link' };

  return (
    <S.ListPageHeader color={pageColor}>
      <S.ListPageHeaderTitle color={pageColor}><Icon />{plural}</S.ListPageHeaderTitle>
      <Button { ...button } />
    </S.ListPageHeader>
  );
}
