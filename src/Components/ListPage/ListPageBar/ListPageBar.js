import React from 'react';
import Button from '../../Button';
import Right from '../../../images/Right';
import Left from '../../../images/Left';
import First from '../../../images/First';
import Last from '../../../images/Last';
import * as S from './ListPageBar.style';

export default function ListPageBar({ page, setPage, totalPages, totalCount, pageLabel}) {
  return (
    <>
      <S.ListPageBar>
        Encontrado {totalCount} {totalCount === 1 ? pageLabel.singular : pageLabel.plural}
        <S.ListPageBarButtons>
          <Button variation="bigIcon" icon={First} disabled={page === 1} label="Primeira" onClick={() => setPage(1)} />
          <Button variation="bigIcon" icon={Left} disabled={page === 1} label="Anterior" onClick={() => setPage(page - 1)} />
          <Button variation="bigIcon" icon={Right} disabled={page === totalPages} label="Próxima" onClick={() => setPage(page + 1)} />
          <Button variation="bigIcon" icon={Last} disabled={page === totalPages} label="Última" onClick={() => setPage(totalPages)} />
        </S.ListPageBarButtons>
      </S.ListPageBar>
    </>
  )
}