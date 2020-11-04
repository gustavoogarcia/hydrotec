import React from "react";
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import TrashIcon from '../../../images/TrashIcon';
import HistoryIcon from '../../../images/HistoryIcon';
import TagIcon from '../../../images/TagsIcon';
import * as S from './ListPageCards.style';

export default function ListPageCard({fieldType, fieldLabel, gridTemplate, ...listPageCardInfoProps }) {

  switch (fieldType) {
    case 'tags':  return <S.ListPageCardFieldIcon name={fieldType}><TagIcon /></S.ListPageCardFieldIcon>
    case 'history': return <S.ListPageCardFieldIcon name={fieldType}><HistoryIcon /></S.ListPageCardFieldIcon>
    case 'delete': return <S.ListPageCardFieldIcon name={fieldType}><TrashIcon /></S.ListPageCardFieldIcon>
    case 'date': 
    case 'harvestForecast':
      return (
        <S.ListPageCardField name={fieldType}>
          <S.ListPageCardFieldLabel>{fieldLabel}:</S.ListPageCardFieldLabel>
          <S.ListPageCardFieldValue>
            {format(listPageCardInfoProps[fieldType], "dd/MM/yyyy", { locale: ptBR })}
          </S.ListPageCardFieldValue>
        </S.ListPageCardField>
      )
    case 'id': 
      return (
        <S.ListPageCardFieldID name={fieldType}>
          <S.ListPageCardFieldIDLabel>{fieldLabel}:</S.ListPageCardFieldIDLabel>
          <S.ListPageCardFieldIDValue>{listPageCardInfoProps[fieldType]}</S.ListPageCardFieldIDValue>
        </S.ListPageCardFieldID>
      )
    case 'greenHouse':
    case 'greenery': 
    case 'stages': 
    default: return (
      <S.ListPageCardField name={fieldType}>
        <S.ListPageCardFieldLabel>{fieldLabel}:</S.ListPageCardFieldLabel>
        <S.ListPageCardFieldValue>{listPageCardInfoProps[fieldType]}</S.ListPageCardFieldValue>
      </S.ListPageCardField>
    )
  }
}
