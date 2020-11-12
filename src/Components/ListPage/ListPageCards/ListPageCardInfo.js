import React from "react";
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import TrashIcon from '../../../images/TrashIcon';
import HistoryIcon from '../../../images/HistoryIcon';
import TagIcon from '../../../images/TagsIcon';
import * as S from './ListPageCards.style';
import { useHistory, useRouteMatch } from "react-router-dom";

export default function ListPageCard({fieldType, fieldLabel, removeItem, index, gridTemplate, ...listPageCardInfoProps }) {
  const router = useRouteMatch();
  const history = useHistory();

  switch (fieldType) {
    case 'tags':
      return <S.ListPageCardFieldIcon tooltip="Etiqueta" name={fieldType}><TagIcon /></S.ListPageCardFieldIcon>
    case 'history':
      return <S.ListPageCardFieldIcon tooltip="Histórico" onClick={() => history.push(`${router.url}/${listPageCardInfoProps.id}`)} name={fieldType}><HistoryIcon /></S.ListPageCardFieldIcon>
    case 'delete':
      return (
        <S.ListPageCardFieldIcon tooltip="Excluir" name={fieldType} onClick={() => removeItem({ id: listPageCardInfoProps.id, index })}>
          <TrashIcon />
        </S.ListPageCardFieldIcon>
      )
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
    case 'farm':
      return (
        <S.ListPageCardField name={fieldType}>
          <S.ListPageCardFieldLabel>{fieldLabel}:</S.ListPageCardFieldLabel>
          <S.ListPageCardFieldValue>
            {listPageCardInfoProps.organizacao?.nomeFantasia}
          </S.ListPageCardFieldValue>
        </S.ListPageCardField>
      )
    case 'plan':
      return (
        <S.ListPageCardField name={fieldType}>
          <S.ListPageCardFieldLabel>{fieldLabel}:</S.ListPageCardFieldLabel>
          <S.ListPageCardFieldValue>
            {listPageCardInfoProps.plano?.nome}
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
    case 'recorrence': 
      return (
        <S.ListPageCardField name={fieldType}>
          <S.ListPageCardFieldLabel>{fieldLabel}:</S.ListPageCardFieldLabel>
          <S.ListPageCardFieldValue>{listPageCardInfoProps.recorrencia} dias</S.ListPageCardFieldValue>
        </S.ListPageCardField>
      )
    case 'status':
      return (
        <S.ListPageCardFieldStatus name={fieldType} isActive={listPageCardInfoProps.isActive}>
          <S.ListPageCardFieldStatusLabel>{fieldLabel}:</S.ListPageCardFieldStatusLabel>
          <S.ListPageCardFieldStatusValue>{listPageCardInfoProps.isActive ? 'Ativo' : 'Inativo' }</S.ListPageCardFieldStatusValue>
        </S.ListPageCardFieldStatus>
      ) 
    case 'payment':
      return (
        <S.ListPageCardField name={fieldType} isActive={listPageCardInfoProps.isActive}>
          <S.ListPageCardFieldLabel>{fieldLabel}:</S.ListPageCardFieldLabel>
          <S.ListPageCardFieldValue>{listPageCardInfoProps.pagamentoRegularizado ? 'Em dia' : 'Atrasado' }</S.ListPageCardFieldValue>
        </S.ListPageCardField>
      ) 
    case 'action':
      let variation = 'primary';
      if (listPageCardInfoProps[fieldType] === 'Corrigido') { variation = 'warning' }
      if (listPageCardInfoProps[fieldType] === 'Corrigir') { variation = 'danger' }
      return (
        <S.ListPageCardField name={fieldType} >
          <S.ListPageCardFieldLabel>{fieldLabel}:</S.ListPageCardFieldLabel>
          <S.ListPageCardFieldActionValue variation={variation} disabled={variation !== 'primary'}>
            {listPageCardInfoProps[fieldType]}
          </S.ListPageCardFieldActionValue>
        </S.ListPageCardField>
      ) 
    case 'ec':
    case 'temperature':
    case 'ph':
      let statusColor = 'brand';
      if (
        listPageCardInfoProps[fieldType] < listPageCardInfoProps[`${fieldType}Range`][0]
          || listPageCardInfoProps[fieldType] > listPageCardInfoProps[`${fieldType}Range`][1]
      ) { statusColor = 'danger' }
      return (
        <S.ListPageCardFieldMeter name={fieldType}>
          <S.ListPageCardFieldMeterLabel>{fieldLabel}:</S.ListPageCardFieldMeterLabel>
          <S.ListPageCardFieldMeterValue
            dangerValue={(
              listPageCardInfoProps[fieldType] < listPageCardInfoProps[`${fieldType}Range`][0]
                || listPageCardInfoProps[fieldType] > listPageCardInfoProps[`${fieldType}Range`][1]
            )}
          >
            {listPageCardInfoProps[fieldType]}
          </S.ListPageCardFieldMeterValue>
        </S.ListPageCardFieldMeter>
      ) 
    case 'greenery': 
      return (
        <S.ListPageCardField name={fieldType}>
          <S.ListPageCardFieldLabel>{fieldLabel}:</S.ListPageCardFieldLabel>
          <S.ListPageCardFieldValue>{listPageCardInfoProps.hortalica?.nome}</S.ListPageCardFieldValue>
        </S.ListPageCardField>
      )
    case 'greenHouse':
      return (
        <S.ListPageCardField name={fieldType}>
          <S.ListPageCardFieldLabel>{fieldLabel}:</S.ListPageCardFieldLabel>
          <S.ListPageCardFieldValue>{listPageCardInfoProps.estufa?.nome}</S.ListPageCardFieldValue>
        </S.ListPageCardField>
      )
    case 'name':
      return (
        <S.ListPageCardField name={fieldType}>
          <S.ListPageCardFieldLabel>{fieldLabel}:</S.ListPageCardFieldLabel>
          <S.ListPageCardFieldValue>{listPageCardInfoProps?.nome}</S.ListPageCardFieldValue>
        </S.ListPageCardField>
      )
    case 'fantasyName':
      return (
        <S.ListPageCardField name={fieldType}>
          <S.ListPageCardFieldLabel>{fieldLabel}:</S.ListPageCardFieldLabel>
          <S.ListPageCardFieldValue>{listPageCardInfoProps?.nomeFantasia}</S.ListPageCardFieldValue>
        </S.ListPageCardField>
      )
    case 'price':
      return (
        <S.ListPageCardField name={fieldType}>
          <S.ListPageCardFieldLabel>{fieldLabel}:</S.ListPageCardFieldLabel>
          <S.ListPageCardFieldValue>{listPageCardInfoProps?.valor}</S.ListPageCardFieldValue>
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
