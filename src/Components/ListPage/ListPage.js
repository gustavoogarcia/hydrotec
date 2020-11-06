import React from 'react';
import ListPageHeader from './ListPageHeader';
import ListPageCards from './ListPageCards';
import ListPageBar from './ListPageBar';
import ListPageForm from './ListPageForm';
import * as S from './ListPage.style';

export default function ListPage({ searchGridTemplate, listCardGridTemplate, ...listPageProps}) {
  const { pageLabel: { plural }  } = listPageProps;

  return (
    <S.ListPage>
      <ListPageHeader {...listPageProps} />
      <S.ListPageSearchTitle>Procure por {plural}</S.ListPageSearchTitle>
      <ListPageForm {...listPageProps} gridTemplate={searchGridTemplate} />
      <ListPageBar {...listPageProps} />
      <ListPageCards {...listPageProps} gridTemplate={listCardGridTemplate} />
    </S.ListPage>
  );
}
