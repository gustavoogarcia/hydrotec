import React from 'react';
import ListPageHeader from './ListPageHeader';
import ListPageCards from './ListPageCards';
import ListPageBar from './ListPageBar';
import Form from '../Form';
import * as S from './ListPage.style';

export default function ListPage({ searchGridTemplate, listCardGridTemplate, ...listPageProps}) {
  const { pageLabel: { plural }  } = listPageProps;

  return (
    <S.ListPage>
      <ListPageHeader {...listPageProps} />
      <S.ListPageSearchTitle>Procure por {plural}</S.ListPageSearchTitle>
      <Form {...listPageProps} gridTemplate={searchGridTemplate} />
      <ListPageBar {...listPageProps} />
      <ListPageCards {...listPageProps} gridTemplate={listCardGridTemplate} />
    </S.ListPage>
  );
}
