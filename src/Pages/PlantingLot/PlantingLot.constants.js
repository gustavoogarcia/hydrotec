import { css } from 'styled-components';

export const type = 'list'
export const pageColor = '#8bc53f'

export const pageLabel = {
  name: 'plantingLot',
  singular: 'lote de plantio',
  plural: 'lotes de plantio',
  newLabel: 'Novo',
  editLabel: 'Editar'
};

export const plantingLotFieldsState = () => ({
  grennery: { value: '' },
  greenHouse: { value: '' },
  sector: { value: '' },
  stand: { value: '' },
  amount: { value: '' },
  from: { value: '' },
  comments: { value: '' },
});

export const plantingLotFields = ({ fields }) => ({
  grennery: { 
    ...fields.grennery,
    name: 'grennery',
    label: 'Hortaliça',
    placeholder: 'Digite ou selecione',
    type: 'select',
    isSearchable: true,
  },
  greenHouse: { 
    ...fields.greenHouse,
    name: 'greenHouse',
    label: 'Estufa',
    placeholder: 'Digite ou selecione',
    type: 'select',
    isSearchable: true,
  },
  sector: { 
    ...fields.sector,
    name: 'sector',
    label: 'Setor',
    placeholder: 'Digite ou selecione',
    type: 'select',
    isSearchable: true,
  },
  stand: { 
    ...fields.stand,
    name: 'stand',
    label: 'Banca',
    placeholder: 'Digite ou selecione',
    type: 'select',
    isSearchable: true,
  },
  amount: { 
    ...fields.amount,
    name: 'amount',
    label: 'Quantidade',
    placeholder: 'Digite a quantidade',
    type: 'number',
    isSearchable: true,
  },
  from: { 
    ...fields.from,
    name: 'from',
    label: 'Data de plantio',
    type: 'date',
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
    "grennery" 
    "greenHouse" 
    "sector"
    "stand"
    "amount"
    "from"
    "comments"
  `};

  @media screen {
    @media (min-width: ${({ theme: { screen: { screenMD } }}) => screenMD}) {
      grid-template: ${`
        "grennery greenHouse" 
        "sector stand"
        "amount from"
        "comments comments"
      `};
      grid-template-columns: 1fr 1fr;
    }
  }
`
