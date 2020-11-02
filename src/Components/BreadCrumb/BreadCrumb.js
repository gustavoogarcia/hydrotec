import React from 'react';
import { useHistory } from 'react-router-dom';
import * as S from './BreadCrubm.style';

export default function BreadCrumb ({ color, path = [] }) {
  const history = useHistory();

  return (
    <S.Breadcrumb>
      <S.BreadcrumbBase onClick={() => history.push('/')}>Dashboard</S.BreadcrumbBase>
      { path.map((pathItem) => <S.BreadcrumbPath color={color}>{`< detalhes ${pathItem}`}</S.BreadcrumbPath>) }
    </S.Breadcrumb>
  )
}