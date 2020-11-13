import React, { useEffect, useState } from 'react';
import ItemPage from '../../Components/ItemPage';
import http from '../../service'
import MeasuresIcon from '../../images/MeasureIcon';
import * as constants from './Measure.constants';
import * as S from './Measure.style';
import { useParams } from 'react-router-dom';

export default function Measure () {
  const { id } = useParams();
  const { measureFieldsState, measureFields } = constants;
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [item, setItem] = useState([]);
  const [fields, setFields] = useState(measureFieldsState);
  const itemFields = measureFields({fields});

  useEffect(() => {
    if(id) {
      http.get(`lote-plantio/${id}`)
        .then(({ data }) => setFields({
          reservatory: { value: { value: data.hortalica.id, label: data.hortalica.nome } },
          ec: { value: { value: data.estufa.id, label: data.estufa.nome } },
          ph: { value: { value: data.setor.id, label: data.setor.nome } },
          temperature: { value: { value: data.banca.id, label: data.banca.nome } },
          comments: { value: data.observacao },
        }))
        .catch((err) => console.log(err))
    }
  }, [id])

  const onSubmit = () => {
    http[id ? 'patch' : 'post'](`lote-plantio${id ? `/${id}` : ''}`, {
      organizacaoId: '7080d758-fe8a-11ea-adc1-0242ac120002',
      caixaDaguaId: fields.reservatory.value.value,
      ec: fields.ec.value,
      pH: fields.ph.value,
      temperature: fields.temperature.value,
      observacao: fields.comments.value,
    })
      .then(({ data }) => console.log(data))
      .catch((err) => console.log(err))
  }

  const itemPageObject = {
    ...constants, loading, error, item, fields: itemFields,
    setLoading, setError, icon: MeasuresIcon, setItem, setFields, onsubmit
  }

  return (
    <S.Measure>
      <ItemPage {...itemPageObject} />
    </S.Measure>
  );
};
