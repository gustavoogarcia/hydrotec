import { css } from 'styled-components';
import http from '../../service';

export const type = 'list'
export const pageColor = '#13739e'

export const pageLabel = {
  name: 'waterTank',
  singular: `caixa d'agua`,
  plural: `caixas d'agua`,
  newLabel: 'Novo',
  editLabel: 'Editar'
};

export const waterTankFieldsState = () => ({
  name: { value: '' },
  capacity: { value: '' },
  ecMin: { value: '' },
  ecMax: { value: '' },
  phMin: { value: '' },
  phMax: { value: '' },
  temperatureMin: { value: '' },
  temperatureMax: { value: '' },
  nutritiveSolution: { value: '' },
});

export const waterTankFields = ({ fields }) => ({
  name: { 
    ...fields.name,
    name: 'name',
    label: 'Nome',
    placeholder: 'Digite',
  },
  capacity: { 
    ...fields.capacity,
    name: 'capacity',
    label: 'Capacidade',
    placeholder: 'Digite',
    type: 'number',
  },
  ecMin: { 
    ...fields.ecMin,
    name: 'ecMin',
    label: 'EC minimo',
    placeholder: 'Digite',
    type: 'number',
  },
  ecMax: { 
    ...fields.ecMax,
    name: 'ecMax',
    label: 'EC máximo',
    placeholder: 'Digite',
    type: 'number',
  },
  phMin: { 
    ...fields.phMin,
    name: 'phMin',
    label: 'PH minimo',
    placeholder: 'Digite',
    type: 'number',
  },
  phMax: { 
    ...fields.phMax,
    name: 'phMax',
    label: 'PH Maximo',
    placeholder: 'Digite',
    type: 'number',
  },
  temperatureMin: { 
    ...fields.temperatureMin,
    name: 'temperatureMin',
    label: 'Temperatura minima',
    placeholder: 'Digite',
    type: 'number',
  },
  temperatureMax: { 
    ...fields.temperatureMax,
    name: 'temperatureMax',
    label: 'Temperatura maxima',
    placeholder: 'Digite',
    type: 'number',
  },
  nutritiveSolution: { 
    ...fields.nutritiveSolution,
    name: 'nutritiveSolution',
    label: 'Solução nutritiva',
    placeholder: 'Digite ou selecione',
    type: 'select',
    loadEmpty: true,
    isSearchable: false,
    loadOptions: (query, callback) => {
      http.get('solucao-nutritiva')
        .then(({data}) => callback(data.map((option) => ({ ...option, label: option.nome, value: option.id }))))
    }
  },
});

export const gridTemplate = css`
  grid-template: ${`
    "name" 
    "capacity" 
    "ecMin" 
    "ecMax" 
    "phMin"
    "phMax"
    "temperatureMin"
    "temperatureMax"
    "nutritiveSolution"
  `};

  @media screen {
    @media (min-width: ${({ theme: { screen: { screenMD } }}) => screenMD}) {
      grid-template: ${`
        "name capacity" 
        "ecMin ecMax" 
        "phMin phMax"
        "temperatureMin temperatureMax"
        "nutritiveSolution nutritiveSolution"
      `};
      grid-template-columns: 1fr 1fr;
    }
  }
`
