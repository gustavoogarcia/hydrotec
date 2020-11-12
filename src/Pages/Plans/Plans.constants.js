import SearchIcon from '../../images/SearchIcon';
import GeneratePDFIcon from '../../images/DownloadIcon';
import exportCSVIcon from '../../images/ExportIcon';
import { css } from 'styled-components';

export const type = 'list'
export const pageColor = '#8bc53f'
export const pageLabel = {
  name: 'plans',
  singular: 'plano',
  plural: 'planos'
};

export const plansSearchFieldsState = () => ({
  name: { value: '' },
  recurrence: { value: '' },
  sortBy: { value: { label: 'Data ↓', value: 'dataDsc' } },
  limit: { value: { label: '20', value: 20 } },
});

export const plansSearchFields = ({ fields }) => ({
  name: {
    ...fields.name,
    name: 'name',
    label: 'Nome do plano',
    placeholder: 'Digite',

  },
  recurrence: { 
    ...fields.recurrence,
    name: 'recurrence',
    label: 'Recorrência',
    placeholder: 'Selecione',
    type: 'select',
    options: [
      { label: '30 dias', value: 30 }, 
      { label: 'Semestral', value: 180 }, 
      { label: 'Anual', value: 365 }, 
    ],
    isClearable: true,
  },
  sortBy: { 
    ...fields.sortBy,
    name: 'sortBy',
    label: 'Ordenar por',
    type: 'select',
    options: [
      { label: 'Data ↓', value: 'dateDsc' }, 
      { label: 'Data ↑', value: 'dateAsc' }, 
      { label: 'Nome ↓', value: 'nameDsc' }, 
      { label: 'Nome ↑', value: 'nameAsc' }, 
    ],
  },
  limit: { 
    ...fields.limit,
    name: 'limit',
    label: 'Itens por página',
    type: 'select',
    options: [
      { label: '10', value: 10 }, 
      { label: '20', value: 20 }, 
      { label: '50', value: 50 }, 
      { label: '100', value: 100 }, 
    ],
  },
  submitButton: { 
    name: 'submitButton',
    label: 'Pesquisar',
    type: 'button',
    variation: 'primary',
    rightIcon: SearchIcon 
  },
  generatePDF: { 
    name: 'generatePDF',
    label: 'Gerar PDF',
    type: 'button',
    variation: 'danger',
    rightIcon: GeneratePDFIcon ,
  },
  exportCSV: { 
    name: 'exportCSV',
    label: 'Exportar CSV',
    type: 'button',
    variation: 'warning',
    rightIcon: exportCSVIcon 
  },
});

export const cardInfos = [
  { fieldLabel: 'Nome do Plano', fieldType: 'name' },
  { fieldLabel: 'Preço', fieldType: 'price' },
  { fieldLabel: 'Recorrência', fieldType: 'recorrence' },
  { fieldLabel: 'Status', fieldType: 'status' },
  { fieldLabel: '', fieldType: 'history' },
  { fieldLabel: '', fieldType: 'delete' },
]

export const searchGridTemplate = css`
  grid-template: ${`
    "name"
    "recurrence"
    "sortBy"
    "limit"
    "submitButton"
    "generatePDF"
    "exportCSV"
  `};

  @media screen {
    @media (min-width: ${({ theme: { screen: { screenXS } }}) => screenXS}) {
      grid-template: ${`
        "name recurrence"
        "sortBy limit"
        "submitButton submitButton" 
        "generatePDF exportCSV"
      `};
      grid-template-columns: 1fr 1fr;
    }

    @media (min-width: ${({ theme: { screen: { screenMD } }}) => screenMD }) {
      grid-template:
        "name name name name recurrence recurrence recurrence . . . . ."
        "sortBy sortBy sortBy limit limit . . . . . . ."
        "submitButton submitButton submitButton submitButton generatePDF generatePDF generatePDF generatePDF exportCSV exportCSV exportCSV exportCSV "
      ;
      grid-template-columns: repeat(12, ifr);
    }
    
    @media (min-width: ${({ theme: { screen: { screenLG } }}) => screenLG }) {
      grid-template:
        "name name name name recurrence recurrence recurrence sortBy sortBy sortBy limit limit"
        "submitButton submitButton submitButton generatePDF generatePDF generatePDF exportCSV exportCSV exportCSV . . ."
      ;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    }
  }
`

export const listCardGridTemplate = css`
  grid-template: 
    "status status status status"
    "name name price price"
    "recorrence recorrence recorrence recorrence"
    "history history delete delete"
  ;
  grid-template-columns: 1fr 1fr 1fr 1fr;

  @media screen {
    @media (min-width: ${({ theme: { screen: { screenMD} }}) => screenMD}) {
      grid-template:
        "status name price recorrence history delete"
      ;
      grid-template-columns: 80px 1fr 1fr 1fr 40px 40px;
    }
  }
`
