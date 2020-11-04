import React, { useEffect, useState } from 'react';
import ListPage from '../../Components/ListPage';
import PlantingLotsIcon from '../../images/PlantingLotsIcon';
import * as constants from './PlantingLots.constants';
import * as S from './PlantingLots.style';

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

  const listPageObject = {
    ...constants, loading, error, page, totalPages, totalCount, list, fields: searchFields,
    setLoading, setError, setPage, setTotalPages, setTotalCount, icon: PlantingLotsIcon, setList, setFields, 
  }

  useEffect(() => {
    setList([
      { id: 1234, date: new Date(), greenHouse: 'Estufa Azul', grennery: 'Alface', harvestForecast: new Date() },
      { id: 2134, date: new Date(), greenHouse: 'Estufa Azul', grennery: 'Cebolinha', harvestForecast: new Date() },
      { id: 3124, date: new Date(), greenHouse: 'Estufa Amarela', grennery: 'Erva doce', harvestForecast: new Date() },
      { id: 4212, date: new Date(), greenHouse: 'Estufa Amarela', grennery: 'Salsinha', harvestForecast: new Date() },
      { id: 5213, date: new Date(), greenHouse: 'Estufa Amarela', grennery: 'Acelga', harvestForecast: new Date() },
      { id: 1234, date: new Date(), greenHouse: 'Estufa Azul', grennery: 'Alface', harvestForecast: new Date() },
      { id: 2134, date: new Date(), greenHouse: 'Estufa Azul', grennery: 'Cebolinha', harvestForecast: new Date() },
      { id: 3124, date: new Date(), greenHouse: 'Estufa Amarela', grennery: 'Erva doce', harvestForecast: new Date() },
      { id: 4212, date: new Date(), greenHouse: 'Estufa Amarela', grennery: 'Salsinha', harvestForecast: new Date() },
      { id: 5213, date: new Date(), greenHouse: 'Estufa Amarela', grennery: 'Acelga', harvestForecast: new Date() },
      { id: 1234, date: new Date(), greenHouse: 'Estufa Azul', grennery: 'Alface', harvestForecast: new Date() },
      { id: 2134, date: new Date(), greenHouse: 'Estufa Azul', grennery: 'Cebolinha', harvestForecast: new Date() },
      { id: 3124, date: new Date(), greenHouse: 'Estufa Amarela', grennery: 'Erva doce', harvestForecast: new Date() },
      { id: 4212, date: new Date(), greenHouse: 'Estufa Amarela', grennery: 'Salsinha', harvestForecast: new Date() },
      { id: 5213, date: new Date(), greenHouse: 'Estufa Amarela', grennery: 'Acelga', harvestForecast: new Date() },
      { id: 1234, date: new Date(), greenHouse: 'Estufa Azul', grennery: 'Alface', harvestForecast: new Date() },
      { id: 2134, date: new Date(), greenHouse: 'Estufa Azul', grennery: 'Cebolinha', harvestForecast: new Date() },
      { id: 3124, date: new Date(), greenHouse: 'Estufa Amarela', grennery: 'Erva doce', harvestForecast: new Date() },
      { id: 4212, date: new Date(), greenHouse: 'Estufa Amarela', grennery: 'Salsinha', harvestForecast: new Date() },
      { id: 5213, date: new Date(), greenHouse: 'Estufa Amarela', grennery: 'Acelga', harvestForecast: new Date() },
    ])
    setTotalPages(5);
    setTotalCount(73);
  }, [])

  return (
    <S.PlantingLots>
      <ListPage {...listPageObject} />
    </S.PlantingLots>
  );
};
