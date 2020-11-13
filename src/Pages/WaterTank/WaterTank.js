import React, { useEffect, useState } from 'react';
import ItemPage from '../../Components/ItemPage';
import http from '../../service'
import * as constants from './WaterTank.constants';
import * as S from './WaterTank.style';
import { useParams } from 'react-router-dom';

export default function WaterTank () {
  const { id } = useParams();
  const { waterTankFieldsState, waterTankFields } = constants;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [item, setItem] = useState([]);
  const [fields, setFields] = useState(waterTankFieldsState);
  const itemFields = waterTankFields({fields});

  useEffect(() => {
    if(id) {
      http.get(`caixa-dagua/${id}`)
        .then(({ data }) => setFields({
          name: { value: data.nome },
          capacity: { value: data.capacidade },
          ecMin: { value: data.ecMinima },
          ecMax: { value: data.ecMaxima },
          phMin: { value: data.phMinimo },
          phMax: { value: data.phMaximo },
          temperatureMin: { value: data.tempMinima },
          temperatureMax: { value: data.tempMaxima },
          nutritiveSolution: { value: { value: data.solucao.id, label: data.solucao.nome } },
        }))
        .catch((err) => console.log(err))
    }
  }, [id])

  const onSubmit = () => {
    http[id ? 'patch' : 'post'](`caixa-dagua${id ? `/${id}` : ''}`, {
      organizacaoId: '7080d758-fe8a-11ea-adc1-0242ac120002',
      nome: fields.name.value,
      capacidade: fields.capacity.value,
      ecMinima: fields.ecMin.value,
      ecMaxima: fields.ecMax.value,
      phMinimo: fields.phMin.value,
      phMaximo: fields.phMax.value,
      tempMinima: fields.temperatureMin.value,
      tempMaxima: fields.temperatureMax.value,
      solucaoId: fields.nutritiveSolution.value.value,
    })
      .then(({ data }) => console.log(data))
      .catch((err) => console.log(err))
  }

  const itemPageObject = {
    ...constants, loading, error, item, fields: itemFields,
    setLoading, setError, setItem, setFields, onSubmit
  }

  return (
    <S.WaterTank>
      <ItemPage {...itemPageObject} />
    </S.WaterTank>
  );
};
