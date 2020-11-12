import SearchIcon from '../../images/SearchIcon';
import GeneratePDFIcon from '../../images/DownloadIcon';
import exportCSVIcon from '../../images/ExportIcon';
import { css } from 'styled-components';

export const type = 'list'
export const pageColor = '#8bc53f'
export const pageLabel = {
  name: 'greenery',
  singular: 'hortaliça',
  plural: 'hortaliças'
};

export const greenerySearchFieldsState = () => ({
  from: { value: '' },
  until: { value: '' },
  greenHouse: { value: '' },
  greenery: { value: '' },
  stage: { value: '' },
  sortBy: { value: { label: 'Data ↓', value: 'dateDsc' } },
  limit: { value: { label: '20', value: 20 } },
});

export const greenerySearchFields = ({ fields }) => ({
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
  sortBy: { 
    ...fields.sortBy,
    name: 'sortBy',
    label: 'Ordenar por',
    type: 'select',
    options: [
      { label: 'Data ↓', value: 'dateDsc' }, 
      { label: 'Data ↑', value: 'dateAsc' }, 
    ],
    isSearchable: true,
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
});

export const cardInfos = [
  { fieldLabel: 'Nome do Plano', fieldType: 'name' },
  { fieldLabel: 'Preço', fieldType: 'price' },
  { fieldLabel: '', fieldType: 'history' },
  { fieldLabel: '', fieldType: 'delete' },
]

export const searchGridTemplate = css`
  grid-template: ${`
    "sortBy"
    "limit"
    "submitButton"
    "generatePDF"
    "exportCSV"
  `};

  @media screen {
    @media (min-width: ${({ theme: { screen: { screenXS } }}) => screenXS}) {
      grid-template: ${`
        "sortBy limit"
        "submitButton submitButton" 
        "generatePDF exportCSV"
      `};
      grid-template-columns: 1fr 1fr;
    }

    @media (min-width: ${({ theme: { screen: { screenMD } }}) => screenMD }) {
      grid-template:
        "sortBy sortBy sortBy sortBy sortBy sortBy limit limit limit limit . ."
        "submitButton submitButton submitButton submitButton generatePDF generatePDF generatePDF generatePDF exportCSV exportCSV exportCSV exportCSV "
      ;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    }
    
    @media (min-width: ${({ theme: { screen: { screenLG } }}) => screenLG }) {
      grid-template:
        "sortBy sortBy sortBy limit limit limit . . . . . ."
        "submitButton submitButton submitButton generatePDF generatePDF generatePDF exportCSV exportCSV exportCSV . . ."
      ;
      grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr;
    }
  }
`

export const listCardGridTemplate = css`
  grid-template: 
    "name name price price"
    "history history delete delete"
  ;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;

  @media screen {
    @media (min-width: ${({ theme: { screen: { screenMD} }}) => screenMD}) {
      grid-template:
        "name price history delete"
      ;
      grid-template-columns: 1fr 1fr 40px 40px;
    }
  }
`
