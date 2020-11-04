import React from "react";
import { useParams, useHistory } from 'react-router-dom'
import { deburr } from "lodash";
import Button from "../Button";
import * as S from './PageHeader.style';

export default function PageHeader({ pageLabel: { plural, singular }, type, icon: Icon, pageColor }) {
  const { id } = useParams();
  const history = useHistory();
  const link = `/${deburr(plural).toLowerCase().replace(/\s/g, "-")}`;

  const title = {
    list: plural,
    unitary: `${id ? 'Edição' : 'Cadastro'} de ${singular}`,
  }
  
  const button = {
    list: { variation: "secondary", label: `Cadastrar ${singular}`, link: `${link}/novo`, type: 'link' },
    unitary: { variation: "secondary", label: `Voltar`, onClick: () => history.goBack(), type: 'link' },
  }

  return (
    <S.PageHeader color={pageColor}>
      <S.PageHeaderTitle color={pageColor}><Icon />{title[type]}</S.PageHeaderTitle>
      <Button { ...button[type] } />
    </S.PageHeader>
  );
}
