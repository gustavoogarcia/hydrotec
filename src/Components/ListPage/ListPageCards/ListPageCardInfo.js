import React from "react";
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import TrashIcon from '../../../images/TrashIcon';
import HistoryIcon from '../../../images/HistoryIcon';
import TagIcon from '../../../images/TagsIcon';
import * as S from './ListPageCards.style';

export default function ListPageCard({fieldType, fieldLabel, gridTemplate, ...listPageCardInfoProps }) {

  switch (fieldType) {
    case 'tags':
      return <S.ListPageCardFieldIcon tooltip="Etiqueta" name={fieldType}><TagIcon /></S.ListPageCardFieldIcon>
    case 'history':
      return <S.ListPageCardFieldIcon tooltip="Histórico" name={fieldType}><HistoryIcon /></S.ListPageCardFieldIcon>
    case 'delete':
      return <S.ListPageCardFieldIcon tooltip="Excluir" name={fieldType}><TrashIcon /></S.ListPageCardFieldIcon>
    case 'dateAndTime': 
      return (
        <S.ListPageCardField name={fieldType}>
          <S.ListPageCardFieldLabel>{fieldLabel}:</S.ListPageCardFieldLabel>
          <S.ListPageCardFieldValue>
            {format(listPageCardInfoProps[fieldType], "dd/MM/yyyy - hh:mm", { locale: ptBR })}
          </S.ListPageCardFieldValue>
        </S.ListPageCardField>
      )
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
    case 'status':
      return (
        <S.ListPageCardFieldStatus name={fieldType} ok={listPageCardInfoProps[fieldType] === "Ok"}>
          <S.ListPageCardFieldStatusLabel>{fieldLabel}:</S.ListPageCardFieldStatusLabel>
          <S.ListPageCardFieldStatusValue>{listPageCardInfoProps[fieldType]}</S.ListPageCardFieldStatusValue>
        </S.ListPageCardFieldStatus>
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
