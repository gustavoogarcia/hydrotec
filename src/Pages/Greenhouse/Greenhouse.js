import React, { useEffect, useState } from 'react';
import mapFieldsToData from '../../helpers/mapFieldsToData';
import http from '../../service'
import ListPage from '../../Components/ListPage';
import PlantingLotsIcon from '../../images/PlantingLotsIcon';
import * as S from './Greenhouse.style';
import * as constants from './Greenhouse.constants';

export default function Greenhouse () {
  const { greenhouseSearchFieldsState, greenhouseSearchFields } = constants;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [list, setList] = useState([]);
  const [totalPages, setTotalPages] = useState('');
  const [totalCount, setTotalCount] = useState('');
  const [fields, setFields] = useState(greenhouseSearchFieldsState);
  const searchFields = greenhouseSearchFields({fields});
  const listPageObject = {
    ...constants, loading, error, page, totalPages, totalCount, list, fields: searchFields,
    setLoading, setError, setPage, setTotalPages, setTotalCount, icon: PlantingLotsIcon, setList, setFields, 
  }

  useEffect(() => {
    const params = mapFieldsToData({fields: searchFields});
    http.get('estufa', { params })
      .then(({ data }) => setList(data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <S.Greenhouse>
      <ListPage {...listPageObject} />
    </S.Greenhouse>
  );
};
