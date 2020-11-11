import React from "react";
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import TrashIcon from '../../../images/TrashIcon';
import HistoryIcon from '../../../images/HistoryIcon';
import TagIcon from '../../../images/TagsIcon';
import * as S from './ListPageCards.style';
import { useHistory, useRouteMatch } from "react-router-dom";

export default function ListPageCard({fieldType, fieldLabel, gridTemplate, ...listPageCardInfoProps }) {
  const router = useRouteMatch();
  const history = useHistory();

  switch (fieldType) {
    case 'tags':
      return <S.ListPageCardFieldIcon tooltip="Etiqueta" name={fieldType}><TagIcon /></S.ListPageCardFieldIcon>
    case 'history':
      return <S.ListPageCardFieldIcon tooltip="Histórico" onClick={() => history.push(`${router.url}/${listPageCardInfoProps.id}`)} name={fieldType}><HistoryIcon /></S.ListPageCardFieldIcon>
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
      return (
        <S.ListPageCardField name={fieldType}>
          <S.ListPageCardFieldLabel>{fieldLabel}:</S.ListPageCardFieldLabel>
          <S.ListPageCardFieldValue>
            {listPageCardInfoProps.dataPlantio}
          </S.ListPageCardFieldValue>
        </S.ListPageCardField>
      )
    case 'harvestForecast':
      return (
        <S.ListPageCardField name={fieldType}>
          <S.ListPageCardFieldLabel>{fieldLabel}:</S.ListPageCardFieldLabel>
          <S.ListPageCardFieldValue>
            {listPageCardInfoProps.previsaoColheita}
          </S.ListPageCardFieldValue>
        </S.ListPageCardField>
      )
    case 'id': 
      return (
        <S.ListPageCardFieldID name={fieldType}>
          <S.ListPageCardFieldIDLabel>{fieldLabel}:</S.ListPageCardFieldIDLabel>
          <S.ListPageCardFieldIDValue>{listPageCardInfoProps.sigla}</S.ListPageCardFieldIDValue>
        </S.ListPageCardFieldID>
      )
    case 'status':
      return (
        <S.ListPageCardFieldStatus name={fieldType} ok={listPageCardInfoProps[fieldType] === "Ok"}>
          <S.ListPageCardFieldStatusLabel>{fieldLabel}:</S.ListPageCardFieldStatusLabel>
          <S.ListPageCardFieldStatusValue>{listPageCardInfoProps[fieldType]}</S.ListPageCardFieldStatusValue>
        </S.ListPageCardFieldStatus>
      ) 
    case 'action':
      return (
        <S.ListPageCardField name={fieldType} ok={listPageCardInfoProps[fieldType] === "Ok"}>
          <S.ListPageCardFieldLabel>{fieldLabel}:</S.ListPageCardFieldLabel>
          <S.ListPageCardFieldActionValue variation="primary" disabled>{listPageCardInfoProps[fieldType]}</S.ListPageCardFieldActionValue>
        </S.ListPageCardField>
      ) 
    case 'ec':
    case 'temperature':
    case 'ph':
      return (
        <S.ListPageCardFieldMeter name={fieldType}>
          <S.ListPageCardFieldMeterLabel>{fieldLabel}:</S.ListPageCardFieldMeterLabel>
          <S.ListPageCardFieldMeterValue>{listPageCardInfoProps[fieldType]}</S.ListPageCardFieldMeterValue>
        </S.ListPageCardFieldMeter>
      ) 
    case 'greenery': 
      return (
        <S.ListPageCardField name={fieldType}>
          {console.log(listPageCardInfoProps)}
          <S.ListPageCardFieldLabel>{fieldLabel}:</S.ListPageCardFieldLabel>
          <S.ListPageCardFieldValue>{listPageCardInfoProps.hortalica.nome}</S.ListPageCardFieldValue>
        </S.ListPageCardField>
      )
    case 'greenHouse':
      return (
        <S.ListPageCardField name={fieldType}>
          <S.ListPageCardFieldLabel>{fieldLabel}:</S.ListPageCardFieldLabel>
          <S.ListPageCardFieldValue>{listPageCardInfoProps.estufa.nome}</S.ListPageCardFieldValue>
        </S.ListPageCardField>
      )
    case 'stages': 
    default: return (
      <S.ListPageCardField name={fieldType}>
        <S.ListPageCardFieldLabel>{fieldLabel}:</S.ListPageCardFieldLabel>
        <S.ListPageCardFieldValue>{listPageCardInfoProps[fieldType]}</S.ListPageCardFieldValue>
      </S.ListPageCardField>
    )
  }
}
