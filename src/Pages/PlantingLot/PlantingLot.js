import React, { useEffect, useState } from 'react';
import http from '../../service'
import ItemPage from '../../Components/ItemPage';
import PlantingLotsIcon from '../../images/PlantingLotsIcon';
import * as S from './PlantingLot.style';
import * as constants from './PlantingLot.constants';
import { useParams } from 'react-router-dom';
import axios from 'axios';

export default function PlantingLot () {
  const { id } = useParams();
  const { plantingLotFieldsState, plantingLotFields } = constants;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [fields, setFields] = useState(plantingLotFieldsState);
  const itemFields = plantingLotFields({fields});
  let currentUser = JSON.parse(window.localStorage.getItem('currentUser'));

  useEffect(() => {
    if(id) {
      http.get(`lote-plantio/${id}`)
        .then(({ data }) => setFields({
          greenery: { value: { value: data.hortalica.id, label: data.hortalica.nome } },
          greenHouse: { value: { value: data.estufa.id, label: data.estufa.nome } },
          sector: { value: { value: data.setor.id, label: data.setor.nome } },
          stand: { value: { value: data.banca.id, label: data.banca.nome } },
          amount: { value: data.quantidade },
          from: { value: new Date(data.dataPlantio) },
          comments: { value: data.observacao },
        }))
        .catch((err) => console.log(err))
    }
  }, [id])

  const onSubmit = () => {
    axios({
      method: id ? 'post' : 'patch',
      url: 'https://dzmz3u9yic.execute-api.us-east-2.amazonaws.com/dev/lote-plantio',
      headers: { 'Authorization': `Bearer ${currentUser.access_token}` },
      data: {
        organizacaoId: currentUser.organizacaoId,
        hortalicaId: fields.greenery.value.value,
        estufaId: fields.greenHouse.value.value,
        setorId: fields.sector.value.value,
        bancaId: fields.stand.value.value,
        quantidade: fields.amount.value,
        dataPlantio: fields.from.value,
        observacao: fields.comments.value,
      }
    })
      .then(({ data }) => console.log(data))
      .catch((err) => console.log(err))
  }

  const itemPageObject = {
    ...constants, loading, error, fields: itemFields,
    setLoading, setError, icon: PlantingLotsIcon, setFields, onSubmit
  }

  return (
    <S.PlantingLots>
      <ItemPage {...itemPageObject} />
    </S.PlantingLots>
  );
};
