import React from 'react';
import PageHeader from '../PageHeader';
import PageListCards from './ListPageCards';
import ListPageHeader from './ListPageHeader';
import Form from '../Form';
import * as S from './ListPage.style';

export default function ListPage({ searchGridTemplate, listCardGridTemplate, ...listPageProps}) {
  const { pageLabel: { plural }  } = listPageProps;

  return (
    <S.ListPage>
      <PageHeader {...listPageProps} />
      <S.ListPageSearchTitle>Procure por {plural}</S.ListPageSearchTitle>
      <Form {...listPageProps} gridTemplate={searchGridTemplate} />
      <ListPageHeader {...listPageProps} />
      <PageListCards {...listPageProps} gridTemplate={listCardGridTemplate} />
    </S.ListPage>
  );
}
