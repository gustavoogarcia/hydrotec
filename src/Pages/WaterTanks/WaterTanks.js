import React, { useEffect, useState } from 'react';
import mapFieldsToData from '../../helpers/mapFieldsToData';
import http from '../../service'
import ListPage from '../../Components/ListPage';
import PlantingLotsIcon from '../../images/PlantingLotsIcon';
import * as S from './WaterTanks.style';
import * as constants from './WaterTanks.constants';

export default function WaterTanks () {
  const { waterTanksSearchFieldsState, waterTanksSearchFields } = constants;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [list, setList] = useState([]);
  const [totalPages, setTotalPages] = useState('');
  const [totalCount, setTotalCount] = useState('');
  const [fields, setFields] = useState(waterTanksSearchFieldsState);
  const searchFields = waterTanksSearchFields({fields});
  const listPageObject = {
    ...constants, loading, error, page, totalPages, totalCount, list, fields: searchFields,
    setLoading, setError, setPage, setTotalPages, setTotalCount, icon: PlantingLotsIcon, setList, setFields, 
  }

  useEffect(() => {
    const params = mapFieldsToData({fields: searchFields});
    http.get('caixa-dagua', { params })
      .then(({ data }) => setList(data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <S.WaterTanks>
      <ListPage {...listPageObject} />
    </S.WaterTanks>
  );
};
