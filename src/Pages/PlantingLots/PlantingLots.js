import React, { useEffect, useState } from 'react';
import mapFieldsToData from '../../helpers/mapFieldsToData';
import http from '../../service'
import ListPage from '../../Components/ListPage';
import PlantingLotsIcon from '../../images/PlantingLotsIcon';
import * as S from './PlantingLots.style';
import * as constants from './PlantingLots.constants';

export default function PlantingLots () {
  const { plantingLotsSearchFieldsState, plantingLotsSearchFields } = constants;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [page, setPage] = useState(1);
  const [list, setList] = useState([]);
  const [totalPages, setTotalPages] = useState('');
  const [totalCount, setTotalCount] = useState('');
  const [fields, setFields] = useState(plantingLotsSearchFieldsState);
  const searchFields = plantingLotsSearchFields({fields});

  const removeItem = ({ id, index }) => {
    http.delete(`lote-plantio/${id}`)
      .then(res => setList((oldList) => {
        const newList = [ ...oldList ];
        newList.splice(index, 1);
        return newList;
      }))
  }

  const listPageObject = {
    ...constants, loading, error, page, totalPages, totalCount, list, fields: searchFields,
    setLoading, setError, setPage, setTotalPages, setTotalCount, icon: PlantingLotsIcon, setList, setFields, removeItem
  }

  useEffect(() => {
    const params = mapFieldsToData({fields: searchFields});
    http.get('lote-plantio', { params })
      .then(({ data }) => setList(data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <S.PlantingLots>
      <ListPage {...listPageObject} />
    </S.PlantingLots>
  );
};
