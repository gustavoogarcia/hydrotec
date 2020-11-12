import React, { useEffect, useState } from 'react';
import ListPage from '../../Components/ListPage';
import * as constants from './CampNotebooks.constants';
import * as S from './CampNotebooks.style';

export default function CampNotebook () {
  const { campNotebookSearchFieldsState, campNotebookSearchFields, pageLabel: { icon } } = constants;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [list, setList] = useState([]);
  const [totalPages, setTotalPages] = useState('');
  const [totalCount, setTotalCount] = useState('');
  const [fields, setFields] = useState(campNotebookSearchFieldsState());
  const searchFields = campNotebookSearchFields({fields});

  const listPageObject = {
    ...constants, loading, error, page, totalPages, totalCount, list, fields: searchFields,
    setLoading, setError, setPage, setTotalPages, setTotalCount, icon, setList, setFields, 
  }

  useEffect(() => {
    setList([
      { id: 1234, dateAndTime: new Date(), greenHouse: 'Estufa Azul', status: 'Ok' },
      { id: 2134, dateAndTime: new Date(), greenHouse: 'Estufa Azul', status: 'Pendências' },
      { id: 3124, dateAndTime: new Date(), greenHouse: 'Estufa Amarela', status: 'Pendências' },
      { id: 4212, dateAndTime: new Date(), greenHouse: 'Estufa Amarela', status: 'Ok' },
      { id: 5213, dateAndTime: new Date(), greenHouse: 'Estufa Amarela', status: 'Ok' },
      { id: 1234, dateAndTime: new Date(), greenHouse: 'Estufa Azul',  status: 'Pendências' },
      { id: 2134, dateAndTime: new Date(), greenHouse: 'Estufa Azul', status: 'Pendências' },
      { id: 3124, dateAndTime: new Date(), greenHouse: 'Estufa Amarela', status: 'Ok' },
      { id: 4212, dateAndTime: new Date(), greenHouse: 'Estufa Amarela', status: 'Ok' },
      { id: 5213, dateAndTime: new Date(), greenHouse: 'Estufa Amarela', status: 'Ok' },
      { id: 1234, dateAndTime: new Date(), greenHouse: 'Estufa Azul',  status: 'Pendências' },
      { id: 2134, dateAndTime: new Date(), greenHouse: 'Estufa Azul', status: 'Ok' },
      { id: 3124, dateAndTime: new Date(), greenHouse: 'Estufa Amarela', status: 'Ok' },
      { id: 4212, dateAndTime: new Date(), greenHouse: 'Estufa Amarela', status: 'Ok' },
      { id: 5213, dateAndTime: new Date(), greenHouse: 'Estufa Amarela',  status: 'Ok' },
      { id: 1234, dateAndTime: new Date(), greenHouse: 'Estufa Azul',  status: 'Pendências' },
      { id: 2134, dateAndTime: new Date(), greenHouse: 'Estufa Azul', status: 'Ok' },
      { id: 3124, dateAndTime: new Date(), greenHouse: 'Estufa Amarela', status: 'Ok' },
      { id: 4212, dateAndTime: new Date(), greenHouse: 'Estufa Amarela', status: 'Pendências' },
      { id: 5213, dateAndTime: new Date(), greenHouse: 'Estufa Amarela', status: 'Pendências' },
    ])
    setTotalPages(5);
    setTotalCount(73);
  }, [])

  return (
    <S.CampNotebooks>
      <ListPage {...listPageObject} />
    </S.CampNotebooks>
  );
};
