import React, { useEffect, useState } from 'react';
import ListPage from '../../Components/ListPage';
import MeasureIcon from '../../images/MeasureIcon';
import mapFieldsToData from '../../helpers/mapFieldsToData';
import http from '../../service'
import * as S from './Measures.style';
import * as constants from './Measures.constants';

export default function Measures () {
  const { measuresSearchFieldsState, measuresSearchFields } = constants;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [list, setList] = useState([]);
  const [totalPages, setTotalPages] = useState('');
  const [totalCount, setTotalCount] = useState('');
  const [fields, setFields] = useState(measuresSearchFieldsState);
  const searchFields = measuresSearchFields({fields});
  const listPageObject = {
    ...constants, loading, error, page, totalPages, totalCount, list, fields: searchFields,
    setLoading, setError, setPage, setTotalPages, setTotalCount, icon: MeasureIcon, setList, setFields, 
  }

  useEffect(() => {
    const params = mapFieldsToData({fields: searchFields});
    http.get('telemetria', { params })
      .then(({ data }) => setList([
        {
          id: 123,
          dateAndTime: new Date(),
          reservatory: 'Amarelo',
          ec: 450,
          ecRange: [700, 1800],
          temperature: 33,
          temperatureRange: [22, 30],
          ph: 4.3,
          phRange: [5, 7.5],
          action: 'Corrigido'
        },
        {
          id: 123,
          dateAndTime: new Date(),
          reservatory: 'Azul',
          ec: 1400,
          ecRange: [700, 1800],
          temperature: 32,
          temperatureRange: [22, 30],
          ph: 7,
          phRange: [5, 7.5],
          action: 'Corrigir'
        },
        {
          id: 123,
          dateAndTime: new Date(),
          reservatory: 'Amarelo',
          ec: 1400,
          ecRange: [700, 1800],
          temperature: 26,
          temperatureRange: [22, 30],
          ph: 7,
          phRange: [5, 7.5],
          action: 'OK'
        },
      ]))
      .catch((err) => console.log(err))
  }, [])

  return (
    <S.Measures>
      <ListPage {...listPageObject} />
    </S.Measures>
  );
};
