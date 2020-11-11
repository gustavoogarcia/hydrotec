import React from 'react';
import ItemPageHeader from './ItemPageHeader';
import CancelIcon from '../../images/Delete';
import SaveIcon from '../../images/Save';
import { useParams } from 'react-router-dom';
import ItemPageForm from './ItemPageForm';
import Button from '../Button';
import * as S from './ItemPage.style';
import { useHistory } from 'react-router-dom';

export default function ItemPage(ItemPageProps) {
  const { id } = useParams();
  const history = useHistory();
  const { pageLabel: { singular, newLabel, editLabel }, children, onSubmit } = ItemPageProps;

  return (
    <S.ItemPage>
      <ItemPageHeader {...ItemPageProps} />
      <S.ItemPageTitle>{id ? editLabel : newLabel} {singular}</S.ItemPageTitle>
      <ItemPageForm {...ItemPageProps} />
      {children}
      <S.ItemPageButtons>
        <Button variation="primary" label={ id ? "Editar" : "Voltar"} rightIcon={SaveIcon} onClick={onSubmit}/>
        <Button variation="danger" label="Voltar" rightIcon={CancelIcon} onClick={() => history.goBack() } />
      </S.ItemPageButtons>
    </S.ItemPage>
  );
}
