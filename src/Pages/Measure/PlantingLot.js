import React, { useEffect, useState } from 'react';
import ItemPage from '../../Components/ItemPage';
import PlantingLotsIcon from '../../images/PlantingLotsIcon';
import * as constants from './PlantingLot.constants';
import * as S from './PlantingLot.style';

export default function PlantingLot () {
  const { plantingLotFieldsState, plantingLotFields } = constants;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [item, setItem] = useState([]);
  const [fields, setFields] = useState(plantingLotFieldsState);
  const itemFields = plantingLotFields({fields});

  useEffect(() => {
    setItem([{id: 1234, date: new Date(), greenHouse: 'Estufa Azul', greenery: 'Alface', harvestForecast: new Date()}])
  },
  [])

  const onsubmit = () => {
  }

  const itemPageObject = {
    ...constants, loading, error, item, fields: itemFields,
    setLoading, setError, icon: PlantingLotsIcon, setItem, setFields, onsubmit
  }

  return (
    <S.PlantingLots>
      <ItemPage {...itemPageObject} />
    </S.PlantingLots>
  );
};
