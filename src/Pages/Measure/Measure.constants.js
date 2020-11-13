import { css } from 'styled-components';
import http from '../../service';

export const type = 'list'
export const pageColor = '#13739e'

export const pageLabel = {
  name: 'measure',
  singular: 'controle de ec & ph',
  plural: 'controles de ec & ph',
  newLabel: 'Novo',
  editLabel: 'Editar'
};

export const measureFieldsState = () => ({
  reservatory: { value: '' },
  ec: { value: '' },
  ph: { value: '' },
  temperature: { value: '' },
  comments: { value: '' },
});

export const measureFields = ({ fields }) => ({
  reservatory: { 
    ...fields.reservatory,
    name: 'reservatory',
    label: 'Reservatório',
    placeholder: 'Digite ou selecione',
    type: 'select',
    isSearchable: true,
    loadEmpty: true,
    loadOptions: (query, callback) => http.get('caixa-dagua').then((res) => callback)
  },
  ec: { 
    ...fields.ec,
    name: 'ec',
    label: 'EC',
    placeholder: 'Digite',
    type: 'number',
  },
  ph: { 
    ...fields.ph,
    name: 'ph',
    label: 'PH',
    placeholder: 'Digite',
    type: 'number',
  },
  temperature: { 
    ...fields.temperature,
    name: 'temperature',
    label: 'Temperatura',
    placeholder: 'Digite',
    type: 'number',
  },
  comments: { 
    ...fields.comments,
    name: 'comments',
    label: 'Observações',
    placeholder: 'Insira sua observação',
    type: 'textarea',
  },
});

export const gridTemplate = css`
  grid-template: ${`
    "reservatory" 
    "ec" 
    "ph"
    "temperature"
    "comments"
  `};

  @media screen {
    @media (min-width: ${({ theme: { screen: { screenMD } }}) => screenMD}) {
      grid-template: ${`
        "reservatory reservatory reservatory" 
        "ec ph temperature"
        "comments comments comments"
      `};
      grid-template-columns: 1fr 1fr 1fr;
    }
  }
`
